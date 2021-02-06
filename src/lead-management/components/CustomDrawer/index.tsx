import { DrawerContentScrollView, DrawerItem,  } from '@react-navigation/drawer';
import React, { useContext, useState } from 'react'
import { Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import styles from './styles'
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '@core/theme/colors';
import styled from 'styled-components/native'
import { ThemeProps } from '@core/theme/theme';

const DrawerContainer = styled(DrawerContentScrollView)`
  background: ${(props: CustomDrawerProps) => props.theme.colors.background};
  flex: 1;
`

const DrawerHeader = styled.View`
  background: ${(props: CustomDrawerProps) => props.theme.colors.imobcasaPrimary};
  padding: 5px;
  padding-right: 10px;
  padding-left: 10px;
`


interface CustomDrawerProps {
  theme: ThemeProps
}

const CustomDrawer: React.FC<CustomDrawerProps> = (props) => {
  const { navigate } = useNavigation()
  const insets = useSafeAreaInsets();
  const [ optionsIsOpen, setOptionsIsOpen ] = useState<boolean>(false)



  function handleNavigate(page: string){
    setOptionsIsOpen(false)
    navigate(page)
  }

  return (
    <DrawerContainer 
        contentContainerStyle={{
        paddingTop: insets.top,
     }}
    >
      <DrawerHeader>
        <Image style={styles.myselfImage} source={{ uri: "https://avatars1.githubusercontent.com/u/41599309?s=460&u=65b95962731f7965ead8de961b01c59e66554721&v=4" }} />
        <TouchableOpacity onPress={() => setOptionsIsOpen(!optionsIsOpen)} style={styles.showUserOptionsButton}>
          <View style={styles.userData}>
            <Text style={styles.userName}>Heron Eto</Text>
            <Text style={styles.userMail}>heron@imobcasa.com.br</Text>
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
        <TouchableOpacity onPress={() => navigate("login")} style={styles.optionButton}>
          <Text style={styles.optionText}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.drawerContent}>
       
        <DrawerItem          
          icon={props => {
            return <Ionicons name="ios-rocket" size={24}  color={colors.textInput} />
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
            return <Ionicons name="logo-facebook" size={24}  color={colors.textInput} />
          }}          
          label="Campanhas"
          onPress={() => handleNavigate("CampaignsStack")}
        />
        
      </View>
    </DrawerContainer>
  );
}

export default CustomDrawer