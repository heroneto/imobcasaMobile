import React, { useState, useEffect } from 'react'
import styles from './styles'
import { View, Text, Keyboard, TouchableOpacity } from 'react-native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import TopInput from '../../Components/TopInput'
import MiddleInput from '../../Components/MiddleInput'
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'
import colors from '../../theme'
import StandardButton from '../../Components/StandardButton'
import { Ionicons } from '@expo/vector-icons'; 
import HeaderActions from '../../Components/HeaderActions'
import BottomInput from '../../Components/BottonInput'
import PickerInput from '../../Components/PickerInput'

import * as data from '../appData.json'

const { Navigator, Screen } = createStackNavigator()



export default function NewUser() {
    return (
        <Navigator 
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            initialRouteName="newtaskstepone"
        >
            <Screen name="newtaskstepone" component={NewUserStepOne} />
            <Screen name="useralreadyexists" component={NewUserAlreadyExists} />
            <Screen name="newtaskstepthree" component={NewUserStepTwo} />
        </Navigator>

    )
}

interface inputPickerProps {
    key?: any,
    label?: any,
    section?: any
}

const NewUserStepOne = () => {
    const { navigate, goBack } = useNavigation()
    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ status, setStatus ] = useState<inputPickerProps>({})
    const [ isKeyboardOpen, setIsKeyboardOpen ] = useState(false)


    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true)
        })

        Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false)
        })
    },[])

    function handleNavigateToNextPage(){
        navigate('newtaskstepthree', {
            name,
            username,
            email,
            active: status
        })
        // navigate('useralreadyexists', {
        //     userid: "sdsds"
        // })
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#000"
                />
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity
                        style={styles.backButtonHeader}
                        onPress={goBack}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentTitleContainer}>
                {!isKeyboardOpen ? 
                    <Text style={styles.contentTitle}>
                        Insira as informações básicas do usuário
                    </Text>
                :
                    true
                }

            </View>
            <View style={styles.contentContainer}>
                <View style={styles.inputGroup}>
                    <TopInput
                        label="Nome completo"
                        placeholder="Insira o nome completo"
                        Icon={<Feather name="user" size={24} color={colors.textInputLabel} />}
                        value={name}
                        onChangeText={text => setName(text)}
                        secureEntry={false}
                    />
                    <MiddleInput
                        label="Username"
                        placeholder="Insira o Username"
                        Icon={<Feather name="user" size={24} color={colors.textInputLabel} />}
                        value={username}
                        onChangeText={text => setUsername(text)}
                        secureEntry={false}
                    />                      
                    <MiddleInput
                        label="E-Mail"
                        placeholder="Insira o E-Mail do usuário"
                        Icon={<Feather name="mail" size={24} color={colors.textInputLabel} />}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        secureEntry={false}
                    />
                    <PickerInput 
                        value={status.label}
                        borderRadius={{
                            topLeft: 0,
                            topRight: 0,
                            bottomLeft: 0,
                            bottomRight: 0
                        }}
                        data={data.userStatus}
                        label="Status"
                        placeholder="Selecione o status do usuário"
                        onChange={(option)=>{ 
                            setStatus(option) 
                        }}
                    />
                   
                </View>
                <View style={styles.formActionContainer}>
                    <View style={styles.nextPageButtonContainer}>
                        <StandardButton
                            onPress={handleNavigateToNextPage} 
                            icon={<Ionicons name="ios-arrow-forward" size={24} color="#FFF" />}
                        />
                    </View>
                </View>
            </View>
            {/* <View style={styles.pageActionsContainer}>
                <View style={styles.formActionContainer}>
                    <View style={styles.nextPageButtonContainer}>
                        <StandardButton
                            onPress={handleNavigateToNextPage} 
                            icon={<Ionicons name="ios-arrow-forward" size={24} color="#FFF" />}
                        />
                    </View>
                </View>
            </View> */}
            
        </View>
    )
}

interface NewUserAlreadyExistsProps{
    route: any
}


const NewUserAlreadyExists : React.FC<NewUserAlreadyExistsProps> = ({route}) => {
    const { userid } = route.params
    const { goBack, navigate } = useNavigation()

    function handleNavigateToHomePage(){
        navigate('home')
    }

    function handleNavigateToEditPage(){
        navigate('userview', {
            userid,
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#000"
                />
            </View>
            <View style={{
                ...styles.contentContainer,
                flex: .5,
                justifyContent: 'center',
                alignItems: 'center'
                }}
            >
                <Text style={styles.messageText}>
                        Ops, parece que já existe um usuário com esse username, deseja atualizar o atual ou escolher outro Username?
                </Text>
            </View>
            <View style={styles.pageActionsContainer}>
                <View style={styles.actionsContainer}>
                    <View style={styles.backButtonContainer}>
                        <StandardButton 
                            icon={<Ionicons name="ios-arrow-back" size={24} color="#FFF" />}
                            onPress={goBack}
                        />
                    </View>
                    <View style={styles.saveButtonContainer}>
                        <StandardButton 
                            text="Atualizar atual"
                            onPress={handleNavigateToEditPage}
                        />
                    </View>
                </View>
            </View>

        </View>
    )
}

interface NewUserStepTwoProps{
    route: any
}

const NewUserStepTwo : React.FC<NewUserStepTwoProps> = ({route}) => {
    const { username, name, email, active } = route
    const { userid } = route.params
    const { navigate, goBack } = useNavigation()
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')
    const [ isKeyboardOpen, setIsKeyboardOpen ] = useState(false)


    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true)
        })

        Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false)
        })
    },[])

    function handleSaveButtom(){
        navigate('userview', {
            userid
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#000"
                />
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity
                        style={styles.backButtonHeader}
                        onPress={goBack}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentTitleContainer}>
                {!isKeyboardOpen ? 
                    <Text style={{
                        ...styles.contentTitle,
                        fontSize: 36,
                    }}>
                        Shhhhhh....
                    </Text>
                :
                    true
                }
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputTitle}>
                        Segurança
                    </Text>
                    <TopInput
                        label="Senha"
                        placeholder="Digite a nova senha"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        actionIconName='eye'
                        secureEntry={true}
                    />                                    
                    <BottomInput
                        label="Confirmação de senha"
                        placeholder="Digite a senha novamente"
                        value={passwordConfirmation}
                        secureEntry={true}
                        onChangeText={text => setPasswordConfirmation(text)}
                        actionIconName='eye'
                    />
                </View>
            </View>
            <View style={styles.pageActionsContainer}>
                <View style={{
                    ...styles.formActionContainer,
                    paddingHorizontal: 80,
                    flexDirection: 'column',
                }}>

                    <StandardButton
                        onPress={handleSaveButtom} 
                        text="Salvar"
                    />
                </View>
            </View>
            
        </View>
    )
}