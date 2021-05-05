import React, { useEffect, useState } from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemCard from '@lead-management/components/ItemCard'
import { ScrollView } from 'react-native-gesture-handler'
import facebookIcon from '@commons/assets/icons/facebook.png'
import FloatButton from '@lead-management/components/FloatButton'
import { LeadStatus } from '@core/store/ducks/leadStatus/types'
import LoadingBanner from '@lead-management/components/LoadingBanner'
import { Lead } from '@core/store/ducks/lead/types'
import { useDispatch, useSelector } from 'react-redux'

import * as leadActions from '@core/store/ducks/lead/actions'
import { leadByState } from '@core/store/ducks/lead/selectors'
import { useNavigation } from '@react-navigation/core'

const Tab = createMaterialTopTabNavigator()


interface LeadsViewProps {
  leadStatus: LeadStatus[],
  error: boolean,
  loading: boolean,
  response: string
  leads: Lead[],
  leadsLoading: boolean,
  leadsError: boolean
}

const LeadsView: React.FC<LeadsViewProps> = ({
  leadStatus,
  error,
  loading,
  response,
  leads,
  leadsLoading,
  leadsError
}) => {

  return (
    <View style={styles.container}>

      {loading && !error && (
        <LoadingBanner
          visible={loading || leadsLoading}
          text="Carregando"
        />
      )}

      {leadStatus && leadStatus.length > 0 && !error && (
        <Tab.Navigator
          
          initialRouteName={leadStatus[0].id}
          tabBarOptions={{
            scrollEnabled: true,
            style: styles.navigatorContainer,
            activeTintColor: "#FFF",
            indicatorStyle: {
              backgroundColor: 'rgba(0,0,0,.5)',
              height: "100%",
            },
            labelStyle: {
              fontFamily: 'Poppins_600SemiBold',
              fontSize: 12,
              margin: 0,
            },
            tabStyle: {
              padding: 3,
            },
          }}
        >
          {leadStatus?.map(status => {
            const { name, id } = status
            
            const data = leads.filter(lead => lead.statusid === id)

            return (
              <Tab.Screen
                name={id}
                children={() => <LeadList leads={data} />}
                options={{
                  tabBarLabel: name
                }}
                key={id}
              />
            )
          })
          }
        </Tab.Navigator>
      )}

      <FloatButton
        pageToNavigate="Novo Lead"
      />



    </View>
  )
}

interface LeadListProps {
  leads: Lead[],
}

const LeadList: React.FC<LeadListProps> = ({ leads }) => {
  const { navigate } = useNavigation()

  return (
    <ScrollView style={styles.contentContainer}>
      <Text style={styles.itemGroupName}>Total({leads?.length})</Text>
      {leads?.map(lead => {
        return (
          <ItemCard
            key={lead.id}
            level="neutral"
            topText={lead.name}
            middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
            middleText={lead.formData.name}
            leftBottomText={lead.ownerData.fullName}
            customRightText={{
              text: "Duas Aguardando",
              value: 5,
            }}
            onPressFunc={() => {navigate('Lead', {
              leadid: lead.id
            }) }}
          />
        )
      })}

    </ScrollView>
  )
}



// function TodayLeads() {
//   return (
//     <ScrollView style={styles.contentContainer}>
//       <Text style={styles.itemGroupName}>Não respondidas(1)</Text>
//       <ItemCard
//         pageToNavigate="Lead"
//         navigationParameters={{
//           leadid: 1223232323,
//         }}
//         level="neutral"
//         topText="José da Silva"
//         middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
//         middleText="[Tatuapé] Tatuapé"
//         leftBottomText="Vagner Fernando Zanella"
//         customRightText={{
//           text: "Duas Aguardando",
//           value: 5,
//         }}
//       />
//     </ScrollView>
//   )
// }
// function OverdueLeads() {
//   return (
//     <ScrollView style={styles.contentContainer}>
//       <Text style={styles.itemGroupName}>Pendentes(1)</Text>
//       <ItemCard
//         pageToNavigate="Lead"
//         navigationParameters={{
//           leadid: 1223232323,
//         }}
//         level="neutral"
//         topText="José da Silva"
//         middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
//         middleText="[Tatuapé] Tatuapé"
//         leftBottomText="Vagner Fernando Zanella"
//         customRightText={{
//           text: "Duas Aguardando",
//           value: 5,
//         }}
//       />
//       <Text style={styles.itemGroupName}>Futuras(1)</Text>
//       <ItemCard
//         pageToNavigate="Lead"
//         navigationParameters={{
//           leadid: 1223232323,
//         }}
//         level="info"
//         topText="José da Silva"
//         middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
//         middleText="[Tatuapé] Tatuapé"
//         leftBottomText="Vagner Fernando Zanella"
//         customRightText={{
//           text: "Visita agendada para 12 horas"
//         }}
//       />
//     </ScrollView>
//   )
// }
// function CommingLeads() {
//   return (
//     <ScrollView style={styles.contentContainer}>
//       <Text style={styles.itemGroupName}>Concluídos(2)</Text>
//       <ItemCard
//         pageToNavigate="Lead"
//         navigationParameters={{
//           leadid: 1223232323,
//         }}
//         level="neutral"
//         topText="José da Silva"
//         middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
//         middleText="[Tatuapé] Tatuapé"
//         leftBottomText="Vagner Fernando Zanella"
//         customRightText={{
//           text: "Arquivado - Sem contato",
//         }}
//       />
//       <ItemCard
//         pageToNavigate="Lead"
//         navigationParameters={{
//           leadid: 1223232323,
//         }}
//         level="success"
//         topText="José da Silva"
//         middleIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
//         middleText="[Tatuapé] Tatuapé"
//         leftBottomText="Vagner Fernando Zanella"
//         customRightText={{
//           text: "Negócio fechado em 15/04/2020",
//         }}
//       />
// </ScrollView>
// )
// }


export default LeadsView