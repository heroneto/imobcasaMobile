import React, { useState } from 'react'
import { View, Text, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import FormPageHeader from '../../Components/HeaderFormContainer';
import TopInput from '../../Components/TopInput';
import { Feather } from '@expo/vector-icons'; 
import BottomInput from '../../Components/BottonInput';
import StandardButton from '../../Components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import PickerInput from '../../Components/PickerInput';

import * as data from '../appData.json'

interface LeadEditProps {
    route: any
}

interface inputPickerProps {
    key?: any,
    label?: any,
    section?: any
}

const LeadEdit : React.FC<LeadEditProps> = ({route}) => {
    const { leadid } = route.params
    const { navigate, goBack } = useNavigation()
    const [ name, setName ] = useState('Everisto de Barros')
    const [ phone, setPhone ] = useState('119999999')
    const [ origin, setOrigin ] = useState<inputPickerProps>({key: 5, label: "Facebook"})
    const [ campaign, setCampaign] = useState<inputPickerProps>({key: 5, label: "Vila Formosa"})
    const [ user, setUser] = useState<inputPickerProps>({key: 5, label: "Heron Hideki"})
    const [ leadStatus, setLeadStatus ] = useState<inputPickerProps>({key: 5, label: "Negociação em andamento"})
    const [ titleAlpha, setTitleAlpha ] = useState(100)



    function handleSaveButtom(){
        navigate('leadview', {
            leadid
        })
    }

    function handleContentOffsetChanges(event: NativeSyntheticEvent<NativeScrollEvent>){
        const titleColorTransparency = 1 - Number((event.nativeEvent.contentOffset.y * 1) / 100)
        setTitleAlpha(titleColorTransparency < 0.1 ? 0 : titleColorTransparency)
    }

    return (
        <ScrollView style={styles.container} onScroll={(event) => handleContentOffsetChanges(event)}>
            <FormPageHeader 
                backButtomAction={goBack}
            />
            <View style={styles.title}>
                <Text style={{
                    ...styles.titleText,
                    color: `rgba(0,0,0,${titleAlpha})`
                }}>
                    Edição de Lead
                </Text>
            </View>
            <View style={styles.formContent}>
                <View
                    style={styles.inputGroup}
                >
                    <Text style={styles.inputTitle}>
                        Dados do Lead
                    </Text>
                    <TopInput 
                        label="Nome"
                        Icon={<Feather name="user" size={24} color="rgba(0,0,0,.2)" />}
                        placeholder="Insira o nome do Lead"
                        secureEntry={false}
                        value={name}
                        onChangeText={value => setName(value)}
                    />
                    <BottomInput 
                        label="Telefone"
                        placeholder="Insira o telefone"
                        Icon={<Feather name="phone" size={24} color="rgba(0,0,0,.2)"  />}
                        secureEntry={false}
                        textContentType="telephoneNumber"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={value => setPhone(value)}
                    />

                </View>

                <View
                    style={styles.inputGroup}
                >
                    <Text style={styles.inputTitle}>
                        Origem
                    </Text>
                    <PickerInput 
                        data={data.leadOrigin}
                        borderRadius={{
                            bottomLeft:0,
                            bottomRight:0,
                            topLeft: 8,
                            topRight: 8
                        }}
                        label="Origem"
                        placeholder="Selecione a origem do Lead"
                        value={origin.label}
                        onChange={(option) => {
                            setOrigin(option)
                        }}
                    />
                    <PickerInput 
                        data={data.leadCampaign}
                        borderRadius={{
                            bottomLeft:8,
                            bottomRight:8,
                            topLeft: 0,
                            topRight: 0
                        }}
                        label="Origem"
                        placeholder="Selecione a campanha do Lead"
                        value={campaign.label}
                        onChange={(option) => {
                            setCampaign(option)
                        }}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputTitle}>
                        Responsável
                    </Text>
                    <PickerInput 
                        data={data.users}
                        borderRadius={{
                            bottomLeft:8,
                            bottomRight:8,
                            topLeft: 8,
                            topRight: 8
                        }}
                        label="Usuário"
                        placeholder="Selecione o usuário"
                        value={user.label}
                        onChange={(option) => {
                            setUser(option)
                        }}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputTitle}>
                        Negociação 
                    </Text>
                    <PickerInput 
                        data={data.leadStatus}
                        borderRadius={{
                            bottomLeft:8,
                            bottomRight:8,
                            topLeft: 8,
                            topRight: 8
                        }}
                        label="Status"
                        placeholder="Insira o status da negociação"
                        value={leadStatus.label}
                        onChange={(option) => {
                            setLeadStatus(option)
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
            
        </ScrollView>
    )
}

export default LeadEdit