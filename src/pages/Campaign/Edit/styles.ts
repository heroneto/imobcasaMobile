import { StyleSheet } from 'react-native'
import colors from '@theme/colors'
import fonts from '@theme/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  contentContainer: {
    // height: "70%",
  },
  contentTextContainer: {
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  contentText: {
      fontFamily: fonts.primary.bold,
      fontSize: 24,
      textAlign: 'center',
      color: colors.textTitle
  },
  inputGroupContainer: {
    paddingHorizontal: 20,
  },
  pageActionsContainer: {
    // height: "30%",
    justifyContent: 'center',
  },
  nextPageButtonContainert: {
    width: "40%",
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  selectedUsersContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedUsersTitle: {
    textAlign: 'center',
    fontFamily: fonts.primary.bold,
    fontSize: 14,
    color: colors.textTitle
  },
  userContainer: {    
    backgroundColor: "#FFF",
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 5,
  },
  userMoveActionsContainer: {
    flex: 0.2,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  moveUserButtonUp: {
    height: 32,
    justifyContent: 'flex-start',
    marginVertical: 2,
  },
  moveUserButtonDown: {
    height: 32,
    justifyContent: 'flex-end',
    marginVertical: 2,
  },
  userNameContainer: {
    flex: 0.65,
    paddingHorizontal: 8,
    justifyContent: 'center'
  },
  userName: {
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    color: colors.textInput
  },
  removeUserContainer: {
    flex: 0.15,
    backgroundColor: colors.error,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeUserButton: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles