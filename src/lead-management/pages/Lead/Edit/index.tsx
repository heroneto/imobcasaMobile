import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import StandardButton from '@lead-management/components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import PickerInput from '@lead-management/components/PickerInput';

import { SafeAreaView } from 'react-native-safe-area-context';
import InputContainer from '@lead-management/components/InputContainer';
import { useDispatch, useSelector } from 'react-redux';

import { formsOptions as formsOptionsSelector } from '@core/store/ducks/forms/selectors'
import { leadSourceOptionsSelector } from '@core/store/ducks/leadSources/selectors'
import { leadDetailsState } from '@core/store/ducks/lead/leadDetails/selectors'
import { userOptionsSelector } from '@core/store/ducks/users/selectors'
import * as LeadDetailsActions from '@core/store/ducks/lead/leadDetails/actions'
import LoadingBanner from '@lead-management/components/LoadingBanner';
import ModalFeedback from '@lead-management/components/ModalFeedback';

interface LeadEditProps {
  leadId: string
}

interface inputPickerProps {
  key?: any,
  label?: any,
  section?: any,
  id?: any
}

const LeadEdit: React.FC<LeadEditProps> = ({ leadId }) => {
  const dispatch = useDispatch()
  const leadSources = useSelector(leadSourceOptionsSelector)
  const formsOptions = useSelector(formsOptionsSelector)
  const usersOptions = useSelector(userOptionsSelector)
  const { data, error, response, loading } = useSelector(leadDetailsState)


  const { navigate } = useNavigation()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [leadSourceSelected, setLeadSourceSelected] = useState<inputPickerProps>({})
  const [formSelected, setFormSelected] = useState<inputPickerProps>({})
  const [userSelected, setUserSelected] = useState<inputPickerProps>({})
  const [showModal, setShowModal] = useState<boolean>(false)

  function handleSaveButtom() {

    const editData = {
      formid: formSelected.id,
      id: leadId,
      name: name,
      phone: parseInt(phone),
      sourceid: leadSourceSelected.id,
      userid: userSelected.id
    }
    dispatch(LeadDetailsActions.editLead(editData))
    setShowModal(true)

  }

  useEffect(() => {
    if (data) {
      setName(data.name)
      setPhone(data.phone)
      setLeadSourceSelected(leadSources.find(leadSource => leadSource.id === data.sourceid) || {})
      setFormSelected(formsOptions.find(form => form.id === data.formid) || {})
      setUserSelected(usersOptions.find(user => user.id === data.userid) || {})
    }
  }, [data])


  const handleCloseModal = useCallback(() => {
    if (!error) {
      dispatch(LeadDetailsActions.getLeadDetails(leadId))
      dispatch(LeadDetailsActions.getLeadDetails(leadId))
      setShowModal(false)
      navigate('Lead', {
        leadid: leadId
      })
    }else {
      setShowModal(false)
    }
  }, [response, error])


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

          <View
            style={styles.inputGroup}
          >
            <Text style={styles.inputTitle}>
              Origem
                    </Text>
            <PickerInput
              data={leadSources}
              borderRadius={{
                bottomLeft: 0,
                bottomRight: 0,
                topLeft: 8,
                topRight: 8
              }}
              label="Origem"
              placeholder="Selecione a origem do Lead"
              value={leadSourceSelected.label}
              onChange={(option) => {
                setLeadSourceSelected(option)
              }}
            />
            <PickerInput
              data={formsOptions}
              borderRadius={{
                bottomLeft: 8,
                bottomRight: 8,
                topLeft: 0,
                topRight: 0
              }}
              label="Origem"
              placeholder="Selecione a campanha do Lead"
              value={formSelected.label}
              onChange={(option) => {
                setFormSelected(option)
              }}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.inputTitle}>
              Responsável
                    </Text>
            <PickerInput
              data={usersOptions}
              borderRadius={{
                bottomLeft: 8,
                bottomRight: 8,
                topLeft: 8,
                topRight: 8
              }}
              label="Usuário"
              placeholder="Selecione o usuário"
              value={userSelected.label}
              onChange={(option) => {
                setUserSelected(option)
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


      <LoadingBanner
        visible={loading}
        text="Carregando..."
      />

      <ModalFeedback
        closeModalFunc={handleCloseModal}
        modalVisible={showModal}
        text={response}
      />


    </SafeAreaView>
  )
}

export default LeadEdit
