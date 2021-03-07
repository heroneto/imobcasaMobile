import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import styled from 'styled-components/native'

interface InputContainerProps {
  label: string,
  variant?: "top" | "middle" | "bottom" | "unique",
  enabled?: boolean
}

interface ContainerStyleProps {
  variant?: "top" | "middle" | "bottom" | "unique",
  enabled?: boolean
}

const Container = styled.View<ContainerStyleProps>`
    padding: 20px;
    border-width: .5px;
    border-color: #E6E6E6;
    background-color: ${({ enabled }) => enabled ? "#FFFFFF" : "#F1F1F1"};


    ${({ variant }) => {
    switch (variant) {
      case "top":
        return `
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        `
      case "bottom":
        return `
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        `
      case "middle":
        return ""
      default:
        return `
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        `
    }
  }}
`

const InputContainer: React.FC<InputContainerProps> = ({ children, enabled = true, label, variant }) => {
  return (
    <Container
      variant={variant}
      enabled={enabled}
    >
      <View>
        <Text style={styles.label}>
          {label}
        </Text>
      </View>
      <View style={styles.inputRow}>
        {children}
      </View>

    </Container>
  )
}

export default InputContainer