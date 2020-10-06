import React, {useState} from 'react'
import { View, Text, RefreshControl } from 'react-native'
import styles from './styles'
import HeaderActions from '../../Components/HeaderActions'
import { ScrollView, RectButton } from 'react-native-gesture-handler'
import DashboardGroup from '../../Components/DashboardGroup'
import { useNavigation } from '@react-navigation/native'
import colors from '../../theme'
import { Ionicons } from '@expo/vector-icons'; 

export default function AppConfig(){
    const [ refreshing, setRefreshing ] = useState(false)
    const { navigate, goBack } = useNavigation()
    
    
    const onRefresh = async () => {
        setRefreshing(true)
        
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    function handleNavigateToSearchPage(){
        navigate('search')
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#000"
                />
            </View>
            <View style={styles.backButtonContainer}>
                    <RectButton
                        style={styles.backButtonHeader}
                        onPress={goBack}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#000" />
                    </RectButton>
            </View>
            <View style={styles.wellcomeContainer}>
                <Text 
                    style={styles.wellcomeTextPrimary}
                >
                    Configurações
                </Text>
                <Text 
                    style={styles.wellcomeTextSecondary}
                >
                    Precisando fazer ajustes? é aqui mesmo
                </Text>
            </View>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={onRefresh}
                    />
                }
            >
                <DashboardGroup 
                    items={[
                        {
                            count: 0,
                            name: 'Ativas',
                            color: colors.imobcasaPrimary,
                            id: '222'
                        },
                        {
                            count: 5,
                            name: 'Inativas',
                            color: colors.imobcasaPrimary,
                            id: '223'
                        },
                        {
                            count: 1,
                            name: 'Rascunho',
                            color: colors.imobcasaPrimary,
                            id: '244'
                        },
                        {
                            count: 1,
                            name: 'Ativas sem usuários',
                            color: colors.imobcasaPrimary,
                            id: '245'
                        }
                    ]} 
                    title='Suas campanhas'
                    modal={{
                        title: 'Selecione uma opção',
                        options: [
                            {
                                name: 'Nova campanha',
                                pageToNavigate: 'home',
                                id: "424",
                                isPageExternalLink: false
                            },
                            {
                                name: 'Ver campanhas',
                                pageToNavigate: 'home',
                                id: "24243",
                                isPageExternalLink: false
                            },
                            {
                                name: 'Novo Login FB',
                                pageToNavigate: 'facebookloginpage',
                                id: "24244",
                                isPageExternalLink: false
                            }
                        ]
                    }}
                />

                <DashboardGroup 
                    items={[
                        {
                            name: 'Ativos',
                            count: 5,
                            color: colors.imobcasaPrimary,
                            id: '1871781'
                        },
                        {
                            name: 'Inativos',
                            count: 15,
                            color: colors.imobcasaPrimary,
                            id: '187178aa'
                        },
                        {
                            name: 'Com campanha',
                            count: 25,
                            color: colors.imobcasaPrimary,
                            id: '187178asda'
                        },
                        {
                            name: 'Sem campanha',
                            count: 45,
                            color: colors.imobcasaPrimary,
                            id: '18717aaa8'
                        }
                    ]}
                    title='Seus usuários'
                    modal={{
                        title: 'Selecione uma opção',
                        options: [
                            {
                                name: 'Novo usuário',
                                pageToNavigate: 'newuser',
                                id: 'asfa23aa_aa',
                                isPageExternalLink: false
                            },
                            {
                                name: 'Ver usuários',
                                pageToNavigate: 'users',
                                id: 'asfa23_aa',
                                isPageExternalLink: false
                            }
                        ]
                    }}
                />
                <View 
                    style={styles.bottomContainer}
                >
                    <Text style={styles.bottomText}>Deslize para atualizar</Text>
                    <Ionicons name="ios-arrow-down" size={24} color={colors.textInput} />
                </View>
                

            </ScrollView>
        </View >
    )
}