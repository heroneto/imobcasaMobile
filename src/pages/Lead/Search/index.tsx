import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'

export default function SearchPage(){
    const { goBack } = useNavigation()
    

    return (
        <View style={styles.container}>
            <View style={styles.searchInputContainer}>
  
                <TouchableOpacity
                    style={styles.backButtonHeader}
                    onPress={goBack}
                >
                        <Ionicons name="ios-arrow-back" size={24} color="#000" />
                </TouchableOpacity>

                <View style={styles.inputTextContainer}>
                    <TextInput 
                        style={styles.inputText}
                        placeholder="Digite para encontrar o seu Lead"
                    />
                </View>


                <TouchableOpacity
                    style={styles.searchButton}
                >
                    <Ionicons name="md-search" size={24} color="black" />
                </TouchableOpacity>


            </View>
        </View>
    )
}