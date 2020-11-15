import { StyleSheet } from 'react-native'
import colors from '../../theme/colors'
import fonts from '../../theme/fonts'

const styles = StyleSheet.create({
    cardButton: {
        flex: 1,
        backgroundColor: '#FFF',
        elevation: 6,
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5,
    },
    cardBody: {
        flex: 1,
        padding: 8,
    },
    header: {
        flex: 1,
    },
    content: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: colors.textInactive
    },  
    subtitle: {
        fontFamily: fonts.primary.regular,
        fontSize: 12,
        color: colors.textInput,
        marginLeft: 5,
    },
    titleContainer: {
        flexDirection: 'row',
        
    },
    title: {
        fontFamily: fonts.primary.semiBold,
        fontSize: 18,
        color: colors.textInput,
    },

    customTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'                ,
    },
    cardCustomTextContainer: {
        backgroundColor: colors.textInput,
        borderRadius: 100,
        padding: 4,       
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: fonts.primary.regular,        
    },
    cardCustomText: {
        color: '#FFF',
        fontSize: 14,
    },
    customText: {
        marginLeft: 5,
    }
})

export default styles