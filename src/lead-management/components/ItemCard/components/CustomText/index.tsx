import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface CustomTextProps {
   level: "info" | "error" | "success" | "neutral",
   value?: number,
   text?: string,
}

const CustomText: React.FC<CustomTextProps> = ({text, value, level}) => {
  return (
    <View style={styles[`${level}`].customTextContainer}>
    {value &&
        <View style={styles[`${level}`].cardCustomTextContainer}>
          <Text style={styles[`${level}`].cardCustomText}>{value}</Text>
        </View>
      }

      <Text style={styles[`${level}`].customText}>{text}</Text>
    </View>
  )
}

export default CustomText