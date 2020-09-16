import { StyleSheet } from 'react-native'
import colors from '../../theme'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    title: {
        fontSize: 18
    },
    headerContainer: {
        padding: 10,
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
    backButtonHeader: {
        padding: 5,
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100,0)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputGroup: {
        paddingHorizontal: 20,
        marginTop: 50,
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
    backButtonContainer: {
        width:50,
        marginRight: 5,
    }
})

export default styles