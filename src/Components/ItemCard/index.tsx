import React, { ReactElement, useState } from 'react'
import {View, Text, Modal, TouchableOpacity} from 'react-native'
import styles from './styles'
import ModalView from '../ModalView';
import { ModalProps } from '../Shared'


interface IItemCardProps {
    topText: string,
    middleText: string,
    middleIcon?: ReactElement, 
    leftBottomText: string,
    rightBottomText?: {
        text: string,
        textColor: string,
    },
    modalOptions: ModalProps,
    customRightText?: {
        valueBackgroundColor: string,
        value: number,
        text: string
    }
}

const ItemCard: React.FC<IItemCardProps> = ({topText, middleText, middleIcon, leftBottomText, rightBottomText, customRightText, modalOptions}) => {
    const [ isShowingModal, setIsShowingModal ] = useState(false)

    function showModal(){
        console.log("teste")
        setIsShowingModal(true)
    }
    
    function closeModal(){
        setIsShowingModal(false)
    }

    
    return (
            <TouchableOpacity
                onPress={showModal}
                style={styles.cardButton}
            >
                <View style={styles.cardColor}/>
                <View style={styles.cardBody}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{topText}</Text>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.content}>
                        {middleIcon}
                        <Text style={styles.subtitle}>{middleText}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.subtitle}>{leftBottomText}</Text>
                        {rightBottomText ? 
                            <Text style={{
                                ...styles.subtitle,
                                color: rightBottomText.textColor
                            }}>{rightBottomText.text}</Text>
                        :
                        <View style={styles.customTextContainer}>
                            <View style={styles.cardCustomTextContainer}>
                                <Text style={styles.cardCustomText}>51</Text>
                            </View>
                            
                            <Text style={styles.customText}>Dias aguardando</Text>
                        </View>
                        }
                    </View>
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
                        title={modalOptions.title}
                        options={modalOptions.options}
                        closeModalFunc={closeModal}
                    />
                </Modal>
            </TouchableOpacity>
    )
}

export default ItemCard