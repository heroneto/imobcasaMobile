import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { User } from '@core/store/ducks/listUser/types';
import ModalFeedback from '@lead-management/components/ModalFeedback';


interface TaskViewProps {
  selectedUser: User,
  deleteUser(id: string): void,
  error: boolean,
  response: string,
  loading: boolean
}

const UserView: React.FC<TaskViewProps> = ({ selectedUser, error, response, loading, deleteUser }) => {
  const { navigate } = useNavigation()
  const [ modalVisible, setModalVisible ] = React.useState<boolean>(false)

  function handleNavigateToEditPage() {
    navigate('Edição de Usuário', { userid: selectedUser.id })
  }

  function handleNavigateToPasswordChange() {
    navigate('Reset de Senha', { userid: selectedUser.id })
  }

  async function handleDeleteUser(){
    await deleteUser(selectedUser.id)
    setModalVisible(true)
  }

  function closeModalFunc(){
    setModalVisible(false)
    if(!error){
      navigate("Meus Usuários")
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.pageHeaderContainer}>
          <View style={styles.pageHeaderTitleContainer}>
            <Text style={styles.pageHeaderTitle}>{selectedUser.fullName}</Text>
            <Text style={styles.pageHeaderSubtitle}>150 Leads - 2 campanhas</Text>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.leftButtonContainer}>
              <RectButton
                style={styles.leftButton}
                onPress={handleNavigateToEditPage}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </RectButton>
            </View>
            <View style={styles.middleButtonContainer}>
              <RectButton
                style={styles.middleButton}
                onPress={handleNavigateToPasswordChange}
              >
                <Ionicons name="md-key" size={24} color="#FFF" />
              </RectButton>
            </View>
            <View style={styles.rightButtonContainer}>
              <RectButton
                style={styles.middleButton}
                onPress={handleDeleteUser}
              >
                <Ionicons name="md-trash" size={24} color="#FFF" />
              </RectButton>
            </View>
          </View>
        </View>
        <View
          style={styles.contentList}
        >
          <View style={styles.contentGroup}>
            <View style={styles.contentGroupHeader}>
              <Text style={styles.headerTitle}>
                Sobre o usuário
              </Text>
              <View style={styles.headerLine} />
            </View>
            <View style={styles.content}>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Nome completo</Text>
                <Text style={styles.value}>{selectedUser.fullName}</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>E-Mail</Text>
                <Text style={styles.value}>{selectedUser.email}</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data de criação</Text>
                <Text style={styles.value}>{new Date(selectedUser.createdAt).toLocaleDateString('pt-BR')} {new Date(selectedUser.createdAt).toLocaleTimeString('pt-BR')}</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data de atualização</Text>
                <Text style={styles.value}>{new Date(selectedUser.updatedAt).toLocaleDateString('pt-BR')} {new Date(selectedUser.updatedAt).toLocaleTimeString('pt-BR')}</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Status</Text>
                <Text style={styles.value}>{selectedUser.active ? "Ativo" : "Inativo"}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentGroup}>
            <View style={styles.contentGroupHeader}>
              <Text style={styles.headerTitle}>
                Sobre seus Leads
                        </Text>
              <View style={styles.headerLine} />
            </View>
            <View style={styles.content}>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Total</Text>
                <Text style={styles.value}>150</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Leads aguardando</Text>
                <Text style={styles.value}>50</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Leads com negociação em andamento</Text>
                <Text style={styles.value}>25</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Leads com negociação concluída</Text>
                <Text style={styles.value}>666</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <ModalFeedback 
        text={response}
        modalVisible={modalVisible}
        closeModalFunc={closeModalFunc}
        key={response}
      />

    </View>
  )
}

export default UserView