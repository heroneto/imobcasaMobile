import React, { ReactElement, useState } from 'react'
import { View, Text, TextInput, TextInputProperties } from 'react-native'
import styles from './style'
import { RectButton } from 'react-native-gesture-handler'
import { Octicons } from '@expo/vector-icons'

interface TopInputProps extends TextInputProperties {
    placeholder: string,
    label: string,
    actionIconName?: string,
    Icon?: any,
    secureEntry: Boolean,
}

const TopInput: React.FC<TopInputProps> = ({placeholder, actionIconName, label, Icon, secureEntry, ...rest}) => {
    const [ isActionIconActive, setIsActionIconActive ] = useState(false)
    

    function togglePasswordView(){
        setIsActionIconActive(!isActionIconActive)
    }    
    
    return (
        <View style={styles.container}>
            <Text style={styles.inputLabel}>
                {label}
            </Text>
            <View style={styles.inputContianer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={secureEntry ? !isActionIconActive : false}
                    {...rest}
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
                {Icon}
            </View>
            
        </View>
    )
}

export default TopInput