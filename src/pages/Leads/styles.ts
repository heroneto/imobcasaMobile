import { StyleSheet } from 'react-native'
import colors from '../../theme'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,        
    }, 
    pageTitle: {
        fontFamily: 'Poppins_700Bold',
        color: '#FFF',
        fontSize: 18,
        marginTop: 18,
    },
    backButtonHeader: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100,0)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    navigatorContainer: {
        backgroundColor: colors.imobcasaPrimary,
    },
    title: {
        fontSize: 18
    },
    contentContainer: {
        backgroundColor: colors.background,
    },
    itemGroupName: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Poppins_700Bold',
        marginVertical: 12,
    },
    socialIcon: {
        width: 18,
        height: 18,                
    }
})

export default styles