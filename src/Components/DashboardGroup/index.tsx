import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import styles from './styles';
import ModalView from '../ModalView';
import {ModalProps} from '../Shared'

interface DashboardItemProps {
    name: string,
    count: number,
    color: string,
    id: string,
}

interface DashboardGroupProps {
    title: string,
    items: Array<DashboardItemProps>
    modal: ModalProps
}

const DashboardGroup: React.FC<DashboardGroupProps> = ({modal, items, title}) => {
    const [ isShowingModal, setIsShowingModal ] = useState(false)

    function showModal(){
        setIsShowingModal(true)
    }
    
    function closeModal(){
        setIsShowingModal(false)
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                    <View style={styles.lineHeader}/>
                    <TouchableOpacity
                            style={styles.options}
                            onPress={showModal}
                        >
                            <SimpleLineIcons name="options" size={24} color="black" />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.content}>
                    {items.map(item => {
                        return (
                            
                                <TouchableOpacity
                                    style={styles.itemButton}
                                    key={item.id}
                                >
                                    <View style={{
                                        ...styles.itemContainerCountText,
                                        backgroundColor: item.color
                                    }}>
                                        <Text style={styles.itemCountText}>
                                            {item.count}
                                        </Text>
                                    </View>
                                    <Text style={styles.itemNameText}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            
                        )
                    })}
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
        </>
    )
}

export default DashboardGroup