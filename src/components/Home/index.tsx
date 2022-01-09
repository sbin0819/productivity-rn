import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import TimerBasic from './TimerBasic';

function Home() {
  return (
    <SafeAreaView style={styles.block}>
      <Text>Timer</Text>
      <TimerBasic />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
