import {StyleSheet, Text, View,Dimensions} from 'react-native';
import React from 'react';
import { colors } from '../utilities/style';

const {height,width}=Dimensions.get('screen')

const Clock = ({time}) => {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = centiseconds => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0) {
      centiseconds = 0;
    }

    if (centiseconds < 100) {
      return {
        minutes: '00',
        seconds: '00',
        miliseconds: padToTwo(centiseconds),
      };
    }

    let remainCentiseconds = centiseconds % 100;
    seconds = (centiseconds - remainCentiseconds) / 100;

    if (seconds < 60) {
      return {
        minutes: '00',
        seconds: padToTwo(seconds),
        miliseconds: padToTwo(remainCentiseconds),
      };
    }

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    return {
      minutes: padToTwo(minutes),
      seconds: padToTwo(remainSeconds),
      miliseconds: padToTwo(remainCentiseconds),
    };

    
  };

  
        
  return (
    <View style={styles.container}>
      <View style={styles.roundcont}>
        <Text style={{color:colors.color2,textTransform: 'uppercase',fontWeight:'bold',fontSize:23, marginTop:10}}>StopWatch</Text>

        <View style={styles.centrecont}>
          <View  style={styles.centerinnercont} >
            <Text style={styles.timetxt}>{displayTime(time).minutes}</Text>
            <Text style={{color:colors.color5,opacity:0.5}}>min</Text>
          </View>
          <View style={styles.centerinnercont}>
            <Text style={styles.timetxt}>{displayTime(time).seconds}</Text>
            <Text style={{color:colors.color5,opacity:0.5}}>sec</Text>
          </View>
          <View style={styles.centerinnercont}>
            <Text style={styles.timetxt}>{displayTime(time).miliseconds}</Text>
            <Text style={{color:colors.color5,opacity:0.5}}>msec</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundcont: {
    height: width-100,
    width: width-100,
    backgroundColor:colors.color4,
   // backgroundColor:'yellow',
    borderRadius: width-100,
    justifyContent:'space-around',
    alignItems:'center'
  },
  centrecont:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'80%'
  },
  centerinnercont:{
    alignItems:'center',
    

  },
  timetxt:{
    fontSize:30,
    color:colors.color5
  }
});
