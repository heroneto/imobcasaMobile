import React, { useState, useEffect } from 'react'
import styles from './styles'
import { View, Text, Keyboard, TouchableOpacity } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import TopInput from '../../../Components/TopInput'
import MiddleInput from '../../../Components/MiddleInput'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import colors from '../../../theme/colors';
import StandardButton from '../../../Components/StandardButton'
import { Ionicons } from '@expo/vector-icons';
import HeaderActions from '../../../Components/HeaderActions'
import BottomInput from '../../../Components/BottonInput'
import PickerInput from '../../../Components/PickerInput'
import { Octicons } from '@expo/vector-icons'

import * as data from '../../appData.json'
import FormPageHeader from '../../../Components/HeaderFormContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import InputContainer from '../../../Components/InputContainer'

const { Navigator, Screen } = createStackNavigator()



export default function NewUser() {
  const { navigate, goBack } = useNavigation()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<inputPickerProps>({})
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [ isActionIconActive, setIsActionIconActive ] = useState(false)


  function togglePasswordView(){
    setIsActionIconActive(!isActionIconActive)
}    


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FormPageHeader
          backButtomAction={goBack}
        />
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>Dados do usuário</Text>
          <View style={styles.inputGroup}>
            <InputContainer
              inputRadiusStyle={{
                bottomLeft: false,
                bottomRight: false,
                topLeft: true,
                topRight: true
              }}
              label="Nome completo"
            >
              <TextInput value={name} onChangeText={text => setName(text)} placeholder="Insira o nome completo..." />
              <Feather name="user" size={24} color={colors.textInputLabel} />              
            </InputContainer>
            <InputContainer
              inputRadiusStyle={{
                bottomLeft: false,
                bottomRight: false,
                topLeft: false,
                topRight: false
              }}
              label="Username"
            >
              <TextInput value={username} onChangeText={text => setUsername(text)} placeholder="Insira o Username..." />
              <Feather name="user" size={24} color={colors.textInputLabel} />              
            </InputContainer>            
            <InputContainer
              inputRadiusStyle={{
                bottomLeft: false,
                bottomRight: false,
                topLeft: false,
                topRight: false
              }}
              label="E-Mail"
            >
              <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="Insira o E-Mail do usuário..." />
              <Feather name="mail" size={24} color={colors.textInputLabel} />            
            </InputContainer>  
            <PickerInput
              value={status.label}
              borderRadius={{
                topLeft: 0,
                topRight: 0,
                bottomLeft: 8,
                bottomRight: 8
              }}
              data={data.userStatus}
              label="Status"
              placeholder="Selecione o status do usuário"
              onChange={(option) => {
                setStatus(option)
              }}
            />
          </View>
        </View>
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
            <TextInput secureTextEntry={!isActionIconActive} placeholder="Digite a senha..." value={password} onChangeText={text => setPassword(text)} />
            <TouchableOpacity 
              style={styles.inputAction}
              onPress={togglePasswordView}
            >
              <Octicons 
                  name='eye'
                  size={24} 
                  color={isActionIconActive ? "#309AE7" : "#F0F0F7"}
              />
            </TouchableOpacity>
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
            <TextInput secureTextEntry={!isActionIconActive} placeholder="Digite a senha novamente..." value={passwordConfirmation} onChangeText={text => setPasswordConfirmation(text)} />
            <TouchableOpacity 
              style={styles.inputAction}
              onPress={togglePasswordView}
            >
              <Octicons 
                  name='eye'
                  size={24} 
                  color={isActionIconActive ? "#309AE7" : "#F0F0F7"}
              />
            </TouchableOpacity>
          </InputContainer>
        </View>
        <View style={styles.formActionContainer}>
          <View style={styles.nextPageButtonContainer}>
            <StandardButton
              onPress={() => {}}
              text="Cadastrar"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}