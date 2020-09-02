import { StyleSheet } from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        // flex: 1,        
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
        // width: '20%',
    },
    lineHeader: {
        // flex: .7,
        width: '60%',
        // margin: 10,
        // marginLeft: 10,
        height: 1,
        backgroundColor: '#000'
    },
    options: {
        backgroundColor: 'rgba(100,100,100,0)',
        borderRadius: 50,
        width: 32,
        height: 32,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center'
    },

    content: {
        paddingHorizontal: 30,
        justifyContent: 'space-around'
    },
    itemButton: {
        borderRadius: 20,
        backgroundColor: 'rgba(100,100,100,0)',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    itemContainerCountText: {
        alignItems:'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 50,
        width: 48,
        height: 48,
    },
    itemCountText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        color: '#FFF',
    },
    itemNameText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        color: colors.textInput,
        marginLeft: 10
    },
    
})

export default styles