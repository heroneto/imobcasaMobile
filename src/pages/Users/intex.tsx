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

const Tab = createMaterialTopTabNavigator();

export default function UsersList() {
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
      />
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
    </SafeAreaView>
  )
}


function ActiveUsers() {
  return (
    <ScrollView style={styles.contentContainer}>
      <ItemCard
        level="neutral"
        topText="Heron Eto"
        middleText="Atua em 1 campanha"
        modalOptions={{
          title: "Selecione uma opção",
          options: [
            {
              id: "1",
              name: "Ver Detalhes",
              pageToNavigate: "userview",
              isPageExternalLink: false,
              navigationParameters: {
                userid: "123"
              }
            },
            {
              id: "2",
              name: "Editar",
              pageToNavigate: "useredit",
              isPageExternalLink: false,
              navigationParameters: {
                userid: "123"
              }
            }
          ]
        }}
      />
    </ScrollView>
  )
}
function InactiveUsers() {
  return (
    <ScrollView style={styles.contentContainer}>
      <ItemCard
        level="neutral"
        topText="Heron Eto"
        middleText="Atua em 1 campanha"
        modalOptions={{
          title: "Selecione uma opção",
          options: [
            {
              id: "1",
              name: "Ver Detalhes",
              pageToNavigate: "userview",
              isPageExternalLink: false,
              navigationParameters: {
                userid: "123"
              }
            },
            {
              id: "2",
              name: "Editar",
              pageToNavigate: "useredit",
              isPageExternalLink: false,
              navigationParameters: {
                userid: "123"
              }
            }
          ]
        }}
      />
    </ScrollView>
  )
}