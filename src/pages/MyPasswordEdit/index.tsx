import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import FormPageHeader from '../../components/HeaderFormContainer'
import StandardButton from '../../components/StandardButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputContainer from '../../components/InputContainer'
import PasswordInput from '../../components/PasswordInput'

interface MyPasswordEditProps {
  route: any
}

const MyPasswordEdit: React.FC<MyPasswordEditProps> = ({ route }) => {
  const { userid } = route
  const { goBack } = useNavigation()
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function handleSaveButtom() {
    goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <FormPageHeader backButtomAction={goBack} />
      <View style={styles.contentContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>
            Segurança
          </Text>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: false,
              bottomRight: false,
              topLeft: true,
              topRight: true
            }}
            label="Senha antiga"
          >
            <PasswordInput 
              placeholder="Digite a senha antiga"
              value={oldPassword}
              onChangeText={text => setOldPassword(text)}
            />
          </InputContainer>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: false,
              bottomRight: false,
              topLeft: false,
              topRight: false
            }}
            label="Senha nova"
          >
            <PasswordInput 
              placeholder="Digite a nova senha"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </InputContainer>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: false,
              bottomRight: false,
              topLeft: false,
              topRight: false
            }}
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
      </View>
    </SafeAreaView>
  )
}

export default MyPasswordEdit