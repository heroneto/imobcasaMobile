import React, { ReactElement } from 'react'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { Text } from 'react-native'
import styles from './style'
import colors from '../../theme/colors'


interface StandardButtonProps extends RectButtonProperties {
    text?: string,
    icon?:  ReactElement,
    onPress?: any,
    color?: string
}

const StandardButton: React.FC<StandardButtonProps> = ({text, onPress, icon, color, ...rest}) => {

    return (
        <>
            <RectButton 
                style={{
                    backgroundColor: color ? color : colors.standardButton,
                    justifyContent: text !== undefined && icon !== undefined ? 'space-evenly' : 'center',
                    ...styles.submitButton,
                }}
                onPress={onPress}
                {...rest}
            >
                {icon}
                <Text style={styles.submitButtonText}>
                    {text}
                </Text>
            </RectButton>
        </>
    )
}

export default StandardButton