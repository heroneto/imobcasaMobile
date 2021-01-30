import { StyleSheet } from 'react-native'
import colors from '@theme/colors'
import fonts from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  messageText: {
    fontFamily: fonts.primary.bold,
    fontSize: 24,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    padding: 50,
    width: "100%",
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    width: 120,
  }
})

export default styles