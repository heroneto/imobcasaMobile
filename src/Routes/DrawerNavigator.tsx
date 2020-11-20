import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CampaignStackNavigator, LeadStackNavigator, UserStackNavigator } from './StackNavigator'
import MyUserEdit from '../pages/MyUserEdit'
import MyPasswordEdit from '../pages/MyPasswordEdit'
import CustomDrawer from '../Components/CustomDrawer'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} >     
      <Drawer.Screen name="leads" component={LeadStackNavigator} />
      <Drawer.Screen name="myuseredit" component={MyUserEdit} />
      <Drawer.Screen name="mypasswordedit" component={MyPasswordEdit} />
      <Drawer.Screen name="users" component={UserStackNavigator} />
      <Drawer.Screen name="campaigns" component={CampaignStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator