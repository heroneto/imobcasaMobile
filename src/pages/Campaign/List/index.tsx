import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderActions from '../../../Components/HeaderActions'
import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../../../theme/colors'
import styles from './styles'
import FloatButton from '../../../Components/FloatButton'
import ActiveCampaigs from './pages/ActiveCampaigns'
import InactiveCampaigs from './pages/InactiveCampaigns'


const Tab = createMaterialTopTabNavigator();

interface CampaignsListProps {
  route: any,
  navigation: any
}


const Campaigns: React.FC<CampaignsListProps> = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
       <HeaderActions
        headerColor={colors.imobcasaPrimary}
        title="Campanhas"
        enableBackButton={false}
        openDrawerFunc={() => navigation.openDrawer()}        
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
          component={ActiveCampaigs}
          options={{
            tabBarLabel: "Aguardando"
          }}
        />
        <Tab.Screen
          name="1"
          component={InactiveCampaigs}
          options={{
            tabBarLabel: "Inativas"
          }}
        />
      </Tab.Navigator>

      <FloatButton
        pageToNavigate="newcampaign"
      />
    </SafeAreaView>
  )
}

export default Campaigns