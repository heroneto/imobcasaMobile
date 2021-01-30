import React, { useState, useEffect } from 'react'
import { View, Text, Image, Keyboard, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import AppImage from '../../../assets/appImage.png'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import StandardButton from '@components/StandardButton'
import { Ionicons } from '@expo/vector-icons';
import colors from '@theme/colors'
import { useNavigation } from '@react-navigation/native'
import InputContainer from '@components/InputContainer'
import PasswordInput from "@components/PasswordInput"


export default function LoginView() {
  const { navigate } = useNavigation()
  const [isRememberMeSelected, setIsRememberMeSelected] = useState(false)
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const [ username, setUsername ] = useState<string>("")
  const [ password, setPassword ] = useState<string>("")
  const [ isActionIconActive, setIsActionIconActive ] = useState(false)


  function handleNavigateToHomePage() {
    navigate('home')
  }

  

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true)
    })

    Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false)
    })
  }, [])


  function togglePasswordView(){
    setIsActionIconActive(!isActionIconActive)
}    



  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        {!isKeyboardOpen ?
          <Image
            source={AppImage}
            style={styles.appImage}
          />
          :
          true
        }

      </View>
      <View style={styles.loginFormContainer}>
        <View style={styles.loginTitle}>
          <Text style={styles.formTitle}>Fazer Login</Text>
        </View>
        <View style={styles.formContainer}>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: false,
              bottomRight: false,
              topLeft: true,
              topRight: true
            }}
            label="Login"
          >
            <TextInput value={username} onChangeText={text => setUsername(text)} placeholder="Digite seu login" />
          </InputContainer>
          <InputContainer
            inputRadiusStyle={{
              bottomRight: true,
              bottomLeft: true,
              topLeft: false,
              topRight: false
            }}
            label="Senha"
          >
            <PasswordInput 
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Digite a senha"
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
              text="Entrar"
              onPress={handleNavigateToHomePage}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}