import { StyleSheet } from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
    },
    itemContentContainer: {
        flexDirection: 'row',

    },
    itemColorIndicator: {
        borderColor: colors.textInput,
        borderWidth: 5,
        height: '100%',
    },
    itemTextContainer: {
        justifyContent: 'center',
        marginLeft: 15,
    },
    subtitle: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: colors.textInput,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        color: colors.textInput,
    },
    itemButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemButton: {
        padding: 5,
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100,.0)'
    }
})

export default styles