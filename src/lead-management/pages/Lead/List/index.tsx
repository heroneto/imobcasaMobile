import React, { useCallback } from 'react'
import { Text, Image, View, RefreshControl } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ItemCard from '@lead-management/components/ItemCard'
import { ScrollView } from 'react-native-gesture-handler'
import facebookIcon from '@commons/assets/icons/facebook.png'
import FloatButton from '@lead-management/components/FloatButton'
import LoadingBanner from '@lead-management/components/LoadingBanner'
import { useDispatch } from 'react-redux'

import { LeadStatus } from '@core/store/ducks/leadStatus/types'
import * as LeadStatusActions from '@core/store/ducks/leadStatus/actions'

import { Lead } from '@core/store/ducks/lead/types'
import * as LeadActions from '@core/store/ducks/lead/actions';


import { useNavigation } from '@react-navigation/core'
import Typography from '@lead-management/components/Typography'
import colors from '@core/theme/colors'

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
  const dispatch = useDispatch()
  const [ refreshing, setRefreshing ] = React.useState<boolean>(false)

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    dispatch(LeadStatusActions.list())
    dispatch(LeadActions.list())
    setRefreshing(false)
    
  }, []);

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
    }
    >

      {leadStatus.length === 0 && (
        <Typography
          align="center"
          color={colors.imobcasaPrimary}
          font="primaryRegular"
          size="md"
          text="Lista não carregada, arraste para baixo para carregar"
        />
      )}

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



    </ScrollView>
  )
}

interface LeadListProps {
  leads: Lead[],
}

const LeadList: React.FC<LeadListProps> = ({ leads }) => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const [ refreshing, setRefreshing ] = React.useState<boolean>(false)

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    dispatch(LeadStatusActions.list())
    dispatch(LeadActions.list())
    setRefreshing(false)
    
  }, []);


  return (
    <ScrollView 
      style={styles.contentContainer}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }      >
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


export default LeadsView