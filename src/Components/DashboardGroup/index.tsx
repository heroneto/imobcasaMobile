import React, { useState, useEffect } from 'react'
import { View, Text, Modal, Alert } from 'react-native'
import { RectButton, TouchableHighlight } from 'react-native-gesture-handler'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import styles from './styles';


interface DashboardItemProps {
    name: string,
    count: number,
    color: string,
    id: string,
}

interface DashboardGroupProps {
    title: string,
    items: Array<DashboardItemProps>
}

const DashboardGroup: React.FC<DashboardGroupProps> = ({items, title}) => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        {title}
                    </Text>
                    <View style={styles.lineHeader}/>
                    <View style={styles.contextMenu}>
                        <RectButton
                            style={styles.options}
                        >
                            <SimpleLineIcons name="options" size={24} color="black" />
                        </RectButton>
                    </View>
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
            </View>

        </>
    )
}

export default DashboardGroup