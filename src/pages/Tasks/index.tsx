import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import HeaderActions from '../../Components/HeaderActions';
import ItemCard from '../../Components/ItemCard';
import { useNavigation } from '@react-navigation/native'


const Tab = createMaterialTopTabNavigator();

export default function TasksView(){
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
                            Lista de tarefas
                        </Text>
                    </View>
                </View>
                
            </View>
            <Tab.Navigator
                initialRouteName="todaytasks"
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
                    name="todaytasks" 
                    component={TodayTasks} 
                    options={{
                        tabBarLabel: "Hoje"
                    }}
                />
                <Tab.Screen 
                    name="overduetasks" 
                    component={OverdueTasks} 
                    options={{
                        tabBarLabel: "Atrasadas"
                    }}
                />
                <Tab.Screen 
                    name="commingtasks" 
                    component={CommingTasks}
                    options={{
                        tabBarLabel: "Próximas"
                    }}
                />
            </Tab.Navigator>
        </>
    )
}


function TodayTasks(){
    return (
        <View style={styles.contentContainer}>
            <ItemCard 
                title="Retornar contato"
                subtitle="Jamilson Ismaly"
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
                            pageToNavigate: "taskview",
                            isPageExternalLink: false,
                            navigationParameters: {
                                taskid: 1223232323,
                            }
                        },
                        {
                            id: "3",
                            name: "Editar",
                            pageToNavigate: "taskedit",
                            isPageExternalLink: false,
                            navigationParameters: {
                                taskid: 12121212121
                            }
                        },
                        {
                            id: "4",
                            name: "Concluir tarefa",
                            pageToNavigate: "home",
                            isPageExternalLink: false
                        },
                    ]
                }}
            />
        </View>
    )
}
function OverdueTasks(){
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.title}>
                Tasks View atrasados
            </Text>
        </View>
    )
}
function CommingTasks(){
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.title}>
                Tasks View próximos dias
            </Text>
        </View>
    )
}