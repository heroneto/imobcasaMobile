import styled from 'styled-components/native'
import { ThemeProps } from "@core/theme/theme"

export const Container = styled.View`
  width: 100%;
  background-color: #FFF;
  display: flex;
  flex-direction: row;
  height: 70px;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`
interface ThemeStyleProps {
  theme: ThemeProps
}
interface BarStyleProps extends ThemeStyleProps {
  variant?: "normal" | "error" | "success" | "info",
}

export const Bar = styled.View<BarStyleProps>`
  width: 10px;
  height: 100%;
  margin-right: 10px;
  ${({ variant, theme }) => {
    switch (variant) {
      case "error":
        return `background-color: ${theme.colors.error}`
      case "normal":
        return `background-color: ${theme.colors.textInput}`
      case "success":
        return `background-color: ${theme.colors.success}`
      case "info":
        return `background-color: ${theme.colors.textInfo}`
      default:
        return `background-color: ${theme.colors.textInput}`
    }
  }}
`

export const UserTextImageInitials = styled.View`
  background-color: #C4C4C4;
  width: 55px;
  height: 55px;
  border-radius: 55px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

export const UserInitialsText = styled.Text<ThemeStyleProps>`
  color: #FFF;
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 24px;
`

export const UserTitle = styled.Text<ThemeStyleProps>`
  color: #000;
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
`

export const UserInfo = styled.Text<ThemeStyleProps>`
  color: #000;
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 10px;
`

export const IconContainer = styled.View`
  width: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`