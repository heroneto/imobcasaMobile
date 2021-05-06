import React, { useState } from 'react'
import { View, Text, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import styles from './styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import StandardButton from '@lead-management/components/StandardButton';
import { useNavigation } from '@react-navigation/native'


import * as data from '../../appData.json'
import PickerInput from '@lead-management/components/PickerInput';
import InputContainer from '@lead-management/components/InputContainer';
import { LeadStatus } from '@core/store/ducks/leadStatus/types';
import { LeadSource } from '@core/store/ducks/leadSources/types';
import { User } from '@core/store/ducks/users/types';
import { Form } from '@core/store/ducks/forms/types';


interface inputPickerProps {
  key?: any,
  label?: any,
  section?: boolean
}


interface OptionsProps {
  key: number,
  label: string,
}

interface LeadAddProps {
  leadStatus: OptionsProps[],
  leadStatusLoading: boolean,
  leadStatusError: boolean,
  leadSources: LeadSource[],
  leadSourcesLoading: boolean,
  leadSourcesError: boolean,
  users: User[],
  usersLoading: boolean,
  usersError: boolean,
  forms: Form[],
  formsLoading: boolean,
  formsError: boolean,
}

const LeadAddView: React.FC<LeadAddProps> = (
  {
    forms,
    formsError,
    formsLoading,
    leadSources,
    leadSourcesError,
    leadSourcesLoading,
    leadStatus,
    leadStatusError,
    leadStatusLoading,
    users,
    usersError,
    usersLoading
  }
) => {
  const { navigate } = useNavigation()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [origin, setOrigin] = useState<inputPickerProps>({})
  const [campaign, setCampaign] = useState<inputPickerProps>({})
  const [user, setUser] = useState<inputPickerProps>({})
  const [leadStatusSelected, setLeadStatusSelected] = useState<inputPickerProps>()

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
            {!leadStatusLoading &&
              leadStatus &&
              leadStatus.length > 0 &&
              !leadStatusError &&
              (
                <PickerInput
                  data={leadStatus}
                  borderRadius={{
                    bottomLeft: 8,
                    bottomRight: 8,
                    topLeft: 8,
                    topRight: 8
                  }}
                  label="Status"
                  placeholder="Insira o status da negociação"
                  value={leadStatusSelected && leadStatusSelected?.label || ""}
                  onChange={(option) => {
                    setLeadStatusSelected(option)
                  }}
                />
              )}

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



export default LeadAddView