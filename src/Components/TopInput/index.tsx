import React, { ReactElement } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './style'


interface TopInputProps {
    placeholder: string,
    label: string,
    Icon?: ReactElement
}

const TopInput: React.FC<TopInputProps> = ({placeholder, Icon, label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.inputLabel}>
                {label}
            </Text>
            <View style={styles.inputContianer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                />
                {Icon}
            </View>
            
        </View>
    )
}

export default TopInput