import React from 'react'
import styles from './styles'
import { View, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 


interface IHeaderActionsProps {
    imageurl: string,
    settingsIconColor: string,

}

const HeaderActions: React.FC<IHeaderActionsProps> = ({imageurl, settingsIconColor}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.myselfContainer}>
                <Image  style={styles.myselfImage} source={{uri: imageurl}} />
            </View>
            <View style={styles.headerOptionsContainer}>
                <RectButton
                    style={styles.settingsButton}
                >
                    <Ionicons name="md-settings" size={24} color={settingsIconColor} />
                </RectButton>
                <RectButton 
                    style={styles.searchButton}
                >
                    <Ionicons name="md-search" size={24} color="black" />
                </RectButton>
            </View>
        </View>
    )
}

export default HeaderActions