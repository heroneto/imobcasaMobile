import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import FormPageHeader from '../../Components/HeaderFormContainer';
import StandardButton from '../../Components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'; 
import colors from '../../theme';
import TopInput from '../../Components/TopInput';
import BottomInput from '../../Components/BottonInput';


interface UserPasswordChangeProps {
    route: any
}

const UserPasswordChange : React.FC<UserPasswordChangeProps> = ({route}) => {
    const { userid } = route.params
    const { navigate, goBack } = useNavigation()
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')

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
                    <Text style={styles.contentTitle}>
                        Shhhhhh....
                    </Text>
                </View>
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
                        label="E-Mail"
                        placeholder="Insira o E-Mail do usuário"
                        value={passwordConfirmation}
                        secureEntry={true}
                        onChangeText={text => setPasswordConfirmation(text)}
                        actionIconName='eye'
                    />
                </View>

              
                <View style={styles.formActions}>

                    <StandardButton
                        onPress={handleSaveButtom} 
                        text="Salvar"
                    />
                </View>
            </View>
            
        </View>
    )
}

export default UserPasswordChange