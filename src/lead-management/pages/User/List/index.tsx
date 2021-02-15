import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActiveUsers from './pages/ActiveUsers';
import InactiveUsers from './pages/InactiveUsers';
import FloatButton from '@lead-management/components/FloatButton';

import { ListUser } from '@core/store/ducks/listUser/types'

const Tab = createMaterialTopTabNavigator();

interface UsersListProps {
  activeUsers: ListUser[],
  inactiveUsers: ListUser[],
  error: boolean,
  loading: boolean
}

const UsersList : React.FC<UsersListProps> = ({activeUsers, inactiveUsers, error, loading}) =>  {
  

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
          children={
            () => <ActiveUsers users={activeUsers}/>
          }
          options={{
            tabBarLabel: "Ativos"
          }}

        />
        <Tab.Screen
          name="1"
          children={
            () => <InactiveUsers users={inactiveUsers}/>
          }
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