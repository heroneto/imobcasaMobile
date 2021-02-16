import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import StandardButton from '@lead-management/components/StandardButton';
import { useNavigation } from '@react-navigation/native'

import InputContainer from '@lead-management/components/InputContainer';
import PasswordInput from '@lead-management/components/PasswordInput';
import ModalFeedback from '@lead-management/components/ModalFeedback';
import Typography from '@lead-management/components/Typography';
import colors from '@core/theme/colors';


interface UserPasswordChangeProps {
  id: string,
  loading: boolean,
  error: boolean,
  resetPassword(id: string, password: string): void,
  response: string
}

const UserPasswordChange: React.FC<UserPasswordChangeProps> = ({ id, loading, error, resetPassword, response }) => {
  const { navigate } = useNavigation()
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  async function handleSaveButtom() {
    await resetPassword(id, password)
    setModalVisible(true)
  }

  const closeModalFunc = () => {
    if(!error){
      setPassword("")
      setPasswordConfirmation("")
    }

    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>
            Segurança
          </Text>
          <InputContainer
            variant="top"
            label="Senha"
          >
            <PasswordInput
              value={password}
              placeholder="Digite a nova senha..."
              onChangeText={text => setPassword(text)}
            />
          </InputContainer>
          <InputContainer
            variant="bottom"
            label="Confirmação de senha"
          >
            <PasswordInput
              value={passwordConfirmation}
              placeholder="Digite a nova senha novamente..."
              onChangeText={text => setPasswordConfirmation(text)}
            />
          </InputContainer>
        </View>
        <View>
          {
          passwordConfirmation !== password && 
          passwordConfirmation.length > 0 && 
          password.length > 0 && (
            <Typography
              color={colors.error}
              font="secondaryRegular"
              size="s"
              text="As senhas devem ser iguais"
            />
          )}

        </View>
        <View style={styles.formActions}>
          <StandardButton
            onPress={handleSaveButtom}
            text="Salvar"
            disabled={passwordConfirmation !== password}
            variant={passwordConfirmation !== password ? "disabled" : "normal"}
          />
        </View>
      </View>
      <ModalFeedback
        closeModalFunc={closeModalFunc}
        modalVisible={modalVisible}
        text={response}
        key={0}
      />

    </View>
  )
}

export default UserPasswordChange