import { flatten, padEnd } from 'lodash'
import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    leadHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    leadHeaderGroup: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    leadHeaderGroupTitle: {
        fontFamily: fonts.primary.bold,
        fontSize: 12,
        textAlign: 'center'
    },
    leadName: {
        fontFamily: fonts.primary.bold,
        fontSize: 24,        
    },
    leadActionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: fonts.primary.bold,
        fontSize: 18,
        color: '#FFF',
        textAlign: 'center'
    },
    buttonStepText: {
        fontFamily: fonts.primary.bold,
        fontSize: 14,
        color: '#FFF',
        textAlign: 'center'
    },
    whatsappIcon: {
        width: 48,
        height: 48,
    },
    leadNextStepsContainer: {
        flexDirection: 'row',       
        width: "100%",
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 50,
        padding: 8,
    },
    whatsAppButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        padding: 8,
    },
    contentContainer: {
        width: '100%',
        justifyContent:'center',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    contentGroup: {        
        width: '100%',
        justifyContent:'center',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    headerTitle: {
        fontFamily: fonts.primary.bold,
        fontSize: 18,
    },
    headerLine: {
        flex: .9,
        height: 1.2,
        marginHorizontal: 5,
        backgroundColor: '#000'
    },
    content: {
        paddingHorizontal: 20,
    },
    contentItem: {
        padding: 5,
    },
    category: {
        fontFamily: fonts.primary.regular,
        fontSize: 12
    },
    value: {
        fontFamily: fonts.secondary.bold,
        fontSize: 16,
        color: colors.textInput
    },
    leadActivityList: {
        justifyContent: 'center',
        alignItems: 'center'
    }


})

export default styles