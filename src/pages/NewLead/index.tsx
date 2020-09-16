import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import styles from './styles'
import HeaderActions from '../../Components/HeaderActions'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'; 
import TopInput from '../../Components/TopInput'
import { Feather } from '@expo/vector-icons'; 
import BottomInput from '../../Components/BottonInput'
import StandardButton from '../../Components/StandardButton'
import TopPicker from '../../Components/TopPicker'
import MiddlePicker from '../../Components/MiddlePicker'
import BottonPicker from '../../Components/BottonPicker'
const { Navigator, Screen } = createStackNavigator()



export default function NewLead(){
    return (
        <Navigator 
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            initialRouteName='newleadstepone'
        >
            <Screen name="newleadstepone" component={StepOne} />
            <Screen name="newleadsteptwo" component={StepTwo} />
            <Screen name="newleadalreadyexists" component={LeadExists} />
        </Navigator>

    )
}


const StepOne = () => {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const { goBack, navigate } = useNavigation()


    function handleNavigateToHomePage(){
        navigate('home')
    }

    function handleNavigateToNextPage(){
        navigate('newleadsteptwo', {
            name,
            phone
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#000"
                />
                <RectButton
                    style={styles.backButtonHeader}
                    onPress={handleNavigateToHomePage}
                >
                    <Ionicons name="ios-arrow-back" size={24} color="#000" />
                </RectButton>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formTitleContainer}>
                    <Text style={styles.formTitle}>
                        Insira os dados de contato deste Lead {phone} {name}
                    </Text>
                </View>
                <View style={styles.inputGroup}>
                    <TopInput 
                        label="Nome completo"
                        placeholder="Digite o nome completo"
                        Icon={<Feather name="user" size={24} color="rgba(0,0,0,.2)" />}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <BottomInput 
                        label="WhatsApp"
                        placeholder="Digite o telefone com DDD"
                        Icon={<Feather name="phone" size={24} color="rgba(0,0,0,.2)"  />}
                        secureEntry={false}
                        textContentType="telephoneNumber"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={text => setPhone(text)}
                    />
                </View>
            </View>
            <View style={styles.formActionContainer}>
                <View style={styles.nextPageButtonContainert}>
                    <StandardButton 
                        icon={<Ionicons name="ios-arrow-forward" size={24} color="#FFF"/>}
                        onPress={handleNavigateToNextPage}
                    />
                </View>
            </View>
        </View>
    )
}


interface StepTwoProps {
    route: any
}

const StepTwo : React.FC<StepTwoProps> = ({route}) => {
    const { name, phone } = route.params
    
    
    const { goBack, navigate } = useNavigation()

    function handleSaveButton(){
        navigate('leadview', {
            leadid: "12121"
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#000"
                />
                <RectButton
                    style={styles.backButtonHeader}
                    onPress={goBack}
                >
                    <Ionicons name="ios-arrow-back" size={24} color="#000" />
                </RectButton>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formTitleContainer}>
                    <Text style={styles.formTitle}>
                        Insira os dados de contato deste Lead {phone} {name}
                    </Text>
                </View>
                <View style={styles.inputGroup}>
                    <TopPicker 
                        defaultValue="facebook"
                        itens={[
                            {
                                id: "1",
                                label: "Facebook",
                                value: 'facebook'
                            },
                            {
                                id: "2",
                                label: "Manual",
                                value: 'manual'
                            }
                        ]}
                        label="Campanha"
                    />
                    <MiddlePicker 
                        defaultValue=""
                        itens={[
                            {
                                id: "1",
                                label: "Heron Eto",
                                value: 'heto'
                            },
                            {
                                id: "2",
                                label: "Vagner Zanela",
                                value: 'vagner'
                            },
                            {
                                id: "3",
                                label: "Nadia",
                                value: 'nadia'
                            }
                        ]}
                        label="Responsável"
                    />
                    <BottonPicker 
                        defaultValue=""
                        itens={[
                            {
                                label: "Aguardando",
                                id: "1",
                                value: "pending"
                            },
                            {
                                label: "Negociação em andamento",
                                id: "2",
                                value: "inProgress"
                            },
                            {
                                label: "Negociação concluída",
                                id: "3",
                                value: "done"
                            },
                        ]}
                        label="Status"
                    />
                </View>
            </View>
            <View style={styles.formSaveButtonContainer}>
                <View style={styles.saveButtonContainer}>
                    <StandardButton 
                        text="Salvar"
                        onPress={handleSaveButton}
                    />
                </View>
            </View>

        </View>
    )

}

interface LeadExistsProps{
    route: any
}

const LeadExists : React.FC<LeadExistsProps> = ({route}) => {
    const { leadid } = route.params
    const { goBack, navigate } = useNavigation()

    function handleNavigateToHomePage(){
        navigate('home')
    }

    function handleNavigateToEditLead(){
        navigate('leadedit', {
            leadid
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#000"
                />
                <RectButton
                    style={styles.backButtonHeader}
                    onPress={handleNavigateToHomePage}
                >
                    <Ionicons name="ios-arrow-back" size={24} color="#000" />
                </RectButton>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formTitleContainer}>
                    <Text style={styles.formTitle}>
                        Ops, parece que este Lead já exite. Deseja atualizar ou voltar para criar outro?
                    </Text>
                </View>
            </View>
            <View style={styles.formSaveButtonContainer}>
                <View style={styles.backButtonContainer}>
                    <StandardButton 
                        icon={<Ionicons name="ios-arrow-back" size={24} color="#FFF" />}
                        onPress={goBack}
                    />
                </View>
                <View style={styles.saveButtonContainer}>
                    <StandardButton 
                        text="Atualizar atual"
                        onPress={handleNavigateToEditLead}
                    />
                </View>
            </View>

        </View>
    )

}