import {StyleSheet} from 'react-native'
import colors from '@theme/colors'
import fonts from '@theme/fonts'

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
        justifyContent: 'flex-end',
    },
    inputGroup: {
        padding: 10,
    },
})

export default styles