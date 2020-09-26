import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import HeaderActions from '../../Components/HeaderActions'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import TopPicker from '../../Components/TopPicker'
import MiddlePicker from '../../Components/MiddlePicker'
import InputContainer from '../../Components/InputContainer'
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../../theme'
import moment from 'moment'
import StandardButton from '../../Components/StandardButton'
import SinglePicker from '../../Components/SinglePicker'
import { stringify } from 'uuid'

const { Navigator, Screen } = createStackNavigator()


export default function NewTaskView(){
    return (
        <Navigator 
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
            initialRouteName="newtaskstepone"
        >
            <Screen name="newtaskstepone" component={NewTaskStepOne} />
            <Screen name="newtasksteptwo" component={NewTaskStepTwo} />
            <Screen name="newtaskstepthree" component={NewTaskStepThree} />
        </Navigator>
    )
}



const NewTaskStepOne = () => {
    const { navigate } = useNavigation()
    const [ taskowner, setTaskOwner ] = useState(-1)
    const [ taskType, setTaskType ] = useState('')
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

    function handleNavigateToHomePage(){
        navigate('home')
    }

    function handleNavigateToNextPage(){
        navigate('newtasksteptwo')
    }

    function handleTaskOwner(value: number){
        if(value !== -1){
            console.log(value)
            setTaskOwner(value)
        } 
    }
    
    function handleTaskType(value: string){
        if(value !== ''){
            setTaskType(value)
        }
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
                        Insira as informações básicas sobre a tarefa
                    </Text>
                </View>
                <View style={styles.inputGroup}>
                    <TopPicker 
                        label="Responsável"
                        defaultValue={taskowner}
                        selectedValue={taskowner}
                        itens={[
                             {
                                id: "1",
                                label: "Heron Hideki de Queiroz Eto",
                                value: 1
                             },
                             {
                                 id: "2",
                                 label: "Vagner Zanella",
                                 value: 2
                             },
                             {
                                 id: "3",
                                 label: "Nadia",
                                 value: 3
                             },
                        ]}
                        onValueChange={(value, index) => handleTaskOwner(index)}
                    />
                    <MiddlePicker
                        label="Tipo de tarefa"
                        defaultValue={taskType}
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

interface NewTaskSetpTwoProps{
    userid: string,
    tasktypeid: string,
    startdate: Date
}

const NewTaskStepTwo: React.FC<NewTaskSetpTwoProps> = ({userid, tasktypeid, startdate}) => {
    const { goBack, navigate } = useNavigation()
    const [ leadid, setLeadId ] = useState('')

    function handleNavigateToNextPage(){
        navigate('newtaskstepthree', {
            userid,
            tasktypeid,
            startdate,
            leadid
        })
    }

    function handleTaskLead(value: string){
        setLeadId(value)
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
                        Insira as informações básicas sobre a tarefa
                    </Text>
                </View>
                <View style={styles.inputGroup}>
                    <SinglePicker
                        label="Selecione o Lead"
                        defaultValue={leadid}
                        selectedValue={leadid}
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

interface NewTaskStepThreeProps{
    userid: string,
    leadid: string,
    tasktypeid: string,
    startdate: Date,
}

const NewTaskStepThree: React.FC<NewTaskStepThreeProps> = ({userid, leadid, tasktypeid, startdate}) => {
    const { goBack, navigate } = useNavigation()
    const [ description, setDescription ] = useState('')

    function handleSaveButton(){
        const taskid = '123'
        navigate('taskview', {
            taskid
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
                        Insira as informações básicas sobre a tarefa
                    </Text>
                </View>
                <View style={styles.inputGroup}>
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
                            value={description}
                            onChangeText={text => setDescription(text)}
                        />
                        <Text style={styles.textMultiLineTextCount}>
                            Mais {128-description.length} caracteres podem ser inseridos
                        </Text>
                    </InputContainer>
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