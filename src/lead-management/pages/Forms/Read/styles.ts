import { StyleSheet } from 'react-native'
import colors from '@core/theme/colors'
import fonts from '@core/theme/fonts'

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
    padding: 14,
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around"

  },
  buttonText: {
    fontSize: 16,
    fontFamily: fonts.primary.bold,
    color: "#FFF" ,
  }
})

export default styles