import React, {useState} from 'react'
import { View, Text, RefreshControl, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import DashboardGroup from '../../Components/DashboardGroup'
import { useNavigation } from '@react-navigation/native'
import colors from '../../theme'
import { Ionicons } from '@expo/vector-icons'; 
import FormPageHeader from '../../Components/HeaderFormContainer'

export default function AppConfig(){
    const [ refreshing, setRefreshing ] = useState(false)
    const { goBack } = useNavigation()
    const [ titleAlpha, setTitleAlpha ] = useState(100)
    
    const onRefresh = async () => {
        setRefreshing(true)
        
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    function handleContentOffsetChanges(event: NativeSyntheticEvent<NativeScrollEvent>){
        const titleColorTransparency = 1 - Number((event.nativeEvent.contentOffset.y * 1) / 100)
        setTitleAlpha(titleColorTransparency < 0.1 ? 0 : titleColorTransparency)
    }


    return (
        <View style={styles.container}>
            <FormPageHeader
                backButtomAction={goBack}
            />                  
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing} 
                        onRefresh={onRefresh}
                    />
                }
                onScroll={(event) => handleContentOffsetChanges(event)}
            >
                <View style={styles.wellcomeContainer}>
                    <Text 
                        style={{
                            ...styles.wellcomeTextPrimary,
                            color: `rgba(0,0,0,${titleAlpha})`
                        }}
                    >
                        Configurações
                    </Text>
                    <Text 
                        style={{
                            ...styles.wellcomeTextSecondary,
                            color: `rgba(0,0,0,${titleAlpha})`
                        }}
                    >
                        Precisando fazer ajustes? é aqui mesmo
                    </Text>
                </View>
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
                                pageToNavigate: 'newcampaign',
                                id: "424",
                                isPageExternalLink: false
                            },
                            {
                                name: 'Ver campanhas',
                                pageToNavigate: 'home',
                                id: "24243",
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