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
    inputTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
    },
    formContent: {
        paddingHorizontal: 20,
        height: '100%',
        justifyContent: 'center'
    },
    formActions: {
        width: "100%",
        paddingHorizontal: 80,
        marginTop: 20,
        marginBottom: 50,
        height: '25%',
        justifyContent: 'flex-end',
    },
    inputGroup: {
        padding: 10,
    },

    contentTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 36,
    }
})

export default styles