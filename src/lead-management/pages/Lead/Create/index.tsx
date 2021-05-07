import React, { useCallback, useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import StandardButton from '@lead-management/components/StandardButton';
import { useNavigation } from '@react-navigation/native'

import PickerInput from '@lead-management/components/PickerInput';
import InputContainer from '@lead-management/components/InputContainer';
import { Lead } from '@core/store/ducks/lead/types';
import ModalFeedback from '@lead-management/components/ModalFeedback';
import LoadingBanner from '@lead-management/components/LoadingBanner';


interface inputPickerProps {
  key?: any,
  label?: any,
  section?: any,
  id?: string
}


interface OptionsProps {
  key: number,
  label: string,
  id: string
}

interface LeadAddProps {
  leadStatus: OptionsProps[],
  leadStatusLoading: boolean,
  leadStatusError: boolean,
  leadSources: OptionsProps[],
  leadSourcesLoading: boolean,
  leadSourcesError: boolean,
  users: OptionsProps[],
  usersLoading: boolean,
  usersError: boolean,
  forms: OptionsProps[],
  formsLoading: boolean,
  formsError: boolean,
  leadActionResponse: string,
  leadError: boolean,
  leadLoading: boolean
}

interface DispatchProps {
  actions: {
    lead: {
      add(data: Omit<Lead,
        "id" |
        "negociationCompletedAt" |
        "createdAt" |
        "updatedAt" |
        "formData" |
        "ownerData">
      ): void,
      reset(): void
    },
  }
}

type Props = LeadAddProps & DispatchProps


const LeadAddView: React.FC<Props> = (
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
    usersLoading,
    actions,
    leadActionResponse,
    leadError,
    leadLoading
  }
) => {
  const { navigate } = useNavigation()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [formSelected, setFormSelected] = useState<inputPickerProps>({})
  const [originSelected, setOriginSelected] = useState<inputPickerProps>({})
  const [userSelected, setUserSelected] = useState<inputPickerProps>({})
  const [leadStatusSelected, setLeadStatusSelected] = useState<inputPickerProps>({})
  const [showModalFeedback, setShowModalFeedback] = useState<boolean>(false)

  function handleSaveButtom() {
    const { id: formId } = formSelected
    const { id: originId } = originSelected
    const { id: userId } = userSelected
    const { id: statusId } = leadStatusSelected

    if (formId && originId && userId && statusId) {
      actions.lead.add({
        active: true,
        formid: formId,
        name: name,
        negociationStartedAt: new Date(),
        phone: phone,
        sourceid: originId,
        statusid: statusId,
        userid: userId
      })
      setShowModalFeedback(true)
    }


  }

  const handleNavigateToLeadDetails = useCallback(() => {
    setShowModalFeedback(false)
    actions.lead.reset()
    navigate('Lead', {
      leadid: ""
    })
  }, [])

  const handleCloseModalError = useCallback(() => {
    actions.lead.reset()
    setShowModalFeedback(false)
  }, [])



  const handleLeadStatus = useCallback((option: inputPickerProps) => {
    const { id, key, label } = option
    setLeadStatusSelected({ id, key, label })
  }, [])

  const handleForm = useCallback((option: inputPickerProps) => {
    const { id, key, label } = option
    setFormSelected({ id, key, label })
  }, [])

  const handleOrigin = useCallback((option: inputPickerProps) => {
    const { id, key, label } = option
    setOriginSelected({ id, key, label })
  }, [])

  const handleUser = useCallback((option: inputPickerProps) => {
    const { id, key, label } = option
    setUserSelected({ id, key, label })
  }, [])

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
              variant="top"
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
              variant="bottom"
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
            {leadSources &&
              leadSources.length > 0 &&
              !leadSourcesLoading &&
              !leadSourcesError && (
                <PickerInput
                  data={leadSources}
                  borderRadius={{
                    bottomLeft: 8,
                    bottomRight: 8,
                    topLeft: 0,
                    topRight: 0
                  }}
                  label="Origem"
                  placeholder="Selecione a origem do Lead"
                  value={originSelected.label}
                  onChange={(option) => handleOrigin(option)}
                />
              )

            }
            {forms &&
              forms.length > 0 &&
              !formsLoading &&
              !formsError && (
                <PickerInput
                  data={forms}
                  borderRadius={{
                    bottomLeft: 0,
                    bottomRight: 0,
                    topLeft: 8,
                    topRight: 8
                  }}
                  label="Formluário"
                  placeholder="Selecione a campanha do Lead"
                  value={formSelected.label}
                  onChange={(option) => handleForm(option)}
                />
              )}
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputTitle}>
              Responsável
            </Text>
            {users &&
              users.length > 0 &&
              !usersLoading &&
              !usersError && (
                <PickerInput
                  data={users}
                  borderRadius={{
                    bottomLeft: 8,
                    bottomRight: 8,
                    topLeft: 8,
                    topRight: 8
                  }}
                  label="Usuário"
                  placeholder="Selecione o usuário"
                  value={userSelected.label}
                  onChange={(option) => handleUser(option)}
                />
              )}


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
                  onChange={(option) => handleLeadStatus(option)}
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

      <ModalFeedback
        modalVisible={leadActionResponse.length > 0 && !leadError}
        closeModalFunc={handleNavigateToLeadDetails}
        text={leadActionResponse}
        key={Math.random()}
      />

      <ModalFeedback
        modalVisible={leadError}
        closeModalFunc={handleCloseModalError}
        text={leadActionResponse}
        key={Math.random()}
      />

      <LoadingBanner 
        visible={leadLoading}
        text="Cadastrando Lead..."
        key={Math.random()}
      />

      <LoadingBanner 
        key={Math.random()}
        visible={
          leadLoading ||
          leadSourcesLoading ||
          formsLoading ||
          usersLoading
        }
        text="Carregando itens do formulário..."
      />
    </View>
  )
}



export default LeadAddView