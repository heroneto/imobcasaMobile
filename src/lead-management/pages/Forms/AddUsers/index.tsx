import React, { useEffect, useState } from 'react'
import styles from './styles'
import { View } from 'react-native'
import InputContainer from '@lead-management/components/InputContainer'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import ItemUserCard from '@lead-management/components/ItemUserCard'
import ModalOptions from '@lead-management/components/ModalOptions'
import { User } from '@core/store/ducks/users/types'
import { Form } from '@core/store/ducks/forms/types'
import LoadingBanner from '@lead-management/components/LoadingBanner'
import ModalFeedback from '@lead-management/components/ModalFeedback'
import { useNavigation } from '@react-navigation/core'

var searchTimeout: any = null

interface AddUserFormViewProps {
  users: User[],
  form: Form,
  actions: {
    addUser(formId: string, userId: string): void
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

  const handleAddUser = async () => {
    if (selectedUser) {
      await actions.addUser(form.id, selectedUser.id)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputSearchContainer}>
        <InputContainer
          label="Usuário"
        >
          <TextInput
            placeholder="Digite o nome do usuário"
            enabled={true}
            style={styles.textInput}
            onChangeText={value => handleSearch(value)}
          />
        </InputContainer>
      </View>
      <View style={styles.userListContainer}>
        {listUsers.map(user => {
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
        text={formsResponse}
        closeModalFunc={goBack}
        modalVisible={formsResponse && !formsError ? true : false} 

      />
      <ModalFeedback
        text={formsResponse}
        closeModalFunc={goBack}
        modalVisible={formsError}
      />
      <ModalFeedback
        text={usersResponse}
        closeModalFunc={goBack}
        modalVisible={usersError}
      />
      <LoadingBanner
        text="Carregando"
        visible={usersLoading || formsLoading}
      />

    </View>
  )
}


export default AddUserForm