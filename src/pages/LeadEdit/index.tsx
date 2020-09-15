import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import FormPageHeader from '../../Components/HeaderFormContainer';
import TopInput from '../../Components/TopInput';
import { Feather } from '@expo/vector-icons'; 
import BottomInput from '../../Components/BottonInput';
import TopPicker from '../../Components/TopPicker'
import BottonPicker from '../../Components/BottonPicker';
import SinglePicker from '../../Components/SinglePicker';
import StandardButton from '../../Components/StandardButton';
import { useNavigation } from '@react-navigation/native'


interface LeadEditProps {
    route: any
}

const LeadEdit : React.FC<LeadEditProps> = ({route}) => {
    const { leadid } = route.params
    const { navigate, goBack } = useNavigation()
    const [ origin, setOrigin ] = useState("manual")
    const [ category, setCategory ] = useState("semcategoria")

    function handleOrigem(value: string){
        setOrigin(value)
    }

    function handleSaveButtom(){
        goBack()
    }

    return (
        <ScrollView style={styles.container}>
            <FormPageHeader 
                backButtomAction={goBack}
            />
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
                    />
                    <BottomInput 
                        label="Telefone"
                        placeholder="Insira o telefone"
                        Icon={<Feather name="phone" size={24} color="rgba(0,0,0,.2)"  />}
                        secureEntry={false}
                        textContentType="telephoneNumber"
                        keyboardType="phone-pad"
                    />

                </View>

                <View
                    style={styles.inputGroup}
                >
                    <Text style={styles.inputTitle}>
                        Origem
                    </Text>
                    <TopPicker 
                        label="Origem"
                        defaultValue={origin}
                        itens={[
                            {
                                id: "1",
                                label: 'Facebook',
                                value: 'facebook'
                            },
                            {
                                id: "2",
                                label: 'Manual',
                                value: 'manual'
                            }
                        ]}
                        onValueChange={value => handleOrigem(value)}
                    />
                    <BottonPicker 
                        label="Sub-Categoria"
                        defaultValue={category}
                        itens={[
                            {
                                id: "1",
                                label: 'Formulário - Tatuapé',
                                value: 'formtatu'
                            },
                            {
                                id: "2",
                                label: 'Sem categoria',
                                value: 'semcategoria'
                            }
                        ]}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputTitle}>
                        Responsável
                    </Text>
                    <SinglePicker 
                        label="Responsável"
                        defaultValue="heron"
                        itens={[
                            {
                                label: "Heron Hideki",
                                id: "1",
                                value: "heron"
                            },
                            {
                                label: "Vagner Zanela",
                                id: "2",
                                value: "vagner"
                            },
                            {
                                label: "Nadia",
                                id: "3",
                                value: "nadia"
                            },
                        ]}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.inputTitle}>
                        Responsável
                    </Text>
                    <SinglePicker 
                        label="Status"
                        defaultValue="pending"
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
                    />
                </View>

                <View style={styles.formActions}>

                    <StandardButton
                        onPress={handleSaveButtom} 
                        text="Salvar"
                    />
                </View>
            </View>
            
        </ScrollView>
    )
}

export default LeadEdit