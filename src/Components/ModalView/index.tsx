import React, { useState, useEffect } from 'react'
import { View, Text, TouchableHighlight, TouchableWithoutFeedback, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { ModalProps } from '../Shared'


interface ModalViewProps extends ModalProps{
    closeModalFunc: Function
}




const ModalView : React.FC<ModalViewProps> = ({title, options, closeModalFunc}) => {
    const {navigate} = useNavigation()

    function handleOptionClick(pageName: string, isPageExternalLink: boolean, navigationParameters? : object){
        closeModalFunc()
        isPageExternalLink ? Linking.openURL(pageName) : navigate(pageName)
        
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => closeModalFunc()}

        >
            <View style={styles.modalContainer}>
                <View style={styles.modalOptions}>
                        <View style={styles.modalTitleContainer}>
                            <Text style={styles.modalTitleText}>
                                {title}
                            </Text>
                        </View>
                        {options.map(option => {
                            return (
                                
                                    <TouchableHighlight
                                        key={option.id}
                                        onPressIn={() => 
                                            handleOptionClick(option.pageToNavigate, option.isPageExternalLink)
                                        }
                                        style={styles.modalButton}
                                    >
                                        <View style={styles.modalButtonView}>
                                            <Text style={styles.modalOptionText}>{option.name}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )
                            })
                        }
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ModalView