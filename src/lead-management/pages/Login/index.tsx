import React, { useState, useEffect } from 'react'
import { View, Text, Image, Keyboard, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import AppImage from '@commons/assets/appImage.png'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import StandardButton from '@lead-management/components/StandardButton'
import { Ionicons } from '@expo/vector-icons';
import colors from '@core/theme/colors'
import { useNavigation } from '@react-navigation/native'
import InputContainer from '@lead-management/components/InputContainer'
import PasswordInput from "@lead-management/components/PasswordInput"

import { Auth } from '@core/store/ducks/auth/types';
import ModalFeedback from '@lead-management/components/ModalFeedback'

interface LoginViewProps {
  error: boolean,
  loading: boolean,
  actions: {
    login(username: string, password: string): void,
    resetStore():void
  }
  data: Auth
}

const LoginView: React.FC<LoginViewProps> = ({ actions, error, loading, data }) => {
  const { navigate } = useNavigation()
  const [isRememberMeSelected, setIsRememberMeSelected] = useState(false)
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  async function login() {
    await actions.login(username, password)
  }

  async function checkAuth() {
    if (data.httpCode === 200 && !error) {
      setUsername("")
      setPassword("")
      navigate('home')
    }
  }

  useEffect(() => {
    checkAuth()
  }, [data, error])

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={AppImage}
          style={styles.appImage}
        />
      </View>
      <View style={styles.loginFormContainer}>
        <View style={styles.loginTitle}>
          <Text style={styles.formTitle}>Fazer Login</Text>
        </View>
        <View style={styles.formContainer}>
          <InputContainer
            variant="top"
            label="Login"
            enabled={!loading}

          >
            <TextInput
              editable={!loading}
              value={username}
              onChangeText={text => setUsername(text)}
              placeholder={loading ? "Aguarde..." : "Digite seu Login"}
            />
          </InputContainer>
          <InputContainer
            variant="bottom"
            label="Senha"
            enabled={!loading}
          >
            <PasswordInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder={loading ? "Aguarde" : "Digite a senha"}
              editable={!loading}
            />
          </InputContainer>
        </View>
        <View style={styles.formActions}>
          <View style={styles.loginOptionsContainer}>
            <View style={styles.checkBoxContainer}>
              <View
                style={styles.checkbox}
              >
                <RectButton
                  onPress={() => setIsRememberMeSelected(!isRememberMeSelected)}
                  style={styles.checkboxButton}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderRadius: 8,
                      width: 24,
                      height: 24,
                      borderColor: isRememberMeSelected ? colors.standardButton : colors.textInputPlaceholder,
                      backgroundColor: isRememberMeSelected ? colors.standardButton : colors.background,
                      alignSelf: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}
                  >
                    <Ionicons name="md-checkmark" size={18} color={colors.background} />
                  </View>

                </RectButton>
              </View>

              <Text style={styles.checkboxLabel}>Lembrar-me</Text>
            </View>
            <Text style={styles.forgotPasswordLink}>
              Esqueci minha senha
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <StandardButton
              text={loading ? "Carregando" : "Entrar"}
              onPress={login}
              disabled={loading}
              variant={loading ? "disabled" : "normal"}
            />
          </View>
        </View>
      </View>

      <ModalFeedback 
        modalVisible={error}
        closeModalFunc={() => actions.resetStore()}
        text={data?.response}
      />

    </KeyboardAvoidingView>
  )
}

export default LoginView