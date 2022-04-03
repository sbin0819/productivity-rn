import React from 'react';
import {SafeAreaView, StyleSheet, Text, Pressable} from 'react-native';

import TimerBasic from './TimerBasic';
import {signIn, signUp} from '../../lib/auth';

function Home() {
  const onSubmit = async () => {
    await signUp({email: 'user@gmail.com', password: 'Password1!'});
  };
  return (
    <SafeAreaView style={styles.block}>
      <Text>Timer</Text>
      <Pressable onPress={onSubmit}>
        <Text>SIGNUP</Text>
      </Pressable>
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
