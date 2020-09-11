import { StyleSheet } from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButtonContainer: {
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
    leadHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    leadNameContainer: {
        padding: 10,
    },
    leadName: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 24,
        
    },
    leadActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    leftButtonContainer: {
        backgroundColor: 'rgba(0,0,0,.1)',
        borderColor: colors.background,
        borderWidth: 0.5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        width: 120,
        height: 50,
    },
    leftButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
        color: '#FFF',
    },
    middleButtonContainer:{
        backgroundColor: 'rgba(0,0,0,.1)',
        borderColor: colors.background,
        borderWidth: 0.5,
        width: 50,
        height: 50,
    },
    middleButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightButtonContainer: {
        backgroundColor: 'rgba(0,0,0,.1)',
        borderColor: colors.background,
        borderWidth: 0.5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        width: 50,
        height: 50,
    }, 
    rightButton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whatsappIcon: {
        width: 48,
        height: 48,
    },
    contentList: {
        padding: 10,
        width: '100%',
        marginTop: 50,
    },
    contentGroup: {
        width: '100%',
        justifyContent:'center',
        marginBottom: 15,
    },
    contentGroupHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
    },
    headerTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
    },
    headerLine: {
        flex: .9,
        height: 1.2,
        marginLeft: 15,
        backgroundColor: '#000'
    },
    content: {
        paddingHorizontal: 20,
    },
    contentItem: {
        padding: 5,
    },
    category: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12
    },
    value: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: colors.textInput
    }


})

export default styles