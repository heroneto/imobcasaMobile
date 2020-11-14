import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import colors from '../../theme/colors'


export interface ButtonContainerStylesProps {
  [key: string]: {
    container: ViewStyle | TextStyle | ImageStyle
  }
}

const styles : ButtonContainerStylesProps = {
  left: StyleSheet.create({
    container: {
      backgroundColor: colors.neutralButton,
      borderColor: colors.background,
      borderWidth: 1,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    }
  }),
  middle: StyleSheet.create({
    container: {
      backgroundColor: colors.neutralButton,
      borderColor: colors.background,
      borderWidth: 1,   
      borderRadius: 0,   
    }, 
  }),
  right: StyleSheet.create({
    container: {     
      backgroundColor: colors.neutralButton, 
      borderColor: colors.background,
      borderWidth: 1,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    }, 
  })
}

export default styles