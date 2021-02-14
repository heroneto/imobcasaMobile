import React, { ReactElement } from 'react'
import styled from 'styled-components/native'
import { TouchableHighlight, TouchableHighlightProps, Text } from 'react-native'

interface StandardButtonProps extends TouchableHighlightProps {
  text?: string,
  icon?: ReactElement,
  onPress(): void,
  color?: string,
  variant?: "normal" | "disabled"
}

interface ITouchableHighlightStyled extends TouchableHighlightProps{
  variant: string | undefined
}

const CustomButton = styled(TouchableHighlight)<ITouchableHighlightStyled>`
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
const ButtonContent = styled.View<{iconAndText: boolean}>`
  width: 100%;
  display: flex;
  justify-content: ${({iconAndText}) => iconAndText ? "space-between" : "center"};
  flex-direction: ${({iconAndText}) => iconAndText ? "row" : "column"};
`

const ButtonText = styled.Text`
  text-align: center;
  color: #FFF;
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.secondary.bold};
`

const StandardButton: React.FC<StandardButtonProps> = ({ text, icon, onPress, color, variant, children, ...rest }) => {

  return (
    <CustomButton
      onPress={onPress}
      variant={variant}
      {...rest}
    >
      <ButtonContent
        iconAndText={icon && text ? true : false}
      >
        <ButtonText>
          {text}
        </ButtonText>
        {icon && icon}
      </ButtonContent>
    </CustomButton>
  )
}

export default StandardButton