import React, { useState } from 'react'
import { Text, Image } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderActions from '../../Components/HeaderActions';
import ItemCard from '../../Components/ItemCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors'
import { ScrollView } from 'react-native-gesture-handler';
import facebookIcon from '../../../assets/icons/facebook.png'
import FloatButton from '../../Components/FloatButton';

const Tab = createMaterialTopTabNavigator();

const LeadsView = () => {
  const [imageUrl, setImageUrl] = useState<string>("https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4")


  return (
    <SafeAreaView style={styles.container}>
      <HeaderActions
        headerColor={colors.imobcasaPrimary}
        imageUrl={imageUrl}
        children={<Text style={styles.pageTitle}>Lista de Leads</Text>}
        enableBackButton={false}
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
        level="neutral"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Duas Aguardando",
          value: 5,
        }}

        modalOptions={{
          title: "Selecione uma opção abaixo",
          options: [
            {
              id: "1",
              name: "Entrar em contato",
              pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
              isPageExternalLink: true
            },
            {
              id: "2",
              name: "Mais detalhes",
              pageToNavigate: "leadview",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 1223232323,
              }
            },
            {
              id: "3",
              name: "Editar",
              pageToNavigate: "leadedit",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 12121212121
              }
            }
          ]
        }}
      />
    </ScrollView>
  )
}
function OverdueLeads() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.itemGroupName}>Pendentes(1)</Text>
      <ItemCard
        level="neutral"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Duas Aguardando",
          value: 5,
        }}

        modalOptions={{
          title: "Selecione uma opção abaixo",
          options: [
            {
              id: "1",
              name: "Entrar em contato",
              pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
              isPageExternalLink: true
            },
            {
              id: "2",
              name: "Mais detalhes",
              pageToNavigate: "leadview",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 1223232323,
              }
            },
            {
              id: "3",
              name: "Editar",
              pageToNavigate: "leadedit",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 12121212121
              }
            },
            {
              id: "4",
              name: "Ver tarefas",
              pageToNavigate: "home",
              isPageExternalLink: false
            },
          ]
        }}
      />
      <Text style={styles.itemGroupName}>Futuras(1)</Text>
      <ItemCard
        level="info"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Visita agendada para 12 horas"
        }}

        modalOptions={{
          title: "Selecione uma opção abaixo",
          options: [
            {
              id: "1",
              name: "Entrar em contato",
              pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
              isPageExternalLink: true
            },
            {
              id: "2",
              name: "Mais detalhes",
              pageToNavigate: "leadview",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 1223232323,
              }
            },
            {
              id: "3",
              name: "Editar",
              pageToNavigate: "leadedit",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 12121212121
              }
            },
            {
              id: "4",
              name: "Ver tarefas",
              pageToNavigate: "home",
              isPageExternalLink: false
            },
          ]
        }}
      />
    </ScrollView>
  )
}
function CommingLeads() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.itemGroupName}>Concluídos(2)</Text>
      <ItemCard
        level="neutral"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Arquivado - Sem contato",
        }}

        modalOptions={{
          title: "Selecione uma opção abaixo",
          options: [
            {
              id: "1",
              name: "Entrar em contato",
              pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
              isPageExternalLink: true
            },
            {
              id: "2",
              name: "Mais detalhes",
              pageToNavigate: "leadview",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 1223232323,
              }
            },
            {
              id: "3",
              name: "Editar",
              pageToNavigate: "leadedit",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 12121212121
              }
            },
            {
              id: "4",
              name: "Ver tarefas",
              pageToNavigate: "home",
              isPageExternalLink: false
            },
          ]
        }}
      />
      <ItemCard
      level="success"
        topText="José da Silva"
        middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="[Tatuapé] Tatuapé"
        leftBottomText="Vagner Fernando Zanella"
        customRightText={{
          text: "Negócio fechado em 15/04/2020",
        }}

        modalOptions={{
          title: "Selecione uma opção abaixo",
          options: [
            {
              id: "1",
              name: "Entrar em contato",
              pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
              isPageExternalLink: true
            },
            {
              id: "2",
              name: "Mais detalhes",
              pageToNavigate: "leadview",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 1223232323,
              }
            },
            {
              id: "3",
              name: "Editar",
              pageToNavigate: "leadedit",
              isPageExternalLink: false,
              navigationParameters: {
                leadid: 12121212121
              }
            },
            {
              id: "4",
              name: "Ver tarefas",
              pageToNavigate: "home",
              isPageExternalLink: false
            },
          ]
        }}
      />
    </ScrollView>
  )
}

export default LeadsView