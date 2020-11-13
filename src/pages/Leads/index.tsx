import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderActions from '../../Components/HeaderActions';
import ItemCard from '../../Components/ItemCard';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme';
import { ScrollView } from 'react-native-gesture-handler';
import facebookIcon from '../../../assets/icons/facebook.png'

const Tab = createMaterialTopTabNavigator();

export default function LeadsView(){
    const { navigate } = useNavigation()


    function handleNavigateToHomePage(){
        navigate('home')
    }

    return (

        <SafeAreaView style={styles.container}>
            <HeaderActions 
                backButtonFunc={handleNavigateToHomePage}
                backButtonColor="#FFF"
                headerColor={colors.imobcasaPrimary}
            >
                <Text style={styles.pageTitle}>Lista de Leads</Text>    
            </HeaderActions>   
            <Tab.Navigator
                initialRouteName="todayleads"
                tabBarOptions={{
                    style: styles.navigatorContainer,
                    activeTintColor: "#FFF",
                    indicatorStyle: {
                        backgroundColor: 'rgba(0,0,0,.5)',
                        height: "100%",
                    },
                    labelStyle:{
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 14,
                        margin: 0,
                    },
                    tabStyle: {
                        padding: 5,
                    },
                }}
                
            >
                <Tab.Screen 
                    name="todayleads" 
                    component={TodayLeads} 
                    options={{
                        tabBarLabel: "Aguardando"
                    }}
                />
                <Tab.Screen 
                    name="overdueleads" 
                    component={OverdueLeads} 
                    options={{
                        tabBarLabel: "Em andamento"
                    }}
                />
                <Tab.Screen 
                    name="commingleads" 
                    component={CommingLeads}
                    options={{
                        tabBarLabel: "Concluídos"
                    }}
                />
            </Tab.Navigator>
        </SafeAreaView>
    )
}


function TodayLeads(){
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.itemGroupName}>Não respondidas(1)</Text>
            <ItemCard 
                topText="José da Silva"
                middleIcon={<Image source={facebookIcon} style={styles.socialIcon}/>}
                middleText="[Tatuapé] Tatuapé"
                leftBottomText="Vagner Fernando Zanella"
                customRightText={{
                    text: "Duas Aguardando",
                    value: 5,
                    valueBackgroundColor: colors.textInput
                }}
                
                modalOptions={{
                    title: "Selecione uma opção abaixo",
                    options: [
                        {
                            id: "1",
                            name: "Entrar em contato",
                            pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
                            isPageExternalLink: true
                        },
                        {
                            id: "2",
                            name: "Mais detalhes",
                            pageToNavigate: "leadview",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 1223232323,
                            }
                        },
                        {
                            id: "3",
                            name: "Editar",
                            pageToNavigate: "leadedit",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 12121212121
                            }
                        },
                        {
                            id: "4",
                            name: "Ver tarefas",
                            pageToNavigate: "home",
                            isPageExternalLink: false
                        },
                    ]
                }}
            />          
        </ScrollView>
    )
}
function OverdueLeads(){
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.itemGroupName}>Pendentes(1)</Text>
            <ItemCard 
                topText="José da Silva"
                middleIcon={<Image source={facebookIcon} style={styles.socialIcon}/>}
                middleText="[Tatuapé] Tatuapé"
                leftBottomText="Vagner Fernando Zanella"
                customRightText={{
                    text: "Duas Aguardando",
                    value: 5,
                    valueBackgroundColor: colors.textInput
                }}
                
                modalOptions={{
                    title: "Selecione uma opção abaixo",
                    options: [
                        {
                            id: "1",
                            name: "Entrar em contato",
                            pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
                            isPageExternalLink: true
                        },
                        {
                            id: "2",
                            name: "Mais detalhes",
                            pageToNavigate: "leadview",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 1223232323,
                            }
                        },
                        {
                            id: "3",
                            name: "Editar",
                            pageToNavigate: "leadedit",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 12121212121
                            }
                        },
                        {
                            id: "4",
                            name: "Ver tarefas",
                            pageToNavigate: "home",
                            isPageExternalLink: false
                        },
                    ]
                }}
            />          
            <Text style={styles.itemGroupName}>Futuras(1)</Text>
            <ItemCard 
                topText="José da Silva"
                middleIcon={<Image source={facebookIcon} style={styles.socialIcon}/>}
                middleText="[Tatuapé] Tatuapé"
                leftBottomText="Vagner Fernando Zanella"
                  rightBottomText={{
                    text:"Visita agendada para 12 horas",
                    textColor: colors.textHiperlink
                }}
                
                modalOptions={{
                    title: "Selecione uma opção abaixo",
                    options: [
                        {
                            id: "1",
                            name: "Entrar em contato",
                            pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
                            isPageExternalLink: true
                        },
                        {
                            id: "2",
                            name: "Mais detalhes",
                            pageToNavigate: "leadview",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 1223232323,
                            }
                        },
                        {
                            id: "3",
                            name: "Editar",
                            pageToNavigate: "leadedit",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 12121212121
                            }
                        },
                        {
                            id: "4",
                            name: "Ver tarefas",
                            pageToNavigate: "home",
                            isPageExternalLink: false
                        },
                    ]
                }}
            />        
        </ScrollView>
    )
}
function CommingLeads(){
    return (
<ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.itemGroupName}>Concluídos(2)</Text>
            <ItemCard 
                topText="José da Silva"
                middleIcon={<Image source={facebookIcon} style={styles.socialIcon}/>}
                middleText="[Tatuapé] Tatuapé"
                leftBottomText="Vagner Fernando Zanella"
                rightBottomText={{
                    text:"Arquivado - Sem contato",
                    textColor: colors.textInput
                }}
                
                modalOptions={{
                    title: "Selecione uma opção abaixo",
                    options: [
                        {
                            id: "1",
                            name: "Entrar em contato",
                            pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
                            isPageExternalLink: true
                        },
                        {
                            id: "2",
                            name: "Mais detalhes",
                            pageToNavigate: "leadview",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 1223232323,
                            }
                        },
                        {
                            id: "3",
                            name: "Editar",
                            pageToNavigate: "leadedit",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 12121212121
                            }
                        },
                        {
                            id: "4",
                            name: "Ver tarefas",
                            pageToNavigate: "home",
                            isPageExternalLink: false
                        },
                    ]
                }}
            />          
            <ItemCard 
                topText="José da Silva"
                middleIcon={<Image source={facebookIcon} style={styles.socialIcon}/>}
                middleText="[Tatuapé] Tatuapé"
                leftBottomText="Vagner Fernando Zanella"
                rightBottomText={{
                    text:"Negócio fechado em 15/04/2020",
                    textColor: colors.success
                }}
                
                modalOptions={{
                    title: "Selecione uma opção abaixo",
                    options: [
                        {
                            id: "1",
                            name: "Entrar em contato",
                            pageToNavigate: `whatsapp://send?phone=${'+55119999999999'}`,
                            isPageExternalLink: true
                        },
                        {
                            id: "2",
                            name: "Mais detalhes",
                            pageToNavigate: "leadview",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 1223232323,
                            }
                        },
                        {
                            id: "3",
                            name: "Editar",
                            pageToNavigate: "leadedit",
                            isPageExternalLink: false,
                            navigationParameters: {
                                leadid: 12121212121
                            }
                        },
                        {
                            id: "4",
                            name: "Ver tarefas",
                            pageToNavigate: "home",
                            isPageExternalLink: false
                        },
                    ]
                }}
            />        
        </ScrollView>
    )
}