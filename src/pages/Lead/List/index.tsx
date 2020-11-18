import React, { useState } from 'react'
import { Text, Image } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderActions from '../../../Components/HeaderActions';
import ItemCard from '../../../Components/ItemCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../../theme/colors'
import { ScrollView } from 'react-native-gesture-handler';
import facebookIcon from '../../../assets/icons/facebook.png'
import FloatButton from '../../../Components/FloatButton';

const Tab = createMaterialTopTabNavigator()

export default function LeadsView({navigation}){
  const [imageUrl, setImageUrl] = useState<string>("https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4")


  function openDrawer(){
    navigation.openDrawer()
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderActions
        headerColor={colors.imobcasaPrimary}
        imageUrl={imageUrl}
        children={<Text style={styles.pageTitle}>Lista de Leads</Text>}
        enableBackButton={false}
        openDrawerFunc={openDrawer}        
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
        pageToNavigate="newlead"
      />
    </SafeAreaView>
  )
}


function TodayLeads() {
  return (
    <ScrollView style={styles.contentContainer}>
      <Text style={styles.itemGroupName}>Não respondidas(1)</Text>
      <ItemCard
        pageToNavigate="leadview"
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
        pageToNavigate="leadview"
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
        pageToNavigate="leadview"
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
        pageToNavigate="leadview"
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
      pageToNavigate="leadview"
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

