import { UserForm } from '@core/store/ducks/userForm/types'
import InputContainer from '@lead-management/components/InputContainer'
import ItemUserCard from '@lead-management/components/ItemUserCard'
import React, { useEffect, useState } from 'react'
import { View, Text, ActionSheetIOS } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from './styles'

import ModalOptions from "@lead-management/components/ModalOptions"
import ModalFeedback from '@lead-management/components/ModalFeedback'
import LoadingBanner from '@lead-management/components/LoadingBanner'
import Typography from '@lead-management/components/Typography'
import { useNavigation } from '@react-navigation/core'
var searchTimeout: any = null


interface RemoveUserFormProps {
  data: UserForm[],
  actions: {
    requestList(formId: string): void,
    remove(formaId: string, userId: string): void,
    resetStore(): void
  }
  error: boolean,
  response: string,
  loading: boolean
  formId: string
}

const RemoveUserForm: React.FC<RemoveUserFormProps> = ({ data, actions, loading, error, response, formId }) => {
  const { goBack } = useNavigation()
  const [userFormList, setUserFormList] = useState<UserForm[]>([])
  const [selectedUser, setSelectedUser] = useState<UserForm | null>()
  const [modalOptionsVisible, setModalOptionsVisible] = useState<boolean>(false)

  useEffect(() => {
    if (data.length > 0) {
      setUserFormList(data)
    }
  }, [data])

  const handleSearch = (query: string) => {
    clearTimeout(searchTimeout)
    if (query.length > 0) {
      searchTimeout = setTimeout(() => {
        setUserFormList(state => [...state.filter(item => item.userData.fullName.includes(query))])
      }, 500)
    } else {
      setUserFormList(data)
    }
  }

  const handleUser = (user: UserForm) => {
    setSelectedUser(user)
    setModalOptionsVisible(true)
  }

  const handleRemoveUser = () => {
    setModalOptionsVisible(false)
    if (selectedUser) {
      actions.remove(selectedUser.formid, selectedUser.userid)
    }
  }

  const resetStore = () => {
    actions.resetStore()
    goBack()
  }


  return (
    <ScrollView style={styles.container}>
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
        {userFormList && userFormList.length == 0 && (
          <Typography

            align="center"
            font="primaryRegular"
            size="md"
            text="Nenhum usuário cadastrado neste formulário"
            color="#000"
          />
        )}

        {userFormList && userFormList.length > 0 && (
          userFormList.map(userForm => {
            return (
              <ItemUserCard
                fullName={userForm.userData.fullName}
                info={userForm.userData.username}
                onPress={() => { handleUser(userForm) }}
                key={userForm.id}
              />
            )
          })
        )}
      </View>
      <ModalOptions
        closeModalFunc={() => { setSelectedUser(null) }}
        modalVisible={modalOptionsVisible}
        noFunc={() => setModalOptionsVisible(false)}
        noLabel="Não"
        text="O usuário será removido do formulário, deseja continuar?"
        yesFunc={handleRemoveUser}
        yesLabel="Sim"
      />

      <ModalFeedback
        closeModalFunc={resetStore}
        modalVisible={error}
        text={response}
      />

      <ModalFeedback
        modalVisible={!error && response ? true : false}
        text={response}
        closeModalFunc={() => { actions.requestList(formId) }}
      />

      <LoadingBanner
        text="Carregando..."
        visible={loading}

      />

    </ScrollView>
  )
}

export default RemoveUserForm