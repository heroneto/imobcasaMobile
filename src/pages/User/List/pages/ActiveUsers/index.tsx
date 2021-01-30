import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '@components/ItemCard'
import styles from './styles'

export default function ActiveUsers() {
  return (
    <ScrollView style={styles.contentContainer}>
      <ItemCard
        level="neutral"
        topText="Heron Eto"
        middleText="Atua em 1 campanha"       
        pageToNavigate="Usuário"
        navigationParameters={{
          userid: 1
        }}
      />
    </ScrollView>
  )
}