import { StyleSheet } from 'react-native'
import colors from '../../theme'


const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.imobcasaPrimary,

    },
    backButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    pageTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageTitle: {
        fontFamily: 'Poppins_700Bold',
        color: '#FFF',
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
    }
})

export default styles