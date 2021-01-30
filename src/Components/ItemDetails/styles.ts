import { StyleSheet } from 'react-native'
import colors from '@theme/colors'
import fonts from '@theme/fonts'

const styles = StyleSheet.create({
  contentGroup: {        
    width: '100%',
    justifyContent:'center',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  contentHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
  },
  headerTitle: {
      fontFamily: fonts.primary.bold,
      fontSize: 18,
  },
  headerLine: {
      flex: .9,
      height: 1.2,
      marginHorizontal: 5,
      backgroundColor: '#000'
  },
  content: {
      paddingHorizontal: 20,
  },
  contentItem: {
      padding: 5,
  },
  category: {
    fontFamily: fonts.primary.regular,
    fontSize: 12
  },
  value: {
    fontFamily: fonts.secondary.bold,
    fontSize: 16,
    color: colors.textInput
  },

})

export default styles