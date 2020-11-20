import { StyleSheet } from 'react-native'
import colors from '../../../../../theme/colors'
import fonts from '../../../../../theme/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    contentContainer: {
        height: "70%",
        justifyContent: 'space-evenly'
    },
    pageActionsContainer: {
        height: "30%",
        justifyContent: 'center',
    },
    contentTextContainer: {
        paddingHorizontal: 25,
    },
    contentText: {
        fontFamily: fonts.primary.bold,
        fontSize: 24,
        textAlign: 'center',
    },
    facebookButtonContainer: {
        paddingHorizontal: 60,
    },
    nextPageButtonContainert: {
        width: "25%",
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
    },
    loginResultContainer: {
        flexDirection: 'row',
        paddingHorizontal: 80,
        paddingVertical: 10,
        justifyContent: 'space-evenly',
    },
    loginStatus: {
        fontFamily: fonts.primary.regular,
        fontSize: 18,
    }
})

export default styles