import {StyleSheet} from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background, 
    },
    contentTitleContainer: {
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    contentContainer: {
        justifyContent: 'center',
        paddingHorizontal: 20,
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
    formActions: {
        width: "100%",
        paddingHorizontal: 80,
        marginTop: 20,
        justifyContent: 'flex-end',
    },
    inputGroup: {
        padding: 10,
    },
})

export default styles