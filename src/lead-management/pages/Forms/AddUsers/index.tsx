import React, { useEffect, useState } from 'react'
import styles from './styles'
import { View } from 'react-native'
import InputContainer from '@lead-management/components/InputContainer'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import ItemUserCard from '@lead-management/components/ItemUserCard'
import ModalOptions from '@lead-management/components/ModalOptions'
import { User } from '@core/store/ducks/userForm/types'
import { Form } from '@core/store/ducks/forms/types'
import LoadingBanner from '@lead-management/components/LoadingBanner'
import ModalFeedback from '@lead-management/components/ModalFeedback'
import { useNavigation } from '@react-navigation/core'
import Typography from '@lead-management/components/Typography'

var searchTimeout: any = null

interface AddUserFormViewProps {
  users: User[],
  form: Form | null,
  actions: {
    addUser(formId: string, userId: string): void,
    resetStore(): void,
    listNotRelatedUsers(formId: string): void,
  }
  usersLoading: boolean,
  usersError: boolean,
  usersResponse: string,
  formsLoading: boolean,
  formsError: boolean,
  formsResponse: string,
}

const AddUserForm: React.FC<AddUserFormViewProps> = ({
  users,
  form,
  actions,
  usersLoading,
  formsLoading,
  usersError,
  formsError,
  formsResponse,
  usersResponse
}) => {
  const [selectedUser, setSelectedUser] = useState<User | null>()
  const [listUsers, setListUsers] = useState<User[]>([])
  const { goBack } = useNavigation()

  useEffect(() => {
    if (users.length === 0) {
      setListUsers([])
    }
    if (users.length > 0) {
      setListUsers(users)
    }
  }, [users])

  const handleSearch = (query: string) => {
    clearTimeout(searchTimeout)
    if (query.length > 0) {
      searchTimeout = setTimeout(() => {
        setListUsers(state => [...state.filter(item => item.fullName.includes(query))])
      }, 500)
    } else {
      setListUsers(users)
    }
  }

  const handleAddUser = () => {
    if (selectedUser && form) {
      actions.addUser(form.id, selectedUser.id)
      setSelectedUser(null)
    }
  }

  const handleGoback = React.useCallback(() => {
    actions.resetStore()
    setListUsers([])
    goBack()
  }, [actions])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputSearchContainer}>
        <InputContainer
          label="Buscar usuário pelo nome"
          enabled={listUsers.length > 0}
        >
          <TextInput
            placeholder="Digite o nome do usuário"            
            style={styles.textInput}
            onChangeText={value => handleSearch(value)}
            editable={listUsers.length > 0}
          />
        </InputContainer>
      </View>
      <View style={styles.userListContainer}>
        {listUsers && listUsers.length === 0 && (
          <Typography

            align="center"
            font="primaryRegular"
            size="md"
            text="Nenhum usuário disponível para cadastrar neste formulário"
            color="#000"
          />
        )}

        {listUsers && listUsers.length > 0 && listUsers.map(user => {
          return (
            <ItemUserCard
              fullName={user.fullName}
              info={user.admin ? "Administrador" : "Usuário normal"}
              onPress={() => setSelectedUser(user)}
              key={user.id}
            />
          )
        })}
      </View>

      <ModalOptions
        closeModalFunc={() => setSelectedUser(null)}
        modalVisible={selectedUser ? true : false}
        text={`O usuário ${selectedUser?.fullName} será vinculado ao formulário ${form?.name} para receber Leads, deseja continuar?`}
        yesLabel="Sim"
        yesFunc={handleAddUser}
        noLabel="Não"
        noFunc={() => setSelectedUser(null)}
      />


      <ModalFeedback
        text={usersResponse}
        closeModalFunc={() => {
          if (form) {
            actions.listNotRelatedUsers(form.id)
          }
        }}
        modalVisible={usersResponse && !usersError ? true : false}
      />

      <ModalFeedback
        text={formsResponse}
        closeModalFunc={handleGoback}
        modalVisible={formsError}
      />
      <ModalFeedback
        text={usersResponse}
        closeModalFunc={handleGoback}
        modalVisible={usersError}
      />
      <LoadingBanner
        text="Carregando"
        visible={usersLoading || formsLoading}
      />

    </ScrollView>
  )
}


export default AddUserForm