import React, { ReactElement } from 'react'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

interface StandardButtonProps extends RectButtonProperties {
  text?: string,
  icon?: ReactElement,
  onPress?: any,
  color?: string,
  variant?: "normal" | "disabled"
}

const CustomButton = styled(RectButton)`
    justify-content: ${({ iconAndText }) => iconAndText ? 'space-evenly' : 'center'};
    align-items: center;
    display: flex;
    padding: 16px;
    width: 100%;
    height: 55px;
    border-radius: 10px;
    flex-direction: row;

    ${({ variant, theme }) => {
    switch (variant) {
      case 'normal':
        return `background-color: ${theme.colors.standardButton}`
      case 'disabled':
        return `background-color: ${theme.colors.cancelButton}`
      default:
        return `background-color: ${theme.colors.standardButton}`
    }
  }}
`

const ButtonLabel = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.secondary.bold};
  text-align: center;
`

const StandardButton: React.FC<StandardButtonProps> = ({ text, onPress, icon, color, variant, ...rest }) => {

  return (
    <CustomButton
      onPress={onPress}
      variant={variant}
      {...rest}
    >
      {icon}
      <ButtonLabel>
        {text}
      </ButtonLabel>
    </CustomButton>
  )
}

export default StandardButton