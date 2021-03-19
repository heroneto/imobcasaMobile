import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ButtonContainer from '@lead-management/components/ButtonContainer'
import ItemDetails from '@lead-management/components/ItemDetails'
import styles from './styles'
import { Form } from '@core/store/ducks/forms/types'
import { Feather } from '@expo/vector-icons';
import Typography from '@lead-management/components/Typography'
import LoadingBanner from '@lead-management/components/LoadingBanner'
import ModalFeedback from '@lead-management/components/ModalFeedback'


interface FormDetailsProps {
  form: Form,
  loading: boolean,
  error: boolean,
  response: string,
  getForm(id: string): void,
  enable(id: string): void,
  disable(id: string): void,
}


const FormDetails: React.FC<FormDetailsProps> = ({ form, loading, error, response, disable, enable, getForm }) => {
  const { navigate, goBack } = useNavigation()

  function handleNavigateToEditPage() {
    navigate('FormAddUsers', {
      id: form?.id || ""
    })
  }

  function handleNavigateToUsersView(page:string){
    navigate(page, {
      id: form.id
    })
  }

  function handleFormStatusButton(id: string, active: boolean) {
    if (active) {
      disable(id)
    } else {
      enable(id)
    }
    getForm(id)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.campaignName}>{form?.name}</Text>
          <Text style={styles.campaignDetails}>150 Leads - 2 usuários</Text>
          <View style={styles.headerActions}>
            <ButtonContainer position={"left"}>
              <TouchableOpacity
                style={styles.headerButton}
                onPress={() => {
                  if (form) {
                    handleFormStatusButton(form?.id, form?.active)
                  }
                }}
              >
                <Typography
                  color="#FFF"
                  font="primaryBold"
                  size="md"
                  text={form?.active ? "Inativar" : "Ativar"}
                  align="center"
                />
              </TouchableOpacity>
            </ButtonContainer>
            <ButtonContainer position="middle">
              <TouchableOpacity onPress={() => handleNavigateToUsersView("FormAddUsers")} style={styles.headerButton}>
                <Feather name="user-plus" size={24} color="white" />
                <Typography
                  color="#FFF"
                  font="primaryBold"
                  size="md"
                  text="ADD"
                  align="center"
                />
              </TouchableOpacity>
            </ButtonContainer>
            <ButtonContainer position={"right"}>
              <TouchableOpacity onPress={() => handleNavigateToUsersView("FormRemoveUsers")} style={styles.headerButton}>
                <Feather name="user-x" size={24} color="white" />
                <Typography
                  color="#FFF"
                  font="primaryBold"
                  size="s"
                  text="DEL"
                  align="center"
                />
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
                value: form?.fbFormId || ""
              },
              {
                category: "Data Criação",
                value: form?.createdAt.toLocaleString() || ""
              },
              {
                category: "Status",
                value: form?.active ? "Ativa" : "Desativada"
              }
            ]}
          />
          <ItemDetails 
            title="Usuários da campanha"
            itens={[
              {
                category: "Total de usuários",
                value: "2"
              },
              {
                category: "Nome dos usuários",
                value: "Heron Eto, Vagner Zanela, Guilherme"
              },
            ]}
          />
        </View>
      </ScrollView>
      <LoadingBanner 
        visible={loading}
        text="Carregando..."
      />

      <ModalFeedback 
        modalVisible={error}
        text={response}
        closeModalFunc={goBack}        
      />

    </View>
  )
}

export default FormDetails