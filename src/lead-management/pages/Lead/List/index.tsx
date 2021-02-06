import React, { useState } from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemCard from '@lead-management/components/ItemCard'
import { ScrollView } from 'react-native-gesture-handler'
import facebookIcon from '@commons/assets/icons/facebook.png'
import FloatButton from '@lead-management/components/FloatButton'

const Tab = createMaterialTopTabNavigator()

interface LeadsViewProps {
  navigation: any,
  theme: any
}

const LeadsView: React.FC<LeadsViewProps> = (props) => {
  

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
            fontFamily: 'Poppins_600SemiBold',
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
          component={TodayLeads}
          options={{
            tabBarLabel: "Aguardando"
          }}
        />
        <Tab.Screen
          name="1"
          component={OverdueLeads}
          options={{
            tabBarLabel: "Em andamento"
          }}
        />
        <Tab.Screen
          name="2"
          component={CommingLeads}
          options={{
            tabBarLabel: "Concluídos"
          }}
        />
      </Tab.Navigator>

      <FloatButton
        pageToNavigate="Novo Lead"
      />
    </View>
  )
}


function TodayLeads() {
  return (
    <ScrollView style={styles.contentContainer}>
      <Text style={styles.itemGroupName}>Não respondidas(1)</Text>
      <ItemCard
        pageToNavigate="Lead"
        navigationParameters={{
          leadid: 1223232323,
        }}
        level="neutral"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Duas Aguardando",
          value: 5,
        }}
      />
    </ScrollView>
  )
}
function OverdueLeads() {
  return (
    <ScrollView style={styles.contentContainer}>
      <Text style={styles.itemGroupName}>Pendentes(1)</Text>
      <ItemCard
        pageToNavigate="Lead"
        navigationParameters={{
          leadid: 1223232323,
        }}
        level="neutral"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Duas Aguardando",
          value: 5,
        }}
      />
      <Text style={styles.itemGroupName}>Futuras(1)</Text>
      <ItemCard
        pageToNavigate="Lead"
        navigationParameters={{
          leadid: 1223232323,
        }}
        level="info"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Visita agendada para 12 horas"
        }}
      />
    </ScrollView>
  )
}
function CommingLeads() {
  return (
    <ScrollView style={styles.contentContainer}>
      <Text style={styles.itemGroupName}>Concluídos(2)</Text>
      <ItemCard
        pageToNavigate="Lead"
        navigationParameters={{
          leadid: 1223232323,
        }}
        level="neutral"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Arquivado - Sem contato",
        }}
      />
      <ItemCard
      pageToNavigate="Lead"
      navigationParameters={{
        leadid: 1223232323,
      }}
      level="success"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Negócio fechado em 15/04/2020",
        }}
      />
    </ScrollView>
  )
}


export default LeadsView