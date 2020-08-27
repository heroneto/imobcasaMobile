import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import LoginView from '../pages/Login'
import HomeView from '../pages/Home'

const { Navigator, Screen } = createStackNavigator()


function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <Screen name="login" component={LoginView} />
                <Screen name="home" component={HomeView} />

            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack