import { StyleSheet } from 'react-native'
import colors from '../../theme'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    headerContainer: {
        padding: 10,
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
    formContainer: {
        alignSelf: 'center',
        padding: 10,
        flex: .9,
        justifyContent: 'center'
    },
    formTitleContainer: {
        
    },
    formTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 24,
        textAlign: 'center'
    },
    inputGroup: {
        paddingHorizontal: 20,
        marginTop: 50,
    },
    dateInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    labelContainer: {
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLabel: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
    },
    dateButtonContainer: {

    },
    dateButton: {
        padding: 5,
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100,0)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formActionContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    nextPageButtonContainert: {
        width: 100,
        height: 30,
    },
    formSaveButtonContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonContainer: {
        width: 200,
    },
    textMultiLineInput: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 16,
        padding: 5,
        color: colors.textInput
    },
    textMultiLineTextCount: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 10,
        color: colors.textInputLabel,
    },
})

export default styles