import React from 'react'
import { View } from 'react-native'
import styles from './styles'

interface CardVerticalBarProps {
  level: 'error' | 'success' | 'info' | 'neutral'
}

const CardVerticalBar : React.FC<CardVerticalBarProps> = ({level}) => {
  return (
    <View style={styles[`${level}`].bar} />
  )
}

export default CardVerticalBar