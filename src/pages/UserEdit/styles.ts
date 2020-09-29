import {StyleSheet} from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background, 
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
        flex: .3,
        justifyContent: 'flex-end',
    },
    inputGroup: {
        padding: 10,
    },
    contentTitleContainer: {
        flex: .2,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentTitle: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 36,
    }
})

export default styles