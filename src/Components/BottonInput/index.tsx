import React, { useState, ReactElement } from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native'
import styles from './style'
import { RectButton } from 'react-native-gesture-handler'
import { Octicons } from '@expo/vector-icons'; 


interface BottomInputProps{
    placeholder: string,
    label: string,
    actionIconName?: string,
    icon?: any,
    secureEntry: Boolean
}

const BottomInput: React.FC<BottomInputProps> = ({placeholder, actionIconName, label, icon, secureEntry}) => {
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
                />
                {actionIconName? 
                    <RectButton 
                        style={styles.inputAction}
                        onPress={togglePasswordView}
                    >
                        <Octicons 
                            name={actionIconName}
                            size={24} 
                            color={isActionIconActive ? "#309AE7" : "#F0F0F7"}
                        />
                    </RectButton>
                : 
                    true
                }

            </View>
        </View>
    )
}

export default BottomInput