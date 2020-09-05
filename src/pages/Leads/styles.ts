import { StyleSheet } from 'react-native'
import colors from '../../theme'


const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.imobcasaPrimary,
        // paddingHorizontal: 10,
    },
    backButtonHeader: {
        padding: 5,
        marginLeft: 10,
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100,0)',
        justifyContent: 'center',
        alignItems: 'center'
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