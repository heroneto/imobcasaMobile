import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import colors from '@core/theme/colors'
import fonts from '@core/theme/fonts'

export interface LeadStatusStylesProps {
  [key: string]: {
    container: ViewStyle | TextStyle | ImageStyle,
    title: ViewStyle | TextStyle | ImageStyle,
    details: ViewStyle | TextStyle | ImageStyle
  }
}

const styles : LeadStatusStylesProps = {
  info: StyleSheet.create({
    container: {
      width: "100%",
      paddingVertical: 14,
      paddingHorizontal: 4,
      marginVertical: 5,
      borderRadius: 8,
      backgroundColor: "rgba(48,154,231, .2)",
      
    },
    title: {
        color: colors.textInfo,
        fontFamily: fonts.primary.bold,
        textAlign: 'center',
        fontSize: 18,
    },
    details: {
        color: colors.textInfo,
        fontFamily: fonts.primary.regular,
        textAlign: 'center',
        fontSize: 12
    }
  }),

  error: StyleSheet.create({
    container: {
      width: "90%",
      paddingVertical: 14,
      paddingHorizontal: 4,
      marginVertical: 5,
      borderRadius: 8,
      backgroundColor: "rgba(180,16,16, .2)",    
  },
    title: {
        color: colors.error,
        fontFamily: fonts.primary.bold,
        textAlign: 'center',
        fontSize: 18,
    },
    details: {
        color: colors.error,
        fontFamily: fonts.primary.regular,
        textAlign: 'center',
        fontSize: 12
    },
  }),

  success: StyleSheet.create({
    container: {
      width: "90%",
      paddingVertical: 14,
      paddingHorizontal: 4,     
      marginVertical: 5,
      borderRadius: 8,
      backgroundColor: "rgba(40,167,144, .2)",    
  },
    title: {
        color: colors.success,
        fontFamily: fonts.primary.bold,
        textAlign: 'center',
        fontSize: 18,
    },
    details: {
        color: colors.success,
        fontFamily: fonts.primary.regular,
        textAlign: 'center',
        fontSize: 12
    },
  }),

  neutral: StyleSheet.create({
    container: {
      width: "90%",
      paddingVertical: 14,
      paddingHorizontal: 4,     
      marginVertical: 5,
      borderRadius: 8,
      backgroundColor: "rgba(0,0,0, .2)",    
  },
    title: {
        color: "#FFF",
        fontFamily: fonts.primary.bold,
        textAlign: 'center',
        fontSize: 16,
    },
    details: {
        color: "#FFF",
        fontFamily: fonts.primary.regular,
        textAlign: 'center',
        fontSize: 12
    },
  }),
}

export default styles