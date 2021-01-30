import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import StandardButton from '@components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import colors from '@theme/colors';

import * as data from '../../appData.json'
import PickerInput from '@components/PickerInput';
import InputContainer from '@components/InputContainer';
import { TextInput } from 'react-native-gesture-handler';

interface UserEditProps {
  route: any
}

interface inputPickerProps {
  key?: any,
  label?: any,
  section?: any
}


const UserEdit: React.FC<UserEditProps> = ({ route }) => {
  const { userid } = route.params
  const { navigate, goBack } = useNavigation()
  const [name, setName] = useState('Heron Eto')
  const [username, setUsername] = useState('heroneto')
  const [email, setEmail] = useState('heron@imobcasa.com')
  const [status, setStatus] = useState<inputPickerProps>({ key: 1, label: "Ativo" })


  function handleSaveButtom() {
    navigate('Usuário', {
      userid
    })
  }

  return (
    <View style={styles.container}>

      <View style={styles.formContent}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>
            Dados do usuário
          </Text>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: false,
              bottomRight: false,
              topLeft: true,
              topRight: true,
            }}
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
            inputRadiusStyle={{
              bottomLeft: false,
              bottomRight: false,
              topLeft: false,
              topRight: false,
            }}
            label="Username"
          >
            <TextInput
              placeholder="Insira o Username"
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <Feather name="user" size={24} color={colors.textInputLabel} />
          </InputContainer>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: false,
              bottomRight: false,
              topLeft: false,
              topRight: false,
            }}
            label="E-Mail"
          >
            <TextInput
              placeholder="Insira o E-Mail do usuário"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Feather name="user" size={24} color={colors.textInputLabel} />
          </InputContainer>          
          <PickerInput
            value={status.label}
            borderRadius={{
              topLeft: 0,
              topRight: 0,
              bottomLeft: 0,
              bottomRight: 0
            }}
            data={data.userStatus}
            label="Status"
            placeholder="Selecione o status do usuário"
            onChange={(option) => {
              setStatus(option)
            }}
          />
        </View>
        <View style={styles.formActions}>
          <StandardButton
            onPress={handleSaveButtom}
            text="Atualizar"
          />
        </View>
      </View>


    </View>
  )
}

export default UserEdit