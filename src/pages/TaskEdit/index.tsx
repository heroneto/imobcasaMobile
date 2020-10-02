import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { ScrollView, TextInput, RectButton } from 'react-native-gesture-handler'
import FormPageHeader from '../../Components/HeaderFormContainer';
import TopPicker from '../../Components/TopPicker'
import SinglePicker from '../../Components/SinglePicker';
import StandardButton from '../../Components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import MiddlePicker from '../../Components/MiddlePicker';
import InputContainer from '../../Components/InputContainer';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons'; 
import colors from '../../theme';
import moment from 'moment'

interface TaskEditProps {
    route: any
}

const TaskEdit : React.FC<TaskEditProps> = ({route}) => {
    const { taskid } = route.params
    const { navigate, goBack } = useNavigation()
    const [ taskowner, setTaskOwner ] = useState('heroneto')
    const [ taskType, setTaskType ] = useState('cobrarcliente')
    const [ taskLead, setTaskLead ] = useState('jose')
    const [ taskDescription, setTaskDescription ] = useState('Cliente malucoooo')
    const [ date, setDate ] = useState(new Date())
    const [ isShowingDatePicker, setIsShowingDatePicker ] = useState(false)

    const handleTaskDate = (event: any, dateSelected: any) => {
        console.log("Alkterando data")
        const currentDate = dateSelected || date;
        // setShow(Platform.OS === 'ios');
        setIsShowingDatePicker(false)
        setDate(currentDate)
    }

    function showDatePicker(){
        console.log("Abrtindo picker")
        setIsShowingDatePicker(true)
    }

    function handleTaskOwner(value: string){
        setTaskOwner(value)
    }

    function handleTaskLead(value: string){
        setTaskLead(value)
    }

    function handleTaskType(value: string){
        setTaskType(value)
    }

    function handleSaveButtom(){
        navigate('taskview', {
            taskid
        })
    }

    return (
        <View style={styles.container}>
            <FormPageHeader 
                backButtomAction={goBack}
            />
            <ScrollView style={styles.formContent}>
                <View
                    style={styles.inputGroup}
                >
                    <Text style={styles.inputTitle}>
                        Dados da Tarefa
                    </Text>
                    <TopPicker 
                       label="Responsável"
                       selectedValue={taskowner}
                       itens={[
                            {
                               id: "1",
                               label: "Heron Hideki de Queiroz Eto",
                               value: "heroneto"
                            },
                            {
                                id: "2",
                                label: "Vagner Zanella",
                                value: "vzanela"
                            },
                            {
                                id: "3",
                                label: "Nadia",
                                value: "nadia"
                            },
                       ]}
                       onValueChange={value => handleTaskOwner(value)}
                    />
                    <MiddlePicker 
                        label="Tipo de tarefa"
                        selectedValue={taskType}
                        itens={[
                            {
                               id: "1" ,
                               label: "Cobrar cliente",
                               value: 'cobrarcliente'
                            },
                            {
                                id: "2" ,
                                label: "Retornar contato",
                                value: 'retornarcontato'
                            },
                            {
                                id: "3" ,
                                label: "Enviar doc/foto/vídeo",
                                value: 'enviardoc'
                            },
                            {
                                id: "4" ,
                                label: "Visita agendada",
                                value: 'visitaagendada'
                            },
                        ]}
                        onValueChange={value => handleTaskType(value)}
                    />
                    <InputContainer
                        label="Data planejada"
                        inputRadiusStyle={{
                            bottomLeft: true,
                            bottomRight: true,
                            topRight: false,
                            topLeft: false
                        }}
                    >
                        {isShowingDatePicker ? 
                            (<DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode='date'
                                // is24Hour={true}
                                display="default"
                                // onChange={handleTaskDate}
                                onChange={handleTaskDate}
                                locale='pt-BR'
                            />)
                        : true}
                        
                        <View style={styles.dateInputContainer}>
                            <View style={styles.labelContainer}>
                                <Text style={{
                                    ...styles.textLabel,
                                    color: date ? colors.textInput : colors.textInputLabel
                                
                                }}>
                                    {moment(date).format('DD-MM-YYYY') || "Selecione a data"}
                                </Text>
                            </View>
                            <View style={styles.dateButtonContainer}>
                                <RectButton
                                    style={styles.dateButton}
                                    onPress={showDatePicker}
                                >
                                    <Ionicons name="md-calendar" size={24} color={colors.textInput} />
                                </RectButton>
                            </View>
                        </View>
                    </InputContainer>
                    

                </View>

                <View
                    style={styles.inputGroup}
                >
                    <Text style={styles.inputTitle}>
                        Lead
                    </Text>
                    <SinglePicker 
                        label="Lead"
                        defaultValue={taskLead}
                        itens={[
                            {
                                id: "1",
                                label: 'José Silva',
                                value: 'jose'
                            },
                            {
                                id: "2",
                                label: 'Everisto Pereira',
                                value: 'everisto'
                            }
                        ]}
                        onValueChange={value => handleTaskLead(value)}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.inputTitle}>
                        Detalhes
                    </Text>
                    <InputContainer
                        label="Detalhes"
                        inputRadiusStyle={{
                            bottomLeft: true,
                            bottomRight: true,
                            topLeft: true,
                            topRight: true,
                        }}
                    >
                        <TextInput
                            style={styles.textMultiLineInput}
                            multiline={true}
                            maxLength={128}
                            value={taskDescription}
                            onChangeText={text => setTaskDescription(text)}
                        />
                        <Text style={styles.textMultiLineTextCount}>
                            Mais {128-taskDescription.length} caracteres podem ser inseridos
                        </Text>
                    </InputContainer>
                </View>
                
                <View style={styles.formActions}>

                    <StandardButton
                        onPress={handleSaveButtom} 
                        text="Atualizar"
                    />
                </View>
            </ScrollView>
            
        </View>
    )
}

export default TaskEdit