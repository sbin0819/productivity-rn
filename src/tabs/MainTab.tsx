import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';

import PostApp from '@components/PostsApp';
const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <View style={styles.block}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#6200ee',
        }}>
        <Tab.Screen name="Post" component={PostApp} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    zIndex: 0,
  },
});

export default MainTab;
