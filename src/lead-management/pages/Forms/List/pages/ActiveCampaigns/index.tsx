import React from 'react'
import { View,Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '@lead-management/components/ItemCard'
import styles from './styles'

import facebookIcon from '@commons/assets/icons/facebook.png'
import { useNavigation } from '@react-navigation/native'

export default function ActiveCampaigs(){
  const { navigate } = useNavigation()
  return ( 
    <ScrollView style={styles.container}>
      <ItemCard
        level="neutral"
        topText="[Tatuapé] Tatuapé"
        topIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="5 usuários atrelados e 200 Leads recebidos"
        onPressFunc={() => navigate("Form")}
      />
      
    </ScrollView>
  )
}