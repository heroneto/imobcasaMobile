import {StyleSheet} from 'react-native'
import colors from '../../../theme/colors'
import fonts from '../../../theme/fonts'

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
        fontFamily:fonts.primary.bold,
        textAlign: 'center',
        fontSize: 36
    },
    headerContainer: {
        padding: 10,
        marginTop: 30,
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
        padding: 10
    },
    inputTitle: {
        fontFamily: fonts.primary.bold,
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
    }
})

export default styles