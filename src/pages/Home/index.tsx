import React, { useState } from 'react'
import { View , Text, Image, NativeSyntheticEvent, NativeScrollEvent, RefreshControl, Modal } from 'react-native'
import styles from './styles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 
import DashboardGroup from '../../Components/DashboardGroup';
import colors from '../../theme';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalView from '../../Components/ModalView';

export default function HomeView(){
    const [ refreshing, setRefreshing ] = useState<boolean>(false)
    const { navigate } = useNavigation()
    const [ isShowingModal, setIsShowingModal ] = useState<boolean>(false)
    const [ imageUrl, setImageUrl ] = useState<string>("https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4")
    const onRefresh = async () => {
        setRefreshing(true)
        
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    function handleNavigateToSearchPage(){
        navigate('search')
    }

    function showModal(){
        setIsShowingModal(true)
    }
    
    function closeModal(){
        setIsShowingModal(false)
    }


    return (
        <SafeAreaView  style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                <RefreshControl 
                    refreshing={refreshing} 
                    onRefresh={onRefresh}
                />}
            >
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.myselfContainer}
                        onPress={showModal}
                    >
                            <Image  style={styles.myselfImage} source={{uri: imageUrl}} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                                style={styles.searchButton}
                                onPress={handleNavigateToSearchPage}
                            >
                                <Ionicons name="md-search" size={24} color="black" />
                    </TouchableOpacity>

                </View>
                <View style={styles.content}>
                    <View style={styles.wellcomeContainer}>
                        <Text style={styles.wellcomeTextPrimary}>
                            Olá Heron!
                        </Text>
                        <Text style={styles.wellcomeTextSecondary}>
                            Veja como estão os seus clientes
                        </Text>
                    </View>
                    <View style={styles.dashboard}>
                        <DashboardGroup 
                            items={[
                                {
                                    count: 10,
                                    name: 'Aguardando',
                                    color: colors.textInput,
                                    id: '222'
                                },
                                {
                                    count: 5,
                                    name: 'Negociação em andamento',
                                    color: colors.standardButton,
                                    id: '223'
                                },
                                {
                                    count: 1,
                                    name: 'Negociação concluída',
                                    color: colors.success,
                                    id: '244'
                                }
                            ]} 
                            title='Leads'
                            modal={{
                                title: 'Selecione uma opção',
                                options: [
                                    {
                                        name: 'Novo Lead',
                                        pageToNavigate: 'newlead',
                                        id: "424",
                                        isPageExternalLink: false
                                    },
                                    {
                                        name: 'Ver Leads',
                                        pageToNavigate: 'leads',
                                        id: "24242",
                                        isPageExternalLink: false
                                    }
                                ]
                            }}
                        />   
                    </View>
                       
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>Deslize para atualizar</Text>
                    <Ionicons name="ios-arrow-down" size={24} color={colors.textInput} />   
                </View>
            </ScrollView>

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
        </SafeAreaView>       
    )
}