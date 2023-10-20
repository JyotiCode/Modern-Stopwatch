import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utilities/style';

const Lap = (results) => {

  //const [lapData, setLapData] = useState();

  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  const displayTime = centiseconds => {
    let minutes = 0;
    let seconds = 0;

    if (centiseconds < 0) {
      centiseconds = 0;
    }

    

    let remainCentiseconds = centiseconds % 100;
    seconds = (centiseconds - remainCentiseconds) / 100;

    

    let remainSeconds = seconds % 60;
    minutes = (seconds - remainSeconds) / 60;

    return `${padToTwo(minutes)}:${padToTwo(remainSeconds)}:${padToTwo(
      remainCentiseconds,
    )}`;

    
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titletxt}>lap time</Text>
        <Text style={styles.titletxt}>lap no</Text>
      </View>

      <FlatList
        data={results}
        renderItem={item => {
          //console.log(item);
          return (
            <View
              style={{
               flexDirection: 'row',
               justifyContent: 'space-around',
               width: '90%',
                marginVertical: 8,
              }}>
              <Text style={{color: 'white'}}>{displayTime(item.item)}</Text>
              <Text style={{color: 'white'}}>{results.length-item.index}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Lap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
   flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  backgroundColor: colors.color3,
    paddingVertical: 10,
  },
  titletxt: {
    color:'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
