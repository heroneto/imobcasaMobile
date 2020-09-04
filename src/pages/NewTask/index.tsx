import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'



export default function NewTaskView(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                New Task View
            </Text>
        </View>
    )
}