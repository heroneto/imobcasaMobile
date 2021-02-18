import React, { useState } from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import colors from '@core/theme/colors';
import StandardButton from '@lead-management/components/StandardButton'

import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import InputContainer from '@lead-management/components/InputContainer'
import PasswordInput from '@lead-management/components/PasswordInput'
import { CreateUserProps, User } from '@core/store/ducks/users/types'
import Switcher from '@lead-management/components/Switcher';
import ModalFeedback from '@lead-management/components/ModalFeedback';
import { useNavigation } from '@react-navigation/native';


interface CreateUserViewProps {
  selectedUser: User,
  error: boolean,
  loading: boolean,
  response: string,
  create(data: CreateUserProps): void
}


const CreateUserView: React.FC<CreateUserViewProps> = ({ error, loading, response, create, selectedUser }) => {
  const { navigate } = useNavigation()
  const [username, setUsername] = useState<string>('')
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [active, setActive] = useState<boolean>(true)
  const [admin, setAdmin] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  async function saveUser() {
    const data = {
      fullName,
      username,
      email,
      active,
      admin,
      password
    }
    await create(data)
    setModalVisible(true)
  }

  function resetFields(){
    setUsername("")
    setFullName("")
    setEmail("")
    setActive(false)
    setAdmin(false)
    setPassword("")
    setPasswordConfirmation("")
  }

  function closeModalFunc() {
    setModalVisible(false)
    if (!error) {
      resetFields()
      navigate("Usuário", {
        id: selectedUser.id
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>Dados do usuário</Text>
          <View style={styles.inputGroup}>
            <InputContainer
              variant="top"
              label="Nome completo"
            >
              <TextInput value={fullName} onChangeText={text => setFullName(text)} placeholder="Insira o nome completo..." />
              <Feather name="user" size={24} color={colors.textInputLabel} />
            </InputContainer>
            <InputContainer
              variant="middle"
              label="Username"
            >
              <TextInput value={username} onChangeText={text => setUsername(text)} placeholder="Insira o Username..." />
              <Feather name="user" size={24} color={colors.textInputLabel} />
            </InputContainer>
            <InputContainer
              variant="middle"
              label="E-Mail"
            >
              <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Insira o E-Mail do usuário..." />
              <Feather name="mail" size={24} color={colors.textInputLabel} />
            </InputContainer>
            <Switcher
              isEnabled={active}
              onChangeFunc={() => setActive(!active)}
              valueFalse="Inativo"
              valueTrue="Ativo"
              label="Status"
            />
            <Switcher
              isEnabled={admin}
              onChangeFunc={() => setAdmin(!admin)}
              valueFalse="Usuário normal"
              valueTrue="Administrador"
              label="Tipo de usuário"
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>
            Segurança
          </Text>
          <InputContainer
            variant="top"
            label="Senha"
          >
            <PasswordInput
              placeholder="Digite a senha..."
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </InputContainer>
          <InputContainer
            variant="bottom"
            label="Confirmação de senha"
          >
            <PasswordInput
              placeholder="Digite a senha novamente..."
              value={passwordConfirmation}
              onChangeText={text => setPasswordConfirmation(text)}
            />
          </InputContainer>
        </View>
        <View style={styles.formActionContainer}>
          <View style={styles.nextPageButtonContainer}>
            <StandardButton
              onPress={saveUser}
              text="Cadastrar"
            />
          </View>
        </View>
      </ScrollView>
      <ModalFeedback
        modalVisible={modalVisible}
        closeModalFunc={closeModalFunc}
        text={response}
        key={response}
      />
    </SafeAreaView>
  )
}


export default CreateUserView