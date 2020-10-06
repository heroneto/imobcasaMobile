import { StyleSheet } from 'react-native'
import colors from '../../theme'

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
        fontFamily:'Poppins_700Bold'
    },
    profileName: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 14,
        color: colors.textInput
    },
    adsContainer: {
        paddingHorizontal: 50,

    }
})

export default styles