import React, { ReactElement } from 'react'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { Text } from 'react-native'
import styles from './style'


interface StandardButtonProps extends RectButtonProperties {
    text?: string,
    icon?:  ReactElement,
    onPress?: any
}

const StandardButton: React.FC<StandardButtonProps> = ({text, onPress, icon}) => {
    return (
        <>
            <RectButton 
                style={styles.submitButton}
                onPress={onPress}
            >
                <Text style={styles.submitButtonText}>
                    {text}
                </Text>
                {icon}
            </RectButton>
        </>
    )
}

export default StandardButton