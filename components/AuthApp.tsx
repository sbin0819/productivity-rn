import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import useAuthActions from '../hooks/useAuthActions';
import useUser from '../hooks/useUser';

function AuthStatus() {
  const user = useUser();
  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인하세요'}
      </Text>
    </View>
  );
}

function AuthButtons() {
  const {authorize, logout} = useAuthActions();
  const onPressLogin = () =>
    authorize({
      id: 1,
      username: 'johndoe',
      displayName: 'john doe',
    });
  const onPressLogout = () => logout();
  return (
    <View>
      <Button title="login" onPress={onPressLogin} />
      <Button title="logout" onPress={onPressLogout} />
    </View>
  );
}

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  status: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
  },
});

export default AuthApp;
