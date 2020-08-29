import React, { useState } from 'react'
import { View , Text, RefreshControl, Image } from 'react-native'
import styles from './styles'
import { ScrollView, TextInput, FlatList, RectButton } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 

export default function HomeView(){
    const [ refreshing, setRefreshing ] = useState(false)
    const [ searchResults, setSearchResults ] = useState([])
    const [ searchInput, setSearchInput ] = useState('')
    const data: Array<ItemResultProps> = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Heron Eto',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Vagner Zanela',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Nadia Zanela',
        },
    ]

    const onRefresh = async () => {
        setRefreshing(true)
        
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.myselfContainer}>
                    <Image style={styles.myselfImage} source={{uri: "https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"}} />
                </View>
                <View style={styles.headerOptionsContainer}>
                    <RectButton
                        style={styles.settingsButton}
                    >
                        <Ionicons name="md-settings" size={24} color="black" />
                    </RectButton>
                    <RectButton 
                        style={styles.searchButton}
                    >
                        <Ionicons name="md-search" size={24} color="black" />
                    </RectButton>
                </View>
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
                <View style={styles.leadStatusContainer}>
                    <View style={styles.leadStatusHeader}>
                        <Text style={styles.leadStatusHeaderText}>
                            Leads
                        </Text>
                        <View style={styles.lineHeader}/>
                        <RectButton
                            style={styles.leadStatusContainerOptions}
                        >
                            <SimpleLineIcons name="options" size={24} color="black" />
                        </RectButton>
                    </View>
                    <View style={styles.leadStatusContent}>
                        <View style={styles.statusContainer}>
                            <RectButton
                                style={styles.statusButton}
                            >
                                <View style={styles.statusCount}>
                                    <Text style={styles.statusCountText}>
                                        10
                                    </Text>
                                </View>
                                <Text style={styles.statusName}>
                                    Aguardando
                                </Text>
                            </RectButton>
                            <RectButton
                                style={styles.statusButton}
                            >
                                <View style={styles.statusCount}>
                                    <Text style={styles.statusCountText}>
                                        10
                                    </Text>
                                </View>
                                <Text style={styles.statusName}>
                                    Negociação em andamento
                                </Text>
                            </RectButton>
                            <RectButton
                                style={styles.statusButton}
                            >
                                <View style={styles.statusCount}>
                                    <Text style={styles.statusCountText}>
                                        10
                                    </Text>
                                </View>
                                <Text style={styles.statusName}>
                                    Negociação concluída
                                </Text>
                            </RectButton>
                        </View>
                    </View>
                </View>
                <View style={styles.scheculeContainer}>
                    <View style={styles.leadStatusHeader}>
                        <Text style={styles.leadStatusHeaderText}>
                            Sua agenda
                        </Text>
                        <View style={styles.lineHeader}/>
                        <RectButton
                            style={styles.leadStatusContainerOptions}
                        >
                            <SimpleLineIcons name="options" size={24} color="black" />
                        </RectButton>
                    </View>
                    <View style={styles.leadStatusContent}>
                        <View style={styles.statusContainer}>
                        <RectButton
                            style={styles.statusButton}
                        >
                            <View style={styles.statusCount}>
                                <Text style={styles.statusCountText}>
                                    10
                                </Text>
                            </View>
                            <Text style={styles.statusName}>
                                Retornar contato
                            </Text>
                        </RectButton>
                        <RectButton
                            style={styles.statusButton}
                        >
                            <View style={styles.statusCount}>
                                <Text style={styles.statusCountText}>
                                    10
                                </Text>
                            </View>
                            <Text style={styles.statusName}>
                                Visita agendada
                            </Text>
                        </RectButton>
                        <RectButton
                            style={styles.statusButton}
                        >
                            <View style={styles.statusCount}>
                                <Text style={styles.statusCountText}>
                                    10
                                </Text>
                            </View>
                            <Text style={styles.statusName}>
                                Solicitar documentação
                            </Text>
                        </RectButton>
                        <RectButton
                            style={styles.statusButton}
                        >
                            <View style={styles.statusCount}>
                                <Text style={styles.statusCountText}>
                                    10
                                </Text>
                            </View>
                            <Text style={styles.statusName}>
                                Cobrar cliente
                            </Text>
                        </RectButton>
                        </View>
                    </View>
                </View>
                <Text>Deslize para atualizar {refreshing ? "Atualizando" : "Conteúdo atualizado"}</Text>

            </ScrollView>
        </View >
    )
}