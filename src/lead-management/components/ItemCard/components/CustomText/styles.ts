import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import colors from '@core/theme/colors'
import fonts from '@core/theme/fonts'

interface CustomTextStyleProps {
  [key:string]:{
    customTextContainer: ViewStyle | TextStyle | ImageStyle,
    cardCustomTextContainer: ViewStyle | TextStyle | ImageStyle,
    cardCustomText: ViewStyle | TextStyle | ImageStyle,
    customText: ViewStyle | TextStyle | ImageStyle,
  }
}

const styles: CustomTextStyleProps = {
  neutral: StyleSheet.create({
    customTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    cardCustomTextContainer: {
        backgroundColor: colors.textInput,
        borderRadius: 100,
        padding: 4,       
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.primary.regular,        
    },
    cardCustomText: {
        color: '#FFF',
        fontSize: 14,
    },
    customText: {
        marginLeft: 5,
        fontFamily: fonts.primary.regular,
        fontSize: 12,
        color: colors.textInput,        
    }
  }),
  info: StyleSheet.create({
    customTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    cardCustomTextContainer: {
        backgroundColor: colors.textInfo,
        borderRadius: 100,
        padding: 4,       
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.primary.regular,        
    },
    cardCustomText: {
        color: '#FFF',
        fontSize: 14,
    },
    customText: {
        marginLeft: 5,
        fontFamily: fonts.primary.regular,
        fontSize: 12,
        color: colors.textInfo   
    }
  }),
  error: StyleSheet.create({
    customTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    cardCustomTextContainer: {
        backgroundColor: colors.error,
        borderRadius: 100,
        padding: 4,       
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.primary.regular,        
    },
    cardCustomText: {
        color: '#FFF',
        fontSize: 14,
    },
    customText: {
      marginLeft: 5,
      fontFamily: fonts.primary.regular,
      fontSize: 12,
      color: colors.error,   
    }
  }),
  success: StyleSheet.create({
    customTextContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    cardCustomTextContainer: {
        backgroundColor: colors.success,
        borderRadius: 100,
        padding: 4,       
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.primary.regular,        
    },
    cardCustomText: {
      marginLeft: 5,
      fontFamily: fonts.primary.regular,
      fontSize: 12,
      color: colors.success,   
    },
    customText: {
      marginLeft: 5,
      fontFamily: fonts.primary.regular,
      fontSize: 12,
      color: colors.success,  
    }
  }),
}

export default styles