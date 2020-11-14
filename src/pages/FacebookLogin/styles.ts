import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginContainer: {
        flex: .3,
        alignItems: "center",
    },
    loginButtonContainer: {
        paddingHorizontal: 100,
        alignItems: 'center'
    },
    profileContainer: {
        padding: 10,
    },
    pageTitle: {
        fontFamily: fonts.primary.bold
    },
    profileName: {
        fontFamily: fonts.secondary.regular,
        fontSize: 14,
        color: colors.textInput
    },
    adsContainer: {
        paddingHorizontal: 50,

    }
})

export default styles