import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CampaignStackNavigator, LeadStackNavigator, UserStackNavigator } from './StackNavigator'
import MyUserEdit from '../lead-management/pages/MyUserEdit'
import MyPasswordEdit from '../lead-management/pages/MyPasswordEdit'
import CustomDrawer from '@lead-management/components/CustomDrawer'
import { Header } from '@lead-management/components/Header'

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