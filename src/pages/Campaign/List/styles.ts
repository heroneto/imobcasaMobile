import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'
import fonts from '../../../theme/fonts'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  pageTitle: {
    fontFamily: fonts.primary.bold,
    color: '#FFF',
    fontSize: 18,
    marginTop: 3,
  },
  navigatorContainer: {
    backgroundColor: colors.imobcasaPrimary,
},
})

export default styles