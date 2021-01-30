import { StyleSheet } from 'react-native'
import colors from '@theme/colors'
import fonts from '@theme/fonts'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    header: {
        // height:  '20%',
        flex: .3,
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: colors.imobcasaPrimary,
    },
    appImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf:'center',
        width: '50%',
        // marginBottom: 100
    },
    loginFormContainer: {
        flex: .7,
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
        fontFamily: fonts.primary.semiBold
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
        fontFamily: fonts.secondary.regular,
        color: colors.textHiperlinkAlternative,
        fontSize: 12
    },
    forgotPasswordLink: {
        alignSelf: 'center',
        fontFamily: fonts.primary.regular,
        color: colors.textHiperlinkAlternative,
        fontSize: 12
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    inputAction: {
        width: 24,
        height: 24,
        borderRadius: 100,
        justifyContent: 'space-around',
        flexDirection: 'row'
        
    }
})


export default styles