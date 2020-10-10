import React, { useState, ReactElement } from 'react'
import { View, Text, TextInput, Image, Button, TextInputProperties, TouchableOpacity } from 'react-native'
import styles from './style'
import { Octicons } from '@expo/vector-icons'


interface BottomInputProps extends TextInputProperties{
    placeholder: string,
    label: string,
    actionIconName?: string,
    Icon?: any,
    secureEntry: Boolean,
}

const BottomInput: React.FC<BottomInputProps> = ({placeholder, actionIconName, label, Icon, secureEntry, ...rest}) => {
    const [ isActionIconActive, setIsActionIconActive ] = useState(false)
    

    function togglePasswordView(){
        setIsActionIconActive(!isActionIconActive)
    }

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>
                    {label}
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={secureEntry ? !isActionIconActive : false}
                    {...rest}
                />
                {actionIconName? 
                    <TouchableOpacity 
                        style={styles.inputAction}
                        onPress={togglePasswordView}
                    >
                        <Octicons 
                            name={actionIconName}
                            size={24} 
                            color={isActionIconActive ? "#309AE7" : "#F0F0F7"}
                        />
                    </TouchableOpacity>
                : 
                    true
                }
                {Icon}

            </View>
        </View>
    )
}

export default BottomInput