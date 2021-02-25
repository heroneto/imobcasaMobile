import { DrawerItem, } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react'
import { Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles, { DrawerContainer, DrawerHeader } from './styles'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '@core/theme/colors';

import { useSelector, useDispatch } from 'react-redux'
import * as AuthActions from '@core/store/ducks/auth/actions'
import * as LoggedUserActions from '@core/store/ducks/loggedUser/actions'

import { ApplicationState } from '@core/store';
import { getUser } from "@core/services/storage"



const CustomDrawer = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state : ApplicationState) => state.loggedUser )
  const { navigate } = useNavigation()
  const insets = useSafeAreaInsets();
  const [optionsIsOpen, setOptionsIsOpen] = useState<boolean>(false)
  
  const handleNavigate = (page: string) => {
    setOptionsIsOpen(false)
    navigate(page)
  }

  const logout = async () => {
    await dispatch(AuthActions.logout())
    navigate("login")
  }


  useEffect(() => {
    dispatch(LoggedUserActions.get())

  }, [dispatch])

  return (
    <DrawerContainer
      key={0}
      contentContainerStyle={{
        paddingTop: insets.top,
      }}
    >
      <DrawerHeader>
        <Image style={styles.myselfImage} source={{ uri: "https://avatars1.githubusercontent.com/u/41599309?s=460&u=65b95962731f7965ead8de961b01c59e66554721&v=4" }} />
        <TouchableOpacity onPress={() => setOptionsIsOpen(!optionsIsOpen)} style={styles.showUserOptionsButton}>
          <View style={styles.userData}>
            <Text style={styles.userName}>{loggedUser.data.fullName}</Text>
            <Text style={styles.userMail}>{loggedUser.data.email}</Text>
          </View>
          <Ionicons name={optionsIsOpen ? "md-arrow-dropup" : "md-arrow-dropdown"} size={24} color="#FFF" />
        </TouchableOpacity>
      </DrawerHeader>
      <View style={{
        ...styles.userOptions,
        height: !optionsIsOpen ? 0 : "auto",
      }}>
        <TouchableOpacity onPress={() => navigate("mypasswordedit")} style={styles.optionButton}>
          <Text style={styles.optionText}>
            Trocar Senha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("myuseredit")} style={styles.optionButton}>
          <Text style={styles.optionText}>
            Editar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} style={styles.optionButton}>
          <Text style={styles.optionText}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.drawerContent}>

        <DrawerItem
          icon={props => {
            return <Ionicons name="ios-rocket" size={24} color={colors.textInput} />
          }}
          label="Leads"
          onPress={() => handleNavigate("LeadsStack")}
        />
        <DrawerItem
          icon={props => {
            return <FontAwesome name="users" size={20} color={colors.textInput} />
          }}
          label="Usuários"
          onPress={() => handleNavigate("UsersStack")}
        />
        <DrawerItem
          icon={props => {
            return <Ionicons name="logo-facebook" size={24} color={colors.textInput} />
          }}
          label="Formluários"
          onPress={() => handleNavigate("FormStack")}
        />

      </View>
    </DrawerContainer>
  );
}

export default CustomDrawer