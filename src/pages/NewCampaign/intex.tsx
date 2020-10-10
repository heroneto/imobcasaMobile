import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import HeaderActions from '../../Components/HeaderActions'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import FacebookLogin from './Pages/FacebookLogin/intex'
import FacebookAdAccountSelect from './Pages/FacebookAdAccountSelect'

const { Navigator, Screen } = createStackNavigator()

export default function NewCampaign(){
     return (
        <Navigator 
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName='newleadstepone'
    >
            <Screen name="facebooklogin" component={FacebookLogin} />
            <Screen name="adaccountselect" component={FacebookAdAccountSelect} />
        </Navigator>

    )
}

