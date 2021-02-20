import React, { useEffect, useState } from 'react'
import { View, Text, BackHandler  } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import FormPageHeader from '@lead-management/components/HeaderFormContainer'
import StandardButton from '@lead-management/components/StandardButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputContainer from '@lead-management/components/InputContainer'
import PasswordInput from '@lead-management/components/PasswordInput'
import ModalFeedback from '@lead-management/components/ModalFeedback'


interface MyPasswordEditProps {
  actions: {
    changePassword(password: string, newPassword: string): void,
  },
  error: boolean,
  loading: boolean,
  response: string
}

const MyPasswordEdit: React.FC<MyPasswordEditProps> = ({ actions, loading, error, response }) => {
  const { goBack } = useNavigation()
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  async function handleSaveButtom() {
    await actions.changePassword(oldPassword, password)
    setModalVisible(true)

  }

  function closeModalFunc(){
    if(!error){
      setPassword("")
      setOldPassword("")
      setPasswordConfirmation("")
    }
    setModalVisible(false)
  }

  function clearFields(){
    setPassword("")
    setOldPassword("")
    setPasswordConfirmation("")
  }

  function handleBackButton(){
    clearFields()
    goBack()
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', function ()  {
      clearFields()
      goBack()
      return true
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FormPageHeader backButtomAction={handleBackButton} />
      <View style={styles.contentContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>
            Segurança
          </Text>
          <InputContainer
            variant="top"
            label="Senha antiga"
          >
            <PasswordInput
              placeholder="Digite a senha antiga"
              value={oldPassword}
              onChangeText={text => setOldPassword(text)}
              
            />
          </InputContainer>
          <InputContainer
            variant="middle"
            label="Senha nova"
          >
            <PasswordInput
              placeholder="Digite a nova senha"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </InputContainer>
          <InputContainer
            variant="bottom"
            label="Confirmação de senha"
          >
            <PasswordInput
              placeholder="Digite a senha novamente"
              value={passwordConfirmation}
              onChangeText={text => setPasswordConfirmation(text)}
            />
          </InputContainer>
        </View>
        <View style={styles.formActions}>
          <StandardButton
            onPress={handleSaveButtom}
            text="Salvar"
          />
        </View>
        <ModalFeedback
          modalVisible={modalVisible}
          closeModalFunc={closeModalFunc}
          text={response}
        />
      </View>
    </SafeAreaView>
  )
}

export default MyPasswordEdit