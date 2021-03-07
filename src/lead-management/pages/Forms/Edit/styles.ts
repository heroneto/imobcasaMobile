import { StyleSheet } from 'react-native'
import colors from '@core/theme/colors'
import fonts from '@core/theme/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  inputSearchContainer: {
    paddingHorizontal: 10,
  },
  textInput: {
    color: colors.textInput,
    fontWeight: "500",

  }
})

export default styles