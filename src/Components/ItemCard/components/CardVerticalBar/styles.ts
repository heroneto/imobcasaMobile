import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import colors from '../../../../theme/colors'

interface VerticalBarStylesProps {
  [ key: string ]: {
    bar: ViewStyle | TextStyle | ImageStyle
  }
}

const styles: VerticalBarStylesProps = {
  error: StyleSheet.create({
    bar: {
      width: 8,
      backgroundColor: colors.error,
    },
  }),
  success: StyleSheet.create({
    bar: {
      width: 8,
      backgroundColor: colors.success,
    },
  }),
  info: StyleSheet.create({
    bar: {
      width: 8,
      backgroundColor: colors.textInfo,
    },
  }),
  neutral: StyleSheet.create({
    bar: {
      width: 8,
      backgroundColor: colors.imobcasaPrimary,
    },
  })
}

export default styles