import {StyleSheet} from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background, 
    },
        headerContainer: {
            flex: .2,
        },
        contentTitleContainer: {
            padding: 10,
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: .2,
        },
        contentContainer: {
            paddingHorizontal: 20,
            flex: .5,
        },
        pageActionsContainer: {
            paddingHorizontal: 20,
            flex: .1
        },
    backButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButtonHeader: {
        marginLeft: 10,
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100,0)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
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
        // flex: 1,
    },
    nextPageButtonContainer: {
        width: 100,
        height: 30,
    },
    inputGroup: {
        padding: 10,
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