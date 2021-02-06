import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface ItenDetailsProps {
  title: string,
  itens: Array<{
    category: string,
    value: string
  }>
}

const ItemDetails : React.FC<ItenDetailsProps> = ({title, itens}) => {
  return (
        <View style={styles.contentGroup}>
          <View style={styles.contentHeader}>
            <Text style={styles.headerTitle}>
              {title}
            </Text>
            <View style={styles.headerLine} />
          </View>
          <View style={styles.content}>
            {itens.map((item, idx) => (
              <View key={idx} style={styles.contentItem}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            ))}            
          </View>
        </View>
  )
}

export default ItemDetails