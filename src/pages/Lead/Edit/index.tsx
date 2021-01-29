import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import StandardButton from '../../../components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import PickerInput from '../../../components/PickerInput';

import * as data from '../../appData.json'
import { SafeAreaView } from 'react-native-safe-area-context';
import InputContainer from '../../../components/InputContainer';

interface LeadEditProps {
  route: any
}

interface inputPickerProps {
  key?: any,
  label?: any,
  section?: any
}

const LeadEdit: React.FC<LeadEditProps> = ({ route }) => {
  const { leadid } = route.params
  const { navigate } = useNavigation()
  const [name, setName] = useState('Everisto de Barros')
  const [phone, setPhone] = useState('119999999')
  const [origin, setOrigin] = useState<inputPickerProps>({ key: 5, label: "Facebook" })
  const [campaign, setCampaign] = useState<inputPickerProps>({ key: 5, label: "Vila Formosa" })
  const [user, setUser] = useState<inputPickerProps>({ key: 5, label: "Heron Hideki" })
  const [leadStatus, setLeadStatus] = useState<inputPickerProps>({ key: 5, label: "Negociação em andamento" })

  function handleSaveButtom() {
    navigate('Lead', {
      leadid
    })
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
      >
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
                bottomLeft: false,
                bottomRight: false,
                topLeft: true,
                topRight: true,
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

          <View
            style={styles.inputGroup}
          >
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
              text="Atualizar"
            />
          </View>
        </View>
      </ScrollView>


    </SafeAreaView>
  )
}

export default LeadEdit