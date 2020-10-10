import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'; 


interface FormPageHeaderProps {
    backButtomAction: Function
}

const FormPageHeader : React.FC<FormPageHeaderProps> = ({backButtomAction}) => {

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                style={styles.backButtonHeader}
                onPress={() => backButtomAction()}
            >
                <Ionicons name="ios-arrow-back" size={24} color="#000" />
            </TouchableOpacity>
        </View>
    )
}

export default FormPageHeader