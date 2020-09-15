import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { RectButton, RawButtonProperties } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 


interface FormPageHeaderProps {
    backButtomAction: Function
}

const FormPageHeader : React.FC<FormPageHeaderProps> = ({backButtomAction}) => {

    return (
        <View style={styles.headerContainer}>
            <RectButton
                style={styles.backButtonHeader}
                onPress={() => backButtomAction()}
            >
                <Ionicons name="ios-arrow-back" size={24} color="#000" />
            </RectButton>
        </View>
    )
}

export default FormPageHeader