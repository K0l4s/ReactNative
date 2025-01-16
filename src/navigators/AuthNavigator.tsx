import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { LoginScreen } from '../screens'
// import OnbroadingScreen from '../screens/auth/OnbroadingScreen'
const AuthNavigator = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="OnbroadingScreen" component={OnbroadingScreen} /> */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator