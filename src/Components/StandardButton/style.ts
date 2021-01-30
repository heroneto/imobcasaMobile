import { StyleSheet } from 'react-native'
import colors from '@theme/colors'
import fonts from '@theme/fonts'

const styles = StyleSheet.create({
    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        width: "100%",
        height: 55,
        borderRadius: 10
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: fonts.secondary.bold,
        textAlign: 'center',
        // width: '100%',
    },
})

export default styles