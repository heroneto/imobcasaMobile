import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,.4)',
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalOptions: {
        backgroundColor: colors.background,
        width: '70%',
        alignItems: 'center'
    },
    modalTitleContainer: {
        padding: 5,
    },
    modalTitleText: {
        color: colors.imobcasaPrimary,
        fontFamily: fonts.primary.bold,
        fontSize: 16,
    },
    modalButton: {
        width: '100%',
    },
    modalButtonView: {
        backgroundColor: colors.background,
        padding: 10,
        margin: 0,
        width: '100%',
        alignItems: 'center'
    },
    modalOptionText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: colors.textInput
    }
})

export default styles