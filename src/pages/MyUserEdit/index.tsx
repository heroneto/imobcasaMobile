import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import BottomInput from '../../Components/BottonInput'
import TopInput from '../../Components/TopInput'
import colors from '../../theme'
import { Feather } from '@expo/vector-icons'; 
import FormPageHeader from '../../Components/HeaderFormContainer'
import StandardButton from '../../Components/StandardButton'


interface MyUserEditProps{
    route: any
}

const MyUserEdit : React.FC<MyUserEditProps> = ({route}) => {
    const { userid } = route
    const { navigate, goBack } = useNavigation()
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')

    function handleSaveButtom(){
        goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer} >
                <FormPageHeader 
                    backButtomAction={goBack}
                />
            </View>
            <View style={styles.contentContainer} >
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
                    <BottomInput
                        label="E-Mail"
                        placeholder="Insira o E-Mail do usuário"
                        Icon={<Feather name="mail" size={24} color={colors.textInputLabel} />}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        secureEntry={false}
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

export default MyUserEdit