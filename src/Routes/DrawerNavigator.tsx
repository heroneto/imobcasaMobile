import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CampaignStackNavigator, LeadStackNavigator, UserStackNavigator } from './StackNavigator'
import MyUserEdit from '../pages/MyUserEdit'
import MyPasswordEdit from '../pages/MyPasswordEdit'
import CustomDrawer from '@components/CustomDrawer'
import { Header } from '@components/Header'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="LeadsStack" drawerContent={props => <CustomDrawer {...props} />} >     
      <Drawer.Screen name="LeadsStack" component={LeadStackNavigator} />
      <Drawer.Screen name="myuseredit" component={MyUserEdit} />
      <Drawer.Screen name="mypasswordedit" component={MyPasswordEdit} />
      <Drawer.Screen name="UsersStack" component={UserStackNavigator} />
      <Drawer.Screen name="CampaignsStack" component={CampaignStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator