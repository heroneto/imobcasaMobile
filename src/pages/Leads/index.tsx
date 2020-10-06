import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import HeaderActions from '../../Components/HeaderActions';
import ItemCard from '../../Components/ItemCard';
import { useNavigation } from '@react-navigation/native'


const Tab = createMaterialTopTabNavigator();

export default function LeadsView(){
    const { navigate } = useNavigation()


    function handleNavigateToHomePage(){
        navigate('home')
    }

    return (

        <>
            <View style={styles.header} >
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#FFF"
                />
                <View style={styles.backButtonContainer}>
                    <RectButton
                        style={styles.backButtonHeader}
                        onPress={handleNavigateToHomePage}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#FFF" />
                    </RectButton>
                    <View style={styles.pageTitleContainer}>
                            <Text style={styles.pageTitle}>
                                Lista de Leads
                            </Text>
                    </View>
                </View>
            </View>
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
                        fontFamily: 'Poppins_400Regular',
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
                        tabBarLabel: "Hoje"
                    }}
                />
                <Tab.Screen 
                    name="overdueleads" 
                    component={OverdueLeads} 
                    options={{
                        tabBarLabel: "Atrasados"
                    }}
                />
                <Tab.Screen 
                    name="commingleads" 
                    component={CommingLeads}
                    options={{
                        tabBarLabel: "Próximos"
                    }}
                />
            </Tab.Navigator>
        </>
    )
}


function TodayLeads(){
    return (
        <View style={styles.contentContainer}>
            <ItemCard 
                title="Jamilson Ismaly"
                subtitle="5 Dias aguardando"
                modal={{
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
                title="Ribamar Marromenu"
                subtitle="99 Dias aguardando"
                modal={{
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
        </View>
    )
}
function OverdueLeads(){
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.title}>
                Leads View atrasados
            </Text>
        </View>
    )
}
function CommingLeads(){
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.title}>
                Leads View próximos dias
            </Text>
        </View>
    )
}