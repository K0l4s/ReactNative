import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { LoginScreen, OnbroadingScreen } from '../screens'
const AuthNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
  <Stack.Screen name="OnbroadingScreen" component={OnbroadingScreen} />
  <Stack.Screen name="LoginScreen" component={LoginScreen} />

    </Stack.Navigator>
  )
}

export default AuthNavigator