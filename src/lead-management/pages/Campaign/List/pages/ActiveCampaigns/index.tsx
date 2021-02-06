import React from 'react'
import { View,Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '@lead-management/components/ItemCard'
import styles from './styles'

import facebookIcon from '@commons/assets/icons/facebook.png'

export default function ActiveCampaigs(){
  return (
    <ScrollView style={styles.container}>
      <ItemCard
        level="neutral"
        topText="[Tatuapé] Tatuapé"
        topIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="5 usuários atrelados e 200 Leads recebidos"
        pageToNavigate="Campanha"
        navigationParameters={{
          
        }}
      />
      
    </ScrollView>
  )
}