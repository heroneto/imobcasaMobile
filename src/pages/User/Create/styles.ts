import {StyleSheet} from 'react-native'
import colors from '@theme/colors'
import fonts from '@theme/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background, 
    },
    
    pageActionsContainer: {
        paddingHorizontal: 20,
        // flex: .1
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
        fontFamily: fonts.primary.bold,
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    nextPageButtonContainer: {
        width: 150,
    },
    inputGroup: {
        padding: 10,
    },
    contentTitle: {
        fontFamily: fonts.primary.bold,
        fontSize: 24,
        textAlign: 'center'
    },
    messageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        // flex: .9
    },
    messageText: {
        fontFamily: fonts.primary.bold,
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
    inputAction: {
        width: 24,
        height: 24,
        borderRadius: 100,
        justifyContent: 'space-around',
        flexDirection: 'row'
        
    }
})

export default styles