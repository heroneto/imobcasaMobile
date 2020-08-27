import { StyleSheet } from 'react-native'
import colors from '../../theme'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    header: {
        height:  '35%',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: colors.imobcasaPrimary,
    },
    appImage: {
        resizeMode: 'contain',
        width: '100%',
        // marginBottom: 100
    },
    loginFormContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background
    },
    loginTitle: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    formTitle: {
        fontSize: 32,
        color: colors.textTitle,
        fontFamily: 'Poppins_600SemiBold'
    },
    formContainer: {
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    formActions: {
        flex: 1
    },
    loginOptionsContainer: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkBoxContainer: {
        flexDirection: 'row'
    },
    checkbox: {
        alignSelf: 'center',
    },
    checkboxButton: {
        borderRadius: 8,
    },
    checkboxLabel: {
        marginVertical: 12,
        marginHorizontal: 8,
        fontFamily: 'Poppins_400Regular',
        color: colors.textHiperlinkAlternative,
        fontSize: 12
    },
    forgotPasswordLink: {
        alignSelf: 'center',
        fontFamily: 'Poppins_400Regular',
        color: colors.textHiperlinkAlternative,
        fontSize: 12
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
    }
})


export default styles