import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import HeaderActions from '../../Components/HeaderActions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import ItemCard from '../../Components/ItemCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import { ScrollView } from 'react-native-gesture-handler';
import ActiveUsers from './pages/ActiveUsers';
import InactiveUsers from './pages/InactiveUsers';
import FloatButton from '../../Components/FloatButton';

const Tab = createMaterialTopTabNavigator();

interface UsersListProps {
  route: any
}

const UsersList : React.FC<UsersListProps> = ({route}) =>  {
  const { inicialRoute } = route.params
  const { navigate, goBack } = useNavigation()
  const [ imageUrl, setImageUrl ] = useState<string>("https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4")

  function handleNavigateToAppConfigPage() {
    navigate('appconfig')
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderActions 
        headerColor={colors.imobcasaPrimary}
        imageUrl={imageUrl} 
        children={<Text style={styles.pageTitle}>Lista de Usuários do App</Text>}
        enableBackButton={true}
        backButtonCustomAction={handleNavigateToAppConfigPage}
      />
      <Tab.Navigator
        initialRouteName={inicialRoute || "0"}
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
    </SafeAreaView>
  )
}


export default UsersList