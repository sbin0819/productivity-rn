import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PostAppScreen from './PostAppScreen';
import TodoAppScreen from './TodoAppScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostApp"
        component={PostAppScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TodoApp"
        component={TodoAppScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
