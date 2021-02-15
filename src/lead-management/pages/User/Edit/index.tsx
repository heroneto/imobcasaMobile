import React, { useEffect, useState } from 'react'
import { View, Text, BackHandler } from 'react-native'
import styles from './styles'
import StandardButton from '@lead-management/components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import colors from '@core/theme/colors';

import InputContainer from '@lead-management/components/InputContainer';
import Switcher from '@lead-management/components/Switcher'
import ModalFeedback from '@lead-management/components/ModalFeedback'

import { TextInput } from 'react-native-gesture-handler';
import { SelectedUser } from '@core/store/ducks/selectedUser/types';

import * as listUserActions from "@core/store/ducks/listUser/actions"
import { useDispatch } from 'react-redux';


interface UserEditProps {
  selectedUser: SelectedUser,
  loading: boolean,
  error: boolean,
  loadEditUser(data: Omit<SelectedUser, "createdAt" | "updatedAt" >): void,
  response: string,
}

const UserEdit: React.FC<UserEditProps> = ({ selectedUser, loadEditUser, error, response, loading }) => {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState<string>(selectedUser?.fullName)
  const [username, setUsername] = useState<string>(selectedUser?.username)
  const [email, setEmail] = useState<string>(selectedUser?.email)
  const [active, setActive] = useState<boolean>(selectedUser?.active)
  const [admin, setAdmin] = useState<boolean>(selectedUser?.admin)
  const [modalVisible, setModalVisible] = useState<boolean>(false)


  async function handleSaveButtom() {
    // navigate('Usuário')
    const data = {
      id: selectedUser.id,
      fullName,
      username,
      email,
      active,
      admin
    }
    await loadEditUser(data)
    setModalVisible(true)
    await dispatch(listUserActions.loadRequest())
    /**
     * Necessário atualizar o store
     * Necessário chamar a API de lista de usuários via Store
     */
  }


  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>
            Dados do usuário
          </Text>
          <InputContainer
            variant="top"
            label="Nome completo"
          >
            <TextInput
              placeholder="Insira o nome completo"
              value={fullName}
              onChangeText={text => setFullName(text)}
            />
            <Feather name="user" size={24} color={colors.textInputLabel} />
          </InputContainer>
          <InputContainer
            variant="middle"
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
            variant="middle"
            label="E-Mail"
          >
            <TextInput
              placeholder="Insira o E-Mail do usuário"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Feather name="user" size={24} color={colors.textInputLabel} />
          </InputContainer>
          <Switcher
            isEnabled={active}
            onChangeFunc={() => setActive(!active)}
            valueFalse="Inativo"
            valueTrue="Ativo"
            label="Status"
          />
          <Switcher
            isEnabled={admin}
            onChangeFunc={() => setAdmin(!admin)}
            valueFalse="Usuário normal"
            valueTrue="Administrador"
            label="Tipo de usuário"
          />
        </View>
        <View style={styles.formActions}>
          <StandardButton
            onPress={handleSaveButtom}
            text="Atualizar"
          />
        </View>
      </View>
      <ModalFeedback
          modalVisible={modalVisible}
          closeModalFunc={() => setModalVisible(false)}
          text={response}
        />


    </View>
  )
}

export default UserEdit