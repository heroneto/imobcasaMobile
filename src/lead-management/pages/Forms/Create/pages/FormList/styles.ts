import colors from '@core/theme/colors'
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  TitleContainer: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: 80,
    marginVertical: 30,
  }
})


export default styles