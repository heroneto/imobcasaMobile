import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import HeaderActions from '../../Components/HeaderActions'
import { RectButton } from 'react-native-gesture-handler'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import ItemCard from '../../Components/ItemCard'

const Tab = createMaterialTopTabNavigator();

export default function UsersList(){
    const { navigate, goBack } = useNavigation()


    function handleNavigateToAppConfigPage(){
        navigate('appconfig')
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
                        onPress={handleNavigateToAppConfigPage}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#FFF" />
                    </RectButton>
                    <View style={styles.pageTitleContainer}>
                            <Text style={styles.pageTitle}>
                                Lista de usuários
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
                    name="activeusers" 
                    component={ActiveUsers} 
                    options={{
                        tabBarLabel: "Ativos"
                    }}
                />
                <Tab.Screen 
                    name="inactiveusers" 
                    component={InactiveUsers} 
                    options={{
                        tabBarLabel: "Inativos"
                    }}
                />
            </Tab.Navigator>
        </>
    )
}


function ActiveUsers(){
    return (
        <View style={styles.contentContainer}>
            <ItemCard 
                title="Heron Eto"
                subtitle="Atua em 1 campanha"
                modal={{
                    title: "Selecione uma opção",
                    options:[
                        {
                            id:"1",
                            name: "Ver Detalhes",
                            pageToNavigate: "userview",
                            isPageExternalLink: false,
                            navigationParameters: {
                                userid: "123"
                            }
                        },
                        {
                            id:"2",
                            name: "Editar",
                            pageToNavigate: "useredit",
                            isPageExternalLink: false,
                            navigationParameters: {
                                userid: "123"
                            }
                        }
                    ]
                }}
            />
            <ItemCard
                title="Vagner Zanela"
                subtitle="Atua em 99 campanha"
                modal={{
                    title: "Selecione uma opção",
                    options:[
                        {
                            id:"1",
                            name: "Ver Detalhes",
                            pageToNavigate: "userview",
                            isPageExternalLink: false,
                            navigationParameters: {
                                userid: "123"
                            }
                        }
                    ]
                }}
            />
        </View>
    )
}
function InactiveUsers(){
    return (
        <View style={styles.contentContainer}>
            <Text style={styles.title}>
                Inactive Users
            </Text>
        </View>
    )
}