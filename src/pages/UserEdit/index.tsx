import React, { useState, useEffect } from 'react'
import { View, Text, Keyboard } from 'react-native'
import styles from './styles'
import FormPageHeader from '../../Components/HeaderFormContainer';
import StandardButton from '../../Components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'; 
import colors from '../../theme';
import TopInput from '../../Components/TopInput';
import MiddleInput from '../../Components/MiddleInput';

import * as data from '../appData.json'
import PickerInput from '../../Components/PickerInput';

interface UserEditProps {
    route: any
}

interface inputPickerProps {
    key?: any,
    label?: any,
    section?: any
}


const UserEdit : React.FC<UserEditProps> = ({route}) => {
    const { userid } = route.params
    const { navigate, goBack } = useNavigation()
    const [ name, setName ] = useState('Heron Eto')
    const [ username, setUsername ] = useState('heroneto')
    const [ email, setEmail ] = useState('heron@imobcasa.com')
    const [ status, setStatus ] = useState<inputPickerProps>({key: 1, label: "Ativo"})
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
            <FormPageHeader 
                backButtomAction={goBack}
            />
            <View style={styles.formContent}>
                <View style={styles.contentTitleContainer}>
                    {!isKeyboardOpen ? 
                        <Text style={styles.contentTitle}>
                            Editando usuário
                        </Text>
                    :
                        true
                    }

                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputTitle}>
                        Dados do usuário
                    </Text>
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

              
                <View style={styles.formActions}>

                    <StandardButton
                        onPress={handleSaveButtom} 
                        text="Atualizar"
                    />
                </View>
            </View>
            
        </View>
    )
}

export default UserEdit