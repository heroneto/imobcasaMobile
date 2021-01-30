import React, { useState } from 'react'
import { View, Text, Platform } from 'react-native'
import styles from './styles'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import StandardButton from '@components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import InputContainer from '@components/InputContainer';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import colors from '@theme/colors';
import moment from 'moment'
import PickerInput from '@components/PickerInput';

import * as data from '../../appData.json'
import { SafeAreaView } from 'react-native-safe-area-context';

interface TaskEditProps {
  route: any
}


interface inputPickerProps {
  key?: any,
  label?: any,
  section?: any
}

const TaskEdit: React.FC<TaskEditProps> = ({ route }) => {
  const { taskid } = route.params
  const { navigate } = useNavigation()
  const [user, setUser] = useState<inputPickerProps>({ key: 5, label: "Heron Hideki" })
  const [taskType, setTaskType] = useState<inputPickerProps>({ key: 5, label: "Cobrar cliente" })
  const [lead, setLead] = useState<inputPickerProps>({ key: 5, label: "Evaristo Ismaelly" })
  const [taskDescription, setTaskDescription] = useState('Cliente malucoooo')
  const [date, setDate] = useState(new Date())
  const [isShowingDatePicker, setIsShowingDatePicker] = useState(false)


  const handleTaskDate = (event: any, dateSelected: any) => {
    console.log("Alkterando data")
    const currentDate = dateSelected || date;
    setIsShowingDatePicker(Platform.OS === 'ios')
    setDate(currentDate)
  }

  function showDatePicker() {
    setIsShowingDatePicker(!isShowingDatePicker)
  }

  function handleSaveButtom() {
    navigate('Tarefa', {
      taskid
    })
  }

 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
      >
        <View style={styles.formContent}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputTitle}>
              Dados da Tarefa
                      </Text>
            <PickerInput
              data={data.users}
              borderRadius={{
                bottomLeft: 0,
                bottomRight: 0,
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
            <PickerInput
              value={taskType.label}
              borderRadius={{
                topLeft: 0,
                topRight: 0,
                bottomLeft: 0,
                bottomRight: 0
              }}
              data={data.taskType}
              label="Tipo de tarefa"
              placeholder="Selecione um tipo de tarefa"
              onChange={(option) => {
                setTaskType(option)
              }}
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
                  <TouchableOpacity
                    style={styles.dateButton}
                    onPress={showDatePicker}
                  >
                    <Ionicons name="md-calendar" size={24} color={colors.textInput} />
                  </TouchableOpacity>
                </View>
              </View>
            </InputContainer>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputTitle}>
              Lead
            </Text>
            <PickerInput
              data={data.leads}
              borderRadius={{
                bottomLeft: 8,
                bottomRight: 8,
                topLeft: 8,
                topRight: 8
              }}
              label="Lead"
              placeholder="Selecione o Lead"
              value={lead.label}
              onChange={(option) => {
                setLead(option)
              }}
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
                Mais {128 - taskDescription.length} caracteres podem ser inseridos
                          </Text>
            </InputContainer>
          </View>

          <View style={styles.formActions}>
            <StandardButton
              onPress={handleSaveButtom}
              text="Atualizar"
            />
          </View>
        </View>
      </ScrollView>
 

    </SafeAreaView>
  )
}

export default TaskEdit