import {StyleSheet} from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

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
        fontFamily: fonts.primary.bold,
        fontSize: 18,
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
        fontFamily: fonts.primary.bold,
        fontSize: 36,
    }
})

export default styles