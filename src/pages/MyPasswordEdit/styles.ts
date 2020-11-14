import {StyleSheet} from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

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
        paddingHorizontal: 20,
    },
    inputTitle: {
        fontFamily: fonts.primary.bold,
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
        justifyContent: 'flex-end',
    },
    inputGroup: {
        padding: 10,
    },

    contentTitle: {
        fontFamily: fonts.primary.bold,
        fontSize: 36,
    }
})

export default styles