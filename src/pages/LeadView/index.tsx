import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import styles from './styles'
import HeaderActions from '../../Components/HeaderActions'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'


import WhatsAppIcon from '../../../assets/icons/WhatsApp.png'
import colors from '../../theme'

interface LeadViewProps {
    route: any
}

const LeadView : React.FC<LeadViewProps> = ({route}) => {
    const { leadid } = route.params
    const {navigate, goBack} = useNavigation()

    function handleToWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${'+5511952827212'}`)
    }

    function handleNavigateToLeadsPage(){
        navigate('leads')
    }

    function handleNavigateToEditPage(){
        navigate('leadedit', {leadid})
    }

    return (
        <View style={styles.container}>
            <View>
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#000"
                />
                <View style={styles.backButtonContainer}>
                    <RectButton
                        style={styles.backButtonHeader}
                        onPress={handleNavigateToLeadsPage}
                    >
                            <Ionicons name="ios-arrow-back" size={24} color="#000" />
                    </RectButton>
                </View>
                
            </View>
            <View style={styles.leadHeaderContainer}>
                <View style={styles.leadNameContainer}>
                    <Text style={styles.leadName}>José da Silva Junior</Text>
                </View>
                <View style={styles.leadActionsContainer}>
                    <View style={styles.leftButtonContainer}>
                        <RectButton
                            style={styles.leftButton}
                            onPress={handleNavigateToEditPage}
                        >
                            <Text style={styles.buttonText}>Editar</Text>
                        </RectButton>
                    </View>
                    <View  style={styles.middleButtonContainer}>
                        <RectButton
                            style={styles.middleButton}
                        >
                            <Ionicons name="md-trash" size={24} color="#FFF" />
                        </RectButton>
                    </View>
                    <View style={styles.middleButtonContainer}>
                        <RectButton
                            style={styles.middleButton}
                        >
                            <Ionicons name="ios-add-circle" size={24} color="#FFF" />
                        </RectButton>
                    </View>
                    <View style={{
                        ...styles.rightButtonContainer,
                        backgroundColor: colors.whatsapp,
                    }}>
                        <RectButton
                            style={styles.rightButton}
                            onPress={handleToWhatsApp}
                        >
                            <Image 
                                source={WhatsAppIcon}
                                style={styles.whatsappIcon}
                            />
                        </RectButton>
                    </View>
                </View>
            </View>
            <ScrollView
                style={styles.contentList}
            >
                <View style={styles.contentGroup}>
                    <View style={styles.contentGroupHeader}>
                        <Text style={styles.headerTitle}>
                            Dados do Lead
                        </Text>
                        <View style={styles.headerLine}/>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.contentItem}>
                            <Text style={styles.category}>Nome</Text>
                            <Text style={styles.value}>José da Silva Junior</Text>
                        </View>
                        <View style={styles.contentItem}>
                            <Text style={styles.category}>Telefone</Text>
                            <Text style={styles.value}>(11) 95282-7212</Text>
                        </View>
                        <View style={styles.contentItem}>
                            <Text style={styles.category}>Data do cadastro</Text>
                            <Text style={styles.value}>12/08/2020 às 21:45</Text>
                        </View>
                        <View style={styles.contentItem}>
                            <Text style={styles.category}>Status</Text>
                            <Text style={styles.value}>Aguardando</Text>
                        </View>
                        <View style={styles.contentItem}>
                            <Text style={styles.category}>Data da última alteração</Text>
                            <Text style={styles.value}>12/08/2020 às 22:00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.contentGroup}>
                    <View style={styles.contentGroupHeader}>
                        <Text style={styles.headerTitle}>
                            Fonte
                        </Text>
                        <View style={styles.headerLine}/>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.contentItem}>
                            <Text style={styles.category}>Fonte</Text>
                            <Text style={styles.value}>Facebook</Text>
                        </View>
                        <View style={styles.contentItem}>
                            <Text style={styles.category}>Formulário</Text>
                            <Text style={styles.value}>Penha</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.contentGroup}>
                    <View style={styles.contentGroupHeader}>
                        <Text style={styles.headerTitle}>
                            Responsável
                        </Text>
                        <View style={styles.headerLine}/>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.contentItem}>
                            <Text style={styles.category}>Nome</Text>
                            <Text style={styles.value}>Heron Hideki de Queiroz Eto</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default LeadView