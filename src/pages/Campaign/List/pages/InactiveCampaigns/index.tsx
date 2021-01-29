import React from 'react'
import { Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '../../../../../components/ItemCard'
import styles from './styles'

import facebookIcon from '../../../../../../assets/icons/facebook.png'

export default function InactiveCampaigs(){
  return (
    <ScrollView style={styles.container}>
      <ItemCard
        level="neutral"
        topText="[Tatuapé] Tatuapé"
        topIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
        middleText="5 usuários atrelados e 200 Leads recebidos"
        pageToNavigate="Campanha"
        navigationParameters={{}}
      />
      
    </ScrollView>
  )
}