import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';

import {colors} from '../utilities/style';
import Clock from './Clock';
import Lap from './Lap';
import Controller from './Controller';

const Home = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);

  const timer = useRef(null);

  const handelStart = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime(previousTime => previousTime + 100);
      }, 1000);
      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }

    setIsRunning(previousState => !previousState);
  }, [isRunning]);

  const handleLap = useCallback(() => {
    if (isRunning) {
      setResults(previousState => [time, ...previousState]);
    }
  }, [isRunning, time]);

  const handelStop = useCallback(() => {
    setResults([]);
    setTime(0);
    clearInterval(timer.current);
    setIsRunning(false);
  }, [isRunning]);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{flex: 50}}>
        <Clock time={time} />
      </View>
      <View style={{flex: 40}}>
        <Lap results={results} />
      </View>
      <View style={{flex: 10}}>
        <Controller
          handelStart={handelStart}
          handelLap={ handleLap}
          handelStop={handelStop}
          isRunning={isRunning}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
