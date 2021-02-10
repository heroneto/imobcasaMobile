import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import colors from '@core/theme/colors'
import { Feather } from '@expo/vector-icons';
import FormPageHeader from '@lead-management/components/HeaderFormContainer'
import StandardButton from '@lead-management/components/StandardButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputContainer from '@lead-management/components/InputContainer'
import { TextInput } from 'react-native-gesture-handler'
import { LoggedUser } from '@core/store/ducks/loggedUser/types';


interface MyUserEditProps {
  loggedUser: {
    id: string,
    username: string,
    email: string,
    fullName: string,
    active: boolean,
    isLogged: boolean,
    admin: boolean
  }
  actions: {
    loadEditUser(data: Omit<LoggedUser, 'isLogged'>): void,
  }
}

const MyUserEdit: React.FC<MyUserEditProps> = ({ loggedUser, actions }) => {
  const { navigate, goBack } = useNavigation()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  async function handleSaveButtom() {
    const { isLogged, ...data } = loggedUser
    data.email = email
    data.fullName = name
    await actions.loadEditUser(data)
    goBack()
  }

  useEffect(() => {
    setName(loggedUser?.fullName)
    setEmail(loggedUser?.email)
  }, [loggedUser])

  return (
    <SafeAreaView style={styles.container}>
      <FormPageHeader
        backButtomAction={goBack}
      />
      <View style={styles.contentContainer} >
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>
            Dados do usuário
          </Text>
          <InputContainer
            variant="top"
            label="Nome completo"
          >
            <TextInput 
              placeholder="Insira o nome completo"
              value={name}
              onChangeText={text => setName(text)}
            />
            <Feather name="user" size={24} color={colors.textInputLabel} />
          </InputContainer>
          <InputContainer
            variant="bottom"
            label="E-Mail"
          >
            <TextInput 
              placeholder="Insira o E-Mail do usuário"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Feather name="mail" size={24} color={colors.textInputLabel} />
          </InputContainer>
        </View>

        <View style={styles.formActions}>
          <StandardButton
            onPress={handleSaveButtom}
            text="Atualizar"
          />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default MyUserEdit