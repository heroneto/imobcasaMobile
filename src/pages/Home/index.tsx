import React, { useState } from 'react'
import { View , Text, RefreshControl, Image } from 'react-native'
import styles from './styles'
import { ScrollView, RectButton } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 
import DashboardGroup from '../../Components/DashboardGroup';
import colors from '../../theme';
import { useNavigation } from '@react-navigation/native'
import HeaderActions from '../../Components/HeaderActions';

export default function HomeView(){
    const [ refreshing, setRefreshing ] = useState(false)
    const { navigate } = useNavigation()
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
            <View style={styles.wellcomeContainer}>
                <Text 
                    style={styles.wellcomeTextPrimary}
                >
                    Olá Heron!
                </Text>
                <Text 
                    style={styles.wellcomeTextSecondary}
                >
                    Veja como estão os seus clientes
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

                <DashboardGroup 
                    items={[
                        {
                            name: 'Retornar contato',
                            count: 5,
                            color: colors.imobcasaPrimary,
                            id: '1871781'
                        },
                        {
                            name: 'Visita agendada',
                            count: 15,
                            color: colors.imobcasaPrimary,
                            id: '187178aa'
                        },
                        {
                            name: 'Solicitar documentação',
                            count: 25,
                            color: colors.imobcasaPrimary,
                            id: '187178asda'
                        },
                        {
                            name: 'Cobrar cliente',
                            count: 45,
                            color: colors.imobcasaPrimary,
                            id: '18717aaa8'
                        }
                    ]}
                    title='Agenda'
                    modal={{
                        title: 'Selecione uma opção',
                        options: [
                            {
                                name: 'Nova tarefa',
                                pageToNavigate: 'newtask',
                                id: 'asfa23aa_aa',
                                isPageExternalLink: false
                            },
                            {
                                name: 'Ver tarefas',
                                pageToNavigate: 'tasks',
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