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

import { LoggedUser } from '@core/store/ducks/loggedUser/types'
import { Tokens } from '@core/store/ducks/tokens/types';


interface LoginViewProps {
  tokens: Tokens,
  error: boolean,
  loading: boolean,
  tokenActions: {
    login(username: string, password: string): void,
    refreshAccessToken(): void
  }
  loggedUserActions: {
    getUser(): void
  }
  loggedUser: LoggedUser
}

const LoginView: React.FC<LoginViewProps> = ({ tokenActions, error, loading, tokens, loggedUserActions, loggedUser }) => {
  const { navigate } = useNavigation()
  const [isRememberMeSelected, setIsRememberMeSelected] = useState(false)
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  async function login() {
    await tokenActions.login(username, password)
    await loggedUserActions.getUser()
  }

  useEffect(() => {
    console.log("LOGGED USER", loggedUser)
    if (loggedUser?.isLogged) {
      navigate("home")
    }
  }, [loggedUser])



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
          <Text style={styles.formTitle}>Fazer Login {loading ? "Carregando" : ""}</Text>
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
              enabled={!loading}
              variant={loading ? "disabled" : "normal"}
            />
          </View>
        </View>
      </View>



    </KeyboardAvoidingView>
  )
}

export default LoginView