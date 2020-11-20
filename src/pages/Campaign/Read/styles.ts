import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'
import fonts from '../../../theme/fonts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  contentContainer: {
    width: '100%',
    justifyContent:'center',
    paddingVertical: 10,
    paddingHorizontal: 5
},
  campaignName: {
    textAlign: 'center',
    fontFamily: fonts.primary.bold,
    fontSize: 24,
  },
  campaignDetails: {
    textAlign: 'center',
    fontFamily: fonts.primary.bold,
    fontSize: 12,

  },
  headerActions: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButton: {
    padding: 8,

  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: "#FFF" ,
  }
})

export default styles