import React, { useState, useEffect } from 'react'
import { View, Text, Image, Keyboard, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import AppImage from '../../../assets/appImage.png'
import { RectButton } from 'react-native-gesture-handler'
import TopInput from '../../Components/TopInput'
import BottomInput from '../../Components/BottonInput'
import StandardButton from '../../Components/StandardButton'
import { Ionicons } from '@expo/vector-icons';
import colors from '../../theme'
import { useNavigation } from '@react-navigation/native'


export default function LoginView(){
    const {navigate} = useNavigation()
    const [ isRememberMeSelected, setIsRememberMeSelected ] = useState(false)
    const [ isKeyboardOpen, setIsKeyboardOpen ] = useState(false)
    function handleNavigateToHomePage(){
        navigate('home')
    }
    
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true)
        })

        Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false)
        })
    },[])


    
    return (
        <KeyboardAvoidingView 
            style={styles.container}
            // behavior='position'

        >
            <View style={styles.header}>
                {!isKeyboardOpen ? 
                    <Image 
                        source={AppImage} 
                        style={styles.appImage}
                    />
                : 
                    true
                }
                
            </View>
            <View style={styles.loginFormContainer}>
                <View style={styles.loginTitle}>
                    <Text style={styles.formTitle}>Fazer Login</Text>
                </View>
                <View style={styles.formContainer}>
                    <TopInput 
                        placeholder="Digite seu Login"
                        label="E-Mail"
                        secureEntry={false}
                    />
                    <BottomInput 
                        placeholder="Digite sua senha"
                        label="Senha"
                        actionIconName='eye'
                        secureEntry={true}                        
                    />
                </View>
                <View style={styles.formActions}>
                    <View style={styles.loginOptionsContainer}>
                        <View style={styles.checkBoxContainer}>
                            <View 
                                style={styles.checkbox}
                            >
                                <RectButton
                                    onPress={() => setIsRememberMeSelected(!isRememberMeSelected)}
                                    style={styles.checkboxButton}
                                >
                                    <View
                                        style={{
                                            borderWidth: 2,
                                            borderRadius: 8,
                                            width: 24,
                                            height: 24,
                                            borderColor: isRememberMeSelected ? colors.standardButton : colors.textInputPlaceholder,
                                            backgroundColor: isRememberMeSelected ? colors.standardButton : colors.background,
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <Ionicons name="md-checkmark" size={18} color={colors.background} />
                                    </View>
                                    
                                </RectButton>
                            </View>
                            
                            <Text style={styles.checkboxLabel}>Lembrar-me</Text> 
                        </View>
                        <Text style={styles.forgotPasswordLink}>
                            Esqueci minha senha
                        </Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <StandardButton 
                            text="Entrar"
                            onPress={handleNavigateToHomePage}
                        />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}