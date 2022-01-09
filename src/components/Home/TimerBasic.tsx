import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Timer} from '@components/common';

function DefaultTimer() {
  return (
    <Timer
      duration={3}
      onEnd={() => {
        console.log('end timer...');
      }}>
      {(timerData: any) => (
        <View>
          <View style={styles.display}>
            <Text style={styles.displayText}>
              {timerData.minutes} : {timerData.seconds}
            </Text>
          </View>
          <View>
            <Button title="start" onPress={() => timerData.start()} />
            <Button title="stop" onPress={() => timerData.stop()} />
            <Button title="reset" onPress={() => timerData.reset()} />
          </View>
        </View>
      )}
    </Timer>
  );
}

const styles = StyleSheet.create({
  display: {
    paddingBottom: 10,
  },
  displayText: {
    fontSize: 45,
    color: '#5870d8',
  },
});

export default DefaultTimer;
