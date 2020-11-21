import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import StandardButton from '../../../Components/StandardButton';
import { useNavigation } from '@react-navigation/native'

import InputContainer from '../../../Components/InputContainer';
import PasswordInput from '../../../Components/PasswordInput';


interface UserPasswordChangeProps {
  route: any
}

const UserPasswordChange: React.FC<UserPasswordChangeProps> = ({ route }) => {
  const { userid } = route.params
  const { navigate } = useNavigation()
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function handleSaveButtom() {
    navigate('Usuário', {
      userid
    })
  }

  return (
    <View style={styles.container}>
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
            label="Senha"
          >
            <PasswordInput 
              value={password}
              placeholder="Digite a nova senha..."
              onChangeText={text => setPassword(text)}
            />
          </InputContainer>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: true,
              bottomRight: true,
              topLeft: false,
              topRight: false
            }}
            label="Confirmação de senha"
          >
            <PasswordInput 
              value={passwordConfirmation}
              placeholder="Digite a nova senha novamente..."
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

    </View>
  )
}

export default UserPasswordChange