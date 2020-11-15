import React, { ReactComponentElement, useState } from 'react'
import styles from './styles'
import { View, TouchableOpacity, ViewComponent, Image, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import ModalView from '../ModalView';
import colors from '../../theme/colors';


interface IHeaderActionsProps {
  headerColor: string,
  imageUrl: string,
  enableBackButton?: boolean
}

const HeaderActions: React.FC<IHeaderActionsProps> = ({ children, headerColor, imageUrl, enableBackButton = false }) => {
  const { navigate, goBack } = useNavigation()
  const [isShowingModal, setIsShowingModal] = useState(false)

  function handleNavigateToSearchPage() {
    navigate('search')
  }

  function showModal() {
    setIsShowingModal(true)
  }

  function closeModal() {
    setIsShowingModal(false)
  }

  return (
    <View style={{
      backgroundColor: headerColor,
      ...styles.headerContainer
    }}>
      <View style={styles.imageSearchContainer}>
        <TouchableOpacity
          style={styles.myselfContainer}
          onPress={showModal}
        >
          <Image style={styles.myselfImage} source={{ uri: imageUrl }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleNavigateToSearchPage}
        >
          <Ionicons name="md-search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.backButtonContainer}>
        {enableBackButton &&
          <TouchableOpacity
            style={styles.backButton}
            onPress={goBack}
          >
            <Ionicons name="ios-arrow-back" size={24} color={"#FFF"} />
          </TouchableOpacity>
        }


        {children}
      </View>

      <Modal
        transparent={true}
        animationType='fade'
        visible={isShowingModal}
        hardwareAccelerated={true}
        onRequestClose={() => {
          setIsShowingModal(false)
        }}
      >
        <ModalView
          title="Selecione uma opção"
          options={[
            {
              id: "1",
              isPageExternalLink: false,
              name: "Meu usuário",
              pageToNavigate: 'myuseredit',
              navigationParameters: {
                userid: "123"
              }
            },
            {
              id: "2",
              isPageExternalLink: false,
              name: "Alterar senha",
              pageToNavigate: 'mypasswordedit',
              navigationParameters: {
                userid: "123"
              }
            },
            {
              id: "4",
              isPageExternalLink: false,
              name: "Configurações",
              pageToNavigate: 'appconfig'
            },
            {
              id: "3",
              isPageExternalLink: false,
              name: "Sair",
              pageToNavigate: 'login'
            }
          ]}
          closeModalFunc={closeModal}
        />
      </Modal>
    </View>
  )
}

export default HeaderActions