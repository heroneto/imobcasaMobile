import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { CampaignStackNavigator, LeadStackNavigator, UserStackNavigator } from './StackNavigator'
import MyUserEdit from '../pages/MyUserEdit'
import MyPasswordEdit from '../pages/MyPasswordEdit'

const Drawer = createDrawerNavigator()


function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}        
      /> */}
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="leads" >     
      <Drawer.Screen name="leads" component={LeadStackNavigator} />
      <Drawer.Screen name="myuseredit" component={MyUserEdit} />
      <Drawer.Screen name="mypasswordedit" component={MyPasswordEdit} />
      <Drawer.Screen name="users" component={UserStackNavigator} />
      <Drawer.Screen name="campaigns" component={CampaignStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator