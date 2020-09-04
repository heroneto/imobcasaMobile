import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'



export default function TasksView(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Tasks view
            </Text>
        </View>
    )
}