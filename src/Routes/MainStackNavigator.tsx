import React from 'react'
import {  createStackNavigator } from '@react-navigation/stack'
import LoginView from '../pages/Login'
import DrawerNavigator from './DrawerNavigator'
const Stack = createStackNavigator()


export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen 
        name="login" 
        component={LoginView} 
        
      />
      <Stack.Screen name="home" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}