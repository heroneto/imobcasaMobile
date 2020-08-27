import React from 'react'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { Text } from 'react-native'
import styles from './style'


interface StandardButtonProps extends RectButtonProperties {
    text: string
}

const StandardButton: React.FC<StandardButtonProps> = ({text, onPress}) => {
    return (
        <>
            <RectButton 
                style={styles.submitButton}
                onPress={onPress}
            >
                <Text style={styles.submitButtonText}>
                    {text}
                </Text>
            </RectButton>
        </>
    )
}

export default StandardButton