import {StyleSheet} from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background, 
    },
    inputTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
    },
    formContent: {
        paddingHorizontal: 20,
        height: '100%',
        justifyContent: 'center',
    },
    formActionContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: .5,
    },
    nextPageButtonContainer: {
        width: 100,
        height: 30,
    },
    inputGroup: {
        padding: 10,
    },
    contentTitleContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 24,
        textAlign: 'center'
    },
    messageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flex: .9
    },
    messageText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
        textAlign: 'center'
    },
    actionsContainer: {
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