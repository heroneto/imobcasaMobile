import {  StyleSheet } from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },  
  header: {
    backgroundColor: colors.imobcasaPrimary,
    padding: 8,
  },
  myselfImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  showUserOptionsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userData: {
    justifyContent: 'center',
    paddingVertical: 8,
  },
  userName: {
    fontFamily: fonts.secondary.bold,
    fontSize: 14,
    color: '#FFF',
  },
  userMail: {
    fontFamily: fonts.secondary.regular,
    fontSize: 14,
    color: '#FFF',
  },
  userOptions: {
    backgroundColor: colors.imobcasaSecondary,

  },
  optionButton: {
    padding: 10,
  },
  optionText: {
    fontFamily: fonts.secondary.bold,
    fontSize: 14,
    color: "#FFF",
  },
  drawerContent: {
    backgroundColor: colors.background,
    height: "100%",
  },  
})

export default styles