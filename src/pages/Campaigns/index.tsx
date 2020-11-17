import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderActions from '../../Components/HeaderActions'
import { Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../../theme/colors'
import styles from './styles'
import FloatButton from '../../Components/FloatButton'
import ActiveCampaigs from './pages/ActiveCampaigns';
import InactiveCampaigs from './pages/InactiveCampaigns/intex';


const Tab = createMaterialTopTabNavigator();

interface CampaignsListProps {
  route: any
}


const Campaigns: React.FC<CampaignsListProps> = ({route}) => {
  const { inicialRoute } = route.params
  const [imageUrl, setImageUrl] = useState<string>("https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4")

  return (
    <SafeAreaView style={styles.container}>
       <HeaderActions
        headerColor={colors.imobcasaPrimary}
        imageUrl={imageUrl}
        children={<Text style={styles.pageTitle}>Lista de Campanhas</Text>}
        enableBackButton={true}
      />
       <Tab.Navigator
        initialRouteName={inicialRoute}
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