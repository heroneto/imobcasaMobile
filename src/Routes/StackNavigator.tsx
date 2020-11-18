import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import LeadsView from '../pages/Lead/List'
import TaskView from '../pages/Task/Read'
import NewTaskView from '../pages/Task/Create'
import LeadView from '../pages/Lead/Read'
import LeadEdit from '../pages/Lead/Edit'
import SearchPage from '../pages/Lead/Search'
import TaskEdit from '../pages/Task/Edit'
import UsersList from '../pages/User/List/intex'
import UserEdit from '../pages/User/Edit'
import UserView from '../pages/User/Read'
import UserPasswordChange from '../pages/User/ResetPassword'
import NewUser from '../pages/User/Create'
import NewCampaign from '../pages/Campaign/Create'
import NewLead from '../pages/Lead/Create'
import Campaigns from '../pages/Campaign/List'
import CampaignView from '../pages/Campaign/Read'
import CampaignEdit from '../pages/Campaign/Edit'


const Stack = createStackNavigator()



export const UserStackNavigator = () => {
  return (
  <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen name="users" component={UsersList} />
      <Stack.Screen name="useredit" component={UserEdit} />
      <Stack.Screen name="userview" component={UserView} />
      <Stack.Screen name="newuser" component={NewUser} /> 
      <Stack.Screen name="userpasswordchange" component={UserPasswordChange} />   
    </Stack.Navigator>
  )
  
}

export const CampaignStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen name="campaigns" component={Campaigns} />
      <Stack.Screen name="newcampaign" component={NewCampaign} />     
      <Stack.Screen name="campaignview" component={CampaignView} />
      <Stack.Screen name="campaignedit" component={CampaignEdit} />
    </Stack.Navigator>
  )
}

export const LeadStackNavigator = () =>  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}>
      <Stack.Screen name="leads" component={LeadsView} />
      <Stack.Screen name="newlead" component={NewLead} />     
      <Stack.Screen name="leadview" component={LeadView} />
      <Stack.Screen name="leadedit" component={LeadEdit} />
      <Stack.Screen name="taskview" component={TaskView} />
      <Stack.Screen name="newtask" component={NewTaskView} />
      <Stack.Screen name="taskedit" component={TaskEdit} />
      <Stack.Screen name="search" component={SearchPage} />
    </Stack.Navigator>
  )
}
