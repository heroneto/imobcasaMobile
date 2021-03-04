import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ButtonContainer from '@lead-management/components/ButtonContainer'
import ItemDetails from '@lead-management/components/ItemDetails'
import styles from './styles'
import { Form } from '@core/store/ducks/forms/types'
import { fromPairs } from 'lodash'


interface FormDetailsProps {
  form: Form | null,
  loading: boolean,
  error: boolean,
  response: string
}


const FormDetails : React.FC<FormDetailsProps> = ({form, loading, error, response}) => {
  const { navigate } = useNavigation()

  console.log(form)
  
  function handleNavigateToEditPage(){
    navigate('Edição de Campanha')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.campaignName}>{form?.name}</Text>
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
                value: form?.fbFormId
              },
              {
                category: "Data Criação",
                value: form?.createdAt.toLocaleString()
              },
              {
                category: "Status",
                value: form?.active ? "Ativa" : "Desativada"
              }
            ]}
          />
          {/* <ItemDetails 
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
          /> */}
        </View>
      </ScrollView>

    </View>
  )
}

export default FormDetails