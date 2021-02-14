import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CampaignStackNavigator, LeadStackNavigator, UserStackNavigator } from './StackNavigator'
import MyPasswordEdit from '../lead-management/pages/MyPasswordEdit'
import CustomDrawer from '@lead-management/components/CustomDrawer'

import MyUserEditContainer from '@lead-management/containers/MyUserEdit'
import MyPasswordEditContainer from '@lead-management/containers/MyPasswordEdit'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="LeadsStack" drawerContent={props => <CustomDrawer key={1} {...props} />} >     
      <Drawer.Screen name="LeadsStack" component={LeadStackNavigator} />
      <Drawer.Screen name="myuseredit" component={MyUserEditContainer} />
      <Drawer.Screen name="mypasswordedit" component={MyPasswordEditContainer} />
      <Drawer.Screen name="UsersStack" component={UserStackNavigator} />
      <Drawer.Screen name="CampaignsStack" component={CampaignStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator