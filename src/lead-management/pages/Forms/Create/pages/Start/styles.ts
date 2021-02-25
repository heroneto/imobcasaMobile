import { StyleSheet } from 'react-native'
import colors from '@core/theme/colors'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
    },
    titleContainer: {
        flex: .5,
        justifyContent: "center",
    },
    ButtonsContainer: {
        paddingHorizontal: 80,
        flex: .2,
        justifyContent: 'space-evenly',
    }
})

export default styles