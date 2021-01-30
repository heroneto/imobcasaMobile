import React, { ReactElement } from 'react'
import { View } from 'react-native'
import colors from '@theme/colors'
import styles from './styles'


interface ButtonContainerProps{
  position: "left" | "middle" | "right",
  children: ReactElement,
  backgroundColor?: string
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({position, children, backgroundColor}) => {
  return (
    <View style={{
      ...styles[`${position}`].container,
      backgroundColor: backgroundColor ? 
        backgroundColor : 
        styles[`${position}`].container.backgroundColor
    }}>
      {children}
    </View>
  )
}

export default ButtonContainer