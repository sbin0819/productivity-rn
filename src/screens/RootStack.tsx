import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainTab from '@tabs/MainTab';
import PostAppScreen from './PostAppScreen';
import TodoAppScreen from './TodoAppScreen';
import UserScreen from './UserScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TodoApp"
        component={TodoAppScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PostApp"
        component={PostAppScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
