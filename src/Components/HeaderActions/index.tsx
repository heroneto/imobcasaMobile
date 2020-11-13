import React, { ReactComponentElement, useState } from 'react'
import styles from './styles'
import { View, TouchableOpacity, ViewComponent } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'


interface IHeaderActionsProps{
    backButtonColor: string,
    backButtonFunc: Function,
    headerColor: string
}

const HeaderActions: React.FC<IHeaderActionsProps> = ({backButtonColor, backButtonFunc, children, headerColor}) => {
    const { navigate, goBack }= useNavigation()
    const [ isShowingModal, setIsShowingModal ] = useState(false)

    function handleNavigateToSearchPage(){
        navigate('search')
    }

    return (
            <View style={{
                backgroundColor: headerColor,
                ...styles.headerContainer
            }}>
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => backButtonFunc()}
                    >
                        <Ionicons name="ios-arrow-back" size={24} color={backButtonColor} />                    
                    </TouchableOpacity>
                    {children}
                </View>
                <TouchableOpacity 
                        style={styles.searchButton}
                        onPress={handleNavigateToSearchPage}
                    >
                        <Ionicons name="md-search" size={24} color="black" />
                </TouchableOpacity>
            </View>
    )
}

export default HeaderActions