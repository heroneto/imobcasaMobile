import { flatten } from 'lodash'
import { StyleSheet, BackHandler } from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        flex: .1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,      
    },
    myselfContainer: {
        alignSelf: 'center',
        backgroundColor: 'rgba(100, 100, 100, 0)',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center'
    },
    myselfImage: {
        width: 48,
        height: 48,
        borderRadius: 50,
    },
    searchButton: {
        alignSelf: 'center',
        width: 32,
        height: 32,
        backgroundColor: '#FFF',
        borderRadius: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center'
    },
    content: {
        flex: .8,
    },
    wellcomeContainer:{
        justifyContent: 'flex-end',
        alignItems: 'center',       
        flex: .5,
    },
    wellcomeTextPrimary: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 36
    },
    wellcomeTextSecondary: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 18
    },
    dashboard: {
        flex: .5,
        justifyContent: 'center',
    },
    bottom: {
        flex: .1,
        alignItems: 'center',
        opacity: .4,
    },
    bottomText: {
        color: colors.textInput,
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
    }

})

export default styles