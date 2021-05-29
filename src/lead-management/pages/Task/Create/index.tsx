import React, { useCallback, useState } from 'react'
import { View, Text, NativeSyntheticEvent, NativeScrollEvent, Platform } from 'react-native'
import styles from './styles'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import FormPageHeader from '@lead-management/components/HeaderFormContainer';
import StandardButton from '@lead-management/components/StandardButton';
import { useNavigation } from '@react-navigation/native'
import InputContainer from '@lead-management/components/InputContainer';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import colors from '@core/theme/colors';
import moment from 'moment'
import PickerInput from '@lead-management/components/PickerInput';

import * as data from '../../appData.json'
import { useDispatch, useSelector } from 'react-redux';

import * as taskTypesSelectors from '@core/store/ducks/taskTypes/selectors'
import * as tasksSelectors from '@core/store/ducks/tasks/selectors'
import * as usersSelectors from '@core/store/ducks/users/selectors'
import * as taskActions from "@core/store/ducks/tasks/actions"
import ModalFeedback from '@lead-management/components/ModalFeedback';
import LoadingBanner from '@lead-management/components/LoadingBanner';

interface inputPickerProps {
  key?: any,
  label?: any,
  section?: any,
  id?: string
}

interface TaskAddProps {
  leadId: string
}

const TaskAdd: React.FC<TaskAddProps> = ({ leadId }) => {
  const dispatch = useDispatch()
  const { error, response, loading, data } = useSelector(tasksSelectors.taskState)
  const taskTypesOptions = useSelector(taskTypesSelectors.selectTaskTypesOptions)
  const usersOptions = useSelector(usersSelectors.userOptionsSelector)
  const { navigate, goBack } = useNavigation()
  const [userSelected, setUserSelected] = useState<inputPickerProps>({})
  const [taskTypeSelected, setTaskTypeSelected] = useState<inputPickerProps>({})
  const [lead, setLead] = useState<inputPickerProps>({})
  const [taskDescription, setTaskDescription] = useState('')
  const [date, setDate] = useState(new Date())
  const [isShowingDatePicker, setIsShowingDatePicker] = useState(false)
  const [titleAlpha, setTitleAlpha] = useState(100)

  const [showModal, setShowModal] = useState<boolean>(false)


  const handleTaskDate = (event: any, dateSelected: any) => {
    const currentDate = dateSelected || date;
    setIsShowingDatePicker(Platform.OS === 'ios')
    setDate(currentDate)
  }

  function showDatePicker() {
    setIsShowingDatePicker(!isShowingDatePicker)
  }

  function handleSaveButtom() {
    if (taskTypeSelected?.id && userSelected?.id) {
      const data = {
        title: "",
        description: taskDescription,
        userid: userSelected.id,
        leadid: leadId,
        active: true,
        startdate: date,
        tasktypeid: taskTypeSelected.id,
      }

      dispatch(taskActions.add(data))
      setShowModal(true)

    }



  }

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
    if (!error) {      
      const taskTypeId = data?.id
      dispatch(taskActions.reset())
      navigate('Tarefa', {
        taskId: taskTypeId
      })
    }else {
      dispatch(taskActions.reset())
    }
  }, [data, error])

  function handleContentOffsetChanges(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const titleColorTransparency = 1 - Number((event.nativeEvent.contentOffset.y * 1) / 100)
    setTitleAlpha(titleColorTransparency < 0.1 ? 0 : titleColorTransparency)
  }


  return (
    <ScrollView style={styles.container} onScroll={(event) => handleContentOffsetChanges(event)}>

      <View style={styles.title}>
        <Text style={{
          ...styles.titleText,
          color: `rgba(0,0,0,${titleAlpha})`
        }}>
          Criação de Tarefa
                </Text>
      </View>
      <View style={styles.formContent}>
        <View
          style={styles.inputGroup}
        >
          <Text style={styles.inputTitle}>
            Dados da Tarefa
                    </Text>
          <PickerInput
            data={usersOptions}
            borderRadius={{
              bottomLeft: 0,
              bottomRight: 0,
              topLeft: 8,
              topRight: 8
            }}
            label="Usuário"
            placeholder="Selecione o usuário"
            value={userSelected.label}
            onChange={(option) => {
              setUserSelected(option)
            }}
          />
          <PickerInput
            value={taskTypeSelected.label}
            borderRadius={{
              topLeft: 0,
              topRight: 0,
              bottomLeft: 0,
              bottomRight: 0
            }}
            data={taskTypesOptions}
            label="Tipo de tarefa"
            placeholder="Selecione um tipo de tarefa"
            onChange={(option) => {
              setTaskTypeSelected(option)
            }}
          />
          <InputContainer
            label="Data planejada"
            variant="bottom"
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
            Detalhes
                    </Text>
          <InputContainer
            label="Detalhes"
            variant="unique"
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
            text="Cadastrar"
          />
        </View>
      </View>

      <ModalFeedback
        modalVisible={showModal}
        text={response}
        closeModalFunc={handleCloseModal}
      />

      <LoadingBanner
        visible={loading}
        text="Carregando"
      />

    </ScrollView>
  )
}

export default TaskAdd