import React, { useState } from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import colors from '@core/theme/colors';
import StandardButton from '@lead-management/components/StandardButton'

import PickerInput from '@lead-management/components/PickerInput'

import * as data from '../../appData.json'
import FormPageHeader from '@lead-management/components/HeaderFormContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import InputContainer from '@lead-management/components/InputContainer'
import PasswordInput from '@lead-management/components/PasswordInput'

export default function NewUser() {
  const { goBack } = useNavigation()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<inputPickerProps>({})
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')



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
            <PasswordInput 
              placeholder="Digite a senha..."
              value={password}
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
              placeholder="Digite a senha novamente..." 
              value={passwordConfirmation} 
              onChangeText={text => setPasswordConfirmation(text)}
            />            
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