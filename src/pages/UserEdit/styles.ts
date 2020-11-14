import {StyleSheet} from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background, 
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
        fontFamily: fonts.primary.regular,
        fontSize: 36,
    }
})

export default styles