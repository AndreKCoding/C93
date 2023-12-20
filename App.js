import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './screens/Login';
import Register from './screens/Register';
import Chat from './screens/Chat';
import Groups from './screens/Groups';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Groups" component={Groups} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
