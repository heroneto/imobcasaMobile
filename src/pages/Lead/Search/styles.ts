import { StyleSheet } from 'react-native'
import colors from '@theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchInputContainer: {
    backgroundColor: '#FFF',
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 17,
    marginTop: 10,
    flexDirection: 'row',
  },
  backButtonHeader: {
    padding: 5,
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: 'rgba(100,100,100,0)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputTextContainer: {
    flex: .9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,

  },
  inputText: {
    width: "100%",
    color: '#6A6180',
    fontSize: 16
  },
  searchButton: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: 'rgba(100,100,100,0)',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles