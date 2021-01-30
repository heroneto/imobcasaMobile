import React, { useState } from 'react'
import { View, Text, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import styles from './styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import StandardButton from '@components/StandardButton';
import { useNavigation } from '@react-navigation/native'


import * as data from '../../appData.json'
import PickerInput from '@components/PickerInput';
import InputContainer from '@components/InputContainer';


interface inputPickerProps {
  key?: any,
  label?: any,
  section?: any
}

export default function NewLead() {
  const { navigate } = useNavigation()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [origin, setOrigin] = useState<inputPickerProps>({})
  const [campaign, setCampaign] = useState<inputPickerProps>({})
  const [user, setUser] = useState<inputPickerProps>({})
  const [leadStatus, setLeadStatus] = useState<inputPickerProps>({})

  function handleSaveButtom() {
    navigate('leadview', {
      leadid: ""
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView>        
        <View style={styles.formContent}>
          <View
            style={styles.inputGroup}
          >
            <Text style={styles.inputTitle}>
              Dados do Lead
            </Text>
            <InputContainer
              inputRadiusStyle={{
                bottomLeft: false,
                bottomRight: false,
                topLeft: true,
                topRight: true,
              }}
              label="Nome"
            >
              <TextInput 
                placeholder="Insira o nome do Lead"
                value={name}
                onChangeText={value => setName(value)}
              />
              <Feather name="user" size={24} color="rgba(0,0,0,.2)" />
            </InputContainer>
            <InputContainer
              inputRadiusStyle={{
                bottomLeft: true,
                bottomRight: true,
                topLeft: false,
                topRight: false,
              }}
              label="Telefone"
            >
              <TextInput 
                placeholder="Insira o telefone"
                value={phone}
                onChangeText={value => setPhone(value)}
              />
              <Feather name="phone" size={24} color="rgba(0,0,0,.2)" />
            </InputContainer>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputTitle}>
              Origem
            </Text>
            <PickerInput
              data={data.leadOrigin}
              borderRadius={{
                bottomLeft: 0,
                bottomRight: 0,
                topLeft: 8,
                topRight: 8
              }}
              label="Origem"
              placeholder="Selecione a origem do Lead"
              value={origin.label}
              onChange={(option) => {
                setOrigin(option)
              }}
            />
            <PickerInput
              data={data.leadCampaign}
              borderRadius={{
                bottomLeft: 8,
                bottomRight: 8,
                topLeft: 0,
                topRight: 0
              }}
              label="Origem"
              placeholder="Selecione a campanha do Lead"
              value={campaign.label}
              onChange={(option) => {
                setCampaign(option)
              }}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputTitle}>
              Responsável
                    </Text>
            <PickerInput
              data={data.users}
              borderRadius={{
                bottomLeft: 8,
                bottomRight: 8,
                topLeft: 8,
                topRight: 8
              }}
              label="Usuário"
              placeholder="Selecione o usuário"
              value={user.label}
              onChange={(option) => {
                setUser(option)
              }}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputTitle}>
              Negociação
                    </Text>
            <PickerInput
              data={data.leadStatus}
              borderRadius={{
                bottomLeft: 8,
                bottomRight: 8,
                topLeft: 8,
                topRight: 8
              }}
              label="Status"
              placeholder="Insira o status da negociação"
              value={leadStatus.label}
              onChange={(option) => {
                setLeadStatus(option)
              }}
            />
          </View>

          <View style={styles.formActions}>

            <StandardButton
              onPress={handleSaveButtom}
              text="Cadastrar"
            />
          </View>
        </View>

      </ScrollView>
    </View>
  )
}