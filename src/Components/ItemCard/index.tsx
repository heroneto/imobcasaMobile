import React, { useState } from 'react'
import {View, Text, Modal, TouchableOpacity} from 'react-native'
import styles from './styles'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { RectButton } from 'react-native-gesture-handler';
import ModalView from '../ModalView';
import { ModalProps } from '../Shared'

interface IItemCardProps {
    title: string,
    subtitle: string,
    modal: ModalProps
}

const ItemCard: React.FC<IItemCardProps> = ({title, subtitle, modal}) => {
    const [ isShowingModal, setIsShowingModal ] = useState(false)

    function showModal(){
        console.log("teste")
        setIsShowingModal(true)
    }
    
    function closeModal(){
        setIsShowingModal(false)
    }

    
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
                <TouchableOpacity
                    style={styles.itemButton}
                    onPress={showModal}
                >
                    <SimpleLineIcons name="options-vertical" size={24} color="rgba(0,0,0,.8)" />
                </TouchableOpacity>
                
            </View>
                <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isShowingModal}
                    hardwareAccelerated={true}
                    onRequestClose={() => {
                        setIsShowingModal(false)
                    }}
                >
                    <ModalView 
                        title={modal.title}
                        options={modal.options}
                        closeModalFunc={closeModal}
                    />
                </Modal>
        </View>
    )
}

export default ItemCard