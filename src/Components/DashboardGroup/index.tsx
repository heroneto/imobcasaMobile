import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'

interface DashboardItemProps {
    name: string,
    count: number,
    color: string,
    id: string,
    nestedRouteName?: string,
    pageToNavigate: string
}

interface DashboardGroupProps {
    title: string,
    items: Array<DashboardItemProps>
}

const DashboardGroup: React.FC<DashboardGroupProps> = ({modal, items, title}) => {
    const { navigate } = useNavigation()
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
                </View>
                <View style={styles.content}>
                    {items.map(item => {
                        return (
                            
                                <TouchableOpacity
                                    style={styles.itemButton}
                                    key={item.id}
                                    onPress={() => navigate(item.pageToNavigate, {inicialRoute: item.nestedRouteName})}
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
            </View>
        </>
    )
}

export default DashboardGroup