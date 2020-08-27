import React, { ReactElement } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './style'


interface TopInputProps {
    placeholder: string,
    label: string,
    icon?: ReactElement
}

const TopInput: React.FC<TopInputProps> = ({placeholder, icon, label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.inputLabel}>
                {label}
            </Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
            />
        </View>
    )
}

export default TopInput