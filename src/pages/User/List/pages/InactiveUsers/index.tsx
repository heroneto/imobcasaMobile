import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '../../../../../Components/ItemCard'
import styles from './styles'


export default function InactiveUsers() {
  return (
    <ScrollView style={styles.contentContainer}>
      <ItemCard
        level="neutral"
        topText="Heron Eto"
        middleText="Atua em 1 campanha"
        modalOptions={{
          title: "Selecione uma opção",
          options: [
            {
              id: "1",
              name: "Ver Detalhes",
              pageToNavigate: "userview",
              isPageExternalLink: false,
              navigationParameters: {
                userid: "123"
              }
            },
            {
              id: "2",
              name: "Editar",
              pageToNavigate: "useredit",
              isPageExternalLink: false,
              navigationParameters: {
                userid: "123"
              }
            }
          ]
        }}
      />
    </ScrollView>
  )
}