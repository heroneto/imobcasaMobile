import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface ContainerRadiusProps {
    topLeft: boolean,
    topRight: boolean,
    bottomLeft: boolean
    bottomRight: boolean
}

interface InputContainerProps {
     inputRadiusStyle: ContainerRadiusProps,
     label: string
}

const InputContainer : React.FC<InputContainerProps> = ({children, inputRadiusStyle, label}) => {
    return (
        <View style={{ 
            ...styles.container, 
            borderBottomLeftRadius: inputRadiusStyle.bottomLeft ? 10 : 0,
            borderBottomRightRadius: inputRadiusStyle.bottomRight ? 10 : 0,
            borderTopLeftRadius: inputRadiusStyle.topLeft ? 10 : 0,
            borderTopRightRadius: inputRadiusStyle.topRight ? 10 : 0
        }}>
            <View>
                <Text style={styles.label}>
                    {label}
                </Text>
            </View>
            <View style={styles.inputRow}>
                {children}
            </View>
            
        </View>
    )
}

export default InputContainer