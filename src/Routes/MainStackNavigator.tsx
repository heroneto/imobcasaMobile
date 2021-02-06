import React from 'react'
import {  createStackNavigator } from '@react-navigation/stack'
import LoginContainer from '@lead-management/containers/Login'
import DrawerNavigator from './DrawerNavigator'
const Stack = createStackNavigator()


export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen 
        name="login" 
        component={LoginContainer} 
      />
      <Stack.Screen 
        name="home" 
        component={DrawerNavigator} 
      />
    </Stack.Navigator>
  )
}