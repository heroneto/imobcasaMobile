import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActiveUsers from './pages/ActiveUsers';
import InactiveUsers from './pages/InactiveUsers';
import FloatButton from '@components/FloatButton';

const Tab = createMaterialTopTabNavigator();

interface UsersListProps {
  route: any,  
}

const UsersList : React.FC<UsersListProps> = () =>  {
  
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="0"
        tabBarOptions={{
          style: styles.navigatorContainer,
          activeTintColor: "#FFF",
          indicatorStyle: {
            backgroundColor: 'rgba(0,0,0,.5)',
            height: "100%",
          },
          labelStyle: {
            fontFamily: 'Poppins_400Regular',
            fontSize: 14,
            margin: 0,
          },
          tabStyle: {
            padding: 5,
          },
        }}
      >
        <Tab.Screen
          name="0"
          component={ActiveUsers}
          options={{
            tabBarLabel: "Ativos"
          }}
        />
        <Tab.Screen
          name="1"
          component={InactiveUsers}
          options={{
            tabBarLabel: "Inativos"
          }}
        />
      </Tab.Navigator>
      <FloatButton 
        pageToNavigate="newuser"        
      />
    </View>
  )
}


export default UsersList