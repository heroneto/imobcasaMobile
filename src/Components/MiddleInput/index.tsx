import React, { ReactElement } from 'react'
import { View, Text, TextInput, TextInputProperties } from 'react-native'
import styles from './style'


interface MiddleInputProps extends TextInputProperties {
    placeholder: string,
    label: string,
    Icon?: ReactElement
}

const MiddleInput: React.FC<MiddleInputProps> = ({placeholder, Icon, label, ...rest}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.inputLabel}>
                {label}
            </Text>
            <View style={styles.inputContianer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    {...rest}
                />
                {Icon}
            </View>
            
        </View>
    )
}

export default MiddleInput