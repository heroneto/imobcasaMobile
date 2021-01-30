import { StyleSheet } from 'react-native'
import fonts from '@theme/fonts'

const styles = StyleSheet.create({
  headerContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  menuButton: {
    alignSelf: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0)',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -3,
    marginRight: 20,
  },
  menuAndTitle: {
    flexDirection: 'row',
  },
  titleTextContainer: {
    justifyContent: 'center',
    padding: 8,
  },
  titleText: {
    fontFamily: fonts.primary.bold,
    color: '#FFF',
    fontSize: 16,
  },
  backButtonContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 50,
    justifyContent: "center",
  },
  searchButton: {
    alignSelf: 'center',
    width: 32,
    height: 32,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default styles