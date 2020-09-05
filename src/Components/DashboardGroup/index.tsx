import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Modal, TouchableHighlight, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


interface DashboardItemProps {
    name: string,
    count: number,
    color: string,
    id: string,
}

interface ModalOptionsProps {
    name: string,
    pageToNavigate: string
    id: string
}

interface DashboardGroupProps {
    title: string,
    items: Array<DashboardItemProps>
    modal: {
        title: string,
        options: Array<ModalOptionsProps>
    }
}

const DashboardGroup: React.FC<DashboardGroupProps> = ({modal, items, title}) => {
    const [ isShowingModal, setIsShowingModal ] = useState(false)
    const {navigate} = useNavigation()

    function showModal(){
        setIsShowingModal(true)
    }
    
    function handleNavigateTo(pageName: string){
        setIsShowingModal(false)
        navigate(pageName)
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                    <View style={styles.lineHeader}/>
                    <RectButton
                            style={styles.options}
                            onPress={showModal}
                        >
                            <SimpleLineIcons name="options" size={24} color="black" />
                    </RectButton>
                    
                </View>
                <View style={styles.content}>
                    {items.map(item => {
                        return (
                            
                                <RectButton
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
                                </RectButton>
                            
                        )
                    })}
                </View>
                        <Modal
                            transparent={true}
                            animationType='fade'
                            visible={isShowingModal}
                            hardwareAccelerated={true}

                        >
                            <View style={styles.modalContainer}>
                                <View
                                    style={styles.modalOptions}
                                >
                                    <View style={styles.modalTitleContainer}>
                                        <Text style={styles.modalTitleText}>
                                            {modal.title}
                                        </Text>
                                    </View>
                                    {modal.options.map(option => {
                                        return (
                                            
                                                <TouchableHighlight
                                                    key={option.id}
                                                    onPressIn={() => 
                                                        handleNavigateTo(option.pageToNavigate)
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
                        </Modal>

            </View>
        </>
    )
}

export default DashboardGroup