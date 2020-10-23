import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import FacebookLogin from './Pages/FacebookLogin/intex'
import FacebookAdAccountSelect from './Pages/FacebookAdAccountSelect'
import FacebookCampaignSelect from './Pages/FacebookCampaignSelect'

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
            <Screen name="campaignselect" component={FacebookCampaignSelect} />
        </Navigator>

    )
}

