import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles'
import FloatButton from '@components/FloatButton'
import ActiveCampaigs from './pages/ActiveCampaigns'
import InactiveCampaigs from './pages/InactiveCampaigns'


const Tab = createMaterialTopTabNavigator();

interface CampaignsListProps {
  route: any,
  navigation: any
}


const Campaigns: React.FC<CampaignsListProps> = ({navigation}) => {

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
          component={ActiveCampaigs}
          options={{
            tabBarLabel: "Aguardando",
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
        pageToNavigate="Nova Campanha"
      />
    </View>
  )
}

export default Campaigns