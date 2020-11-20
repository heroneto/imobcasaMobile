import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '../../../../../Components/ItemCard'
import styles from './styles'

export default function ActiveUsers() {
  return (
    <ScrollView style={styles.contentContainer}>
      <ItemCard
        level="neutral"
        topText="Heron Eto"
        middleText="Atua em 1 campanha"       
        pageToNavigate="userview"
        navigationParameters={{
          userid: 1
        }}
      />
    </ScrollView>
  )
}