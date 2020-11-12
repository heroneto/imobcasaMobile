import React, { useState } from 'react'
import styles from './styles'
import { View, Image, Modal, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import ModalView from '../ModalView';


interface IHeaderActionsProps {
    imageurl: string,
    settingsIconColor: string
}

const HeaderActions: React.FC<IHeaderActionsProps> = ({imageurl, settingsIconColor}) => {
    const { navigate }= useNavigation()
    const [ isShowingModal, setIsShowingModal ] = useState(false)

    function showModal(){
        console.log("teste")
        setIsShowingModal(true)
    }
    
    function closeModal(){
        setIsShowingModal(false)
    }

    function handleNavigateToSearchPage(){
        navigate('search')
    }

    return (
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    style={styles.myselfContainer}
                    onPress={showModal}
                >
                        <Image  style={styles.myselfImage} source={{uri: imageurl}} />
                </TouchableOpacity>
                <View style={styles.headerOptionsContainer}>
                    <TouchableOpacity 
                        style={styles.searchButton}
                        onPress={handleNavigateToSearchPage}
                    >
                        <Ionicons name="md-search" size={24} color="black" />
                    </TouchableOpacity>
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