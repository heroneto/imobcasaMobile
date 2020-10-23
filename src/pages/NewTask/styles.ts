
import {StyleSheet} from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
    },
    titleText: {
        fontFamily: 'Poppins_700Bold',      
        textAlign: 'center',
        fontSize: 36
    },
    inputGroup: {
        padding: 10
    },
    inputTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
    },
    formActions: {
        width: "100%",
        paddingHorizontal: 80,
        marginTop: 20,
        marginBottom: 50,
    },
    formContent: {
        paddingHorizontal: 20,
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
    }
})

export default styles