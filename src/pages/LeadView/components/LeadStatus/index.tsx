import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


interface LeadStatusProps {
  title: string,
  details: string,
  statusLevel: "info" | "error" | "success" | "neutral",
  taskId: string,
  pressable?: boolean
}

const LeadStatus : React.FC<LeadStatusProps> = ({details, title, statusLevel, taskId, pressable = false}) => {
  const { navigate } = useNavigation()

  return (
    <View style={styles[`${statusLevel}`].container}>
        <TouchableOpacity disabled={!pressable} onPress={() => navigate("taskview" ,{
          taskId: taskId
        })}>
          <Text style={styles[`${statusLevel}`].title}>{title}</Text>
          <Text style={styles[`${statusLevel}`].details}>{details}</Text>  
        </TouchableOpacity>        
    </View>
  )
}

export default LeadStatus