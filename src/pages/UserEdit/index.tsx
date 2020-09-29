import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import FormPageHeader from '../../Components/HeaderFormContainer';
import StandardButton from '../../Components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'; 
import colors from '../../theme';
import TopInput from '../../Components/TopInput';
import MiddleInput from '../../Components/MiddleInput';
import BottonPicker from '../../Components/BottonPicker';

interface UserEditProps {
    route: any
}

const UserEdit : React.FC<UserEditProps> = ({route}) => {
    const { userid } = route.params
    const { navigate, goBack } = useNavigation()
    const [ name, setName ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ active, setActive ] = useState('')

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
                        Editando usuário
                    </Text>
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
                    />                      
                    <MiddleInput
                        label="E-Mail"
                        placeholder="Insira o E-Mail do usuário"
                        Icon={<Feather name="mail" size={24} color={colors.textInputLabel} />}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <BottonPicker 
                        label="Status"
                        selectedValue={active}
                        itens={[
                            {
                                id:"1",
                                label:"Ativo",
                                value:"1"
                            },
                            {
                                id:"2",
                                label:"Inativo",
                                value:"2"
                            }   
                        ]}
                        onValueChange={value => setActive(value)}
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