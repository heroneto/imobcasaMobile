import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler';


interface IItemCardProps {
    title: string,
    subtitle: string
}

const ItemCard: React.FC<IItemCardProps> = ({title, subtitle}) => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.itemContentContainer}>
                <View>
                    <View style={styles.itemColorIndicator}></View>
                </View>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
                
            </View>
            <View style={styles.itemButtonContainer}>
                <RectButton
                    style={styles.itemButton}
                >
                    <SimpleLineIcons name="options-vertical" size={24} color="rgba(0,0,0,.8)" />
                </RectButton>
                
            </View>

        </View>
    )
}

export default ItemCard