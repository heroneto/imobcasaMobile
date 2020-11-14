import { StyleSheet } from 'react-native'
import colors from '../../../../theme/colors'
import fonts from '../../../../theme/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    headerContainer: {
        flex: .2,
    },
    contentContainer: {
        flex: .6,
        justifyContent: 'space-evenly'
    },
    pageActionsContainer: {
        flex: .2,
        justifyContent: 'center',
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