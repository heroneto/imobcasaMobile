import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import FacebookLogin from './pages/FacebookLogin'
import FacebookAdAccountSelect from './pages/FacebookAdAccountSelect'
import FacebookCampaignSelect from './pages/FacebookCampaignSelect'
import JoinCampaignUsers from './pages/JoinCampaignUsers'
import ConfirmCampaignCreation from './pages/ConfirmCampaignCreation'
import { Header } from 'react-native/Libraries/NewAppScreen'

const { Navigator, Screen } = createStackNavigator()

export default function NewCampaign() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName='Login no Facebook'
    >
      <Screen
        name="Login no Facebook"
        component={FacebookLogin}        
      />
      <Screen
        name="adaccountselect"
        component={FacebookAdAccountSelect}        
      />
      <Screen
        name="campaignselect"
        component={FacebookCampaignSelect}        
      />
      <Screen
        name="joincampaignusers"
        component={JoinCampaignUsers}        
      />
      <Screen
        name="confirmcampaigncreation"
        component={ConfirmCampaignCreation}        
      />
    </Navigator>

  )
}

