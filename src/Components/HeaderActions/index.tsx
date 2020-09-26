import React from 'react'
import styles from './styles'
import { View, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'

interface IHeaderActionsProps {
    imageurl: string,
    settingsIconColor: string,

}

const HeaderActions: React.FC<IHeaderActionsProps> = ({imageurl, settingsIconColor}) => {
    const { navigate }= useNavigation()

    function handleNavigateToSearchPage(){
        navigate('search')
    }

    function handleNavigateToSettingsPage(){
        navigate('appconfig')
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.myselfContainer}>
                <Image  style={styles.myselfImage} source={{uri: imageurl}} />
            </View>
            <View style={styles.headerOptionsContainer}>
                <RectButton
                    style={styles.settingsButton}
                    onPress={handleNavigateToSettingsPage}
                >
                    <Ionicons name="md-settings" size={24} color={settingsIconColor} />
                </RectButton>
                <RectButton 
                    style={styles.searchButton}
                    onPress={handleNavigateToSearchPage}
                >
                    <Ionicons name="md-search" size={24} color="black" />
                </RectButton>
            </View>
        </View>
    )
}

export default HeaderActions