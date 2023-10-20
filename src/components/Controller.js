import {StyleSheet, Text, View, FlatList, Dimensions,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utilities/style';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('screen');

const Controller = ({handelStart, handleLap, handelStop, isRunning}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btncontainer, {backgroundColor:colors.color3,}]}
        onPress={()=>handelStop()}>
        <FontAwesome5Icons name="stop" color={'#fff'} size={15} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btncontainer, {backgroundColor: colors.color2}]}
        onPress={() => handelStart()}>
        <FontAwesome5Icons
          name={isRunning ? 'pause' : 'play'}
          color={'#fff'}
          size={15}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btncontainer, {backgroundColor:colors.color3,}]}
        onPress={() => handleLap()}>
        <FontAwesome5Icons name="step-forward" color={'#fff'} size={15} />
      </TouchableOpacity>
    </View>
  );
};

export default Controller;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: width,
    //backgroundColor:'yellow'
  },
  btncontainer: {
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
