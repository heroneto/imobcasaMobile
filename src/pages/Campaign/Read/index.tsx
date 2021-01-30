import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ButtonContainer from '@components/ButtonContainer'
import ItemDetails from '@components/ItemDetails'
import styles from './styles'

const CampaignView : React.FC = () => {
  const { navigate } = useNavigation()

  
  function handleNavigateToEditPage(){
    navigate('Edição de Campanha')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.campaignName}>Aricanduva</Text>
          <Text style={styles.campaignDetails}>150 Leads - 2 usuários</Text>
          <View style={styles.headerActions}>
            <ButtonContainer position={"left"}>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.buttonText}>Inativar</Text>
              </TouchableOpacity>            
            </ButtonContainer>
            <ButtonContainer position={"right"}>
              <TouchableOpacity onPress={handleNavigateToEditPage} style={styles.headerButton}>
                <Text style={styles.buttonText}>Editar usuários</Text>
              </TouchableOpacity>             
            </ButtonContainer>
          </View>        
        </View>

        <View style={styles.contentContainer}>
          <ItemDetails 
            title="Dados da Campanha"
            itens={[
              {
                category: "ID Facebook",
                value: "_I98a9sdjajej20d0mq"
              },
              {
                category: "Data Criação",
                value: "14/03/2020"
              },
              {
                category: "Data do cadastro no I-Mobcasa App",
                value: "15/03/2020"
              },
              {
                category: "Status",
                value: "Ativa"
              }
            ]}
          />
          <ItemDetails 
            title="Leads da Campanha"
            itens={[
              {
                category: "Total",
                value: "150"
              },
              {
                category: "Aguardando",
                value: "50"
              },
              {
                category: "Negociação em andamento",
                value: "25"
              },
              {
                category: "Negociação Concluída",
                value: "75"
              }
            ]}
          />
        </View>
      </ScrollView>

    </View>
  )
}

export default CampaignView