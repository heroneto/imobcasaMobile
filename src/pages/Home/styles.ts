import { StyleSheet, BackHandler } from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background,
        width: "100%"
    },
    headerContainer: {
        padding: 10,
        backgroundColor: "rgba(0,0,0,0)"
    },
    myselfContainer: {
        width: "10%",
        flex: .2,
    },
    myselfImage: {
        width: 48,
        height: 48,
        borderRadius: 50,
    },
    headerOptionsContainer: {
        flexDirection: 'row',
    },
    settingsButton: {
        alignSelf: 'center',
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'rgba(100, 100, 100, 0)',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center'
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
    wellcomeContainer:{
        // height: '15%',
        marginTop: 100,
        marginBottom: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {

    },
    wellcomeTextPrimary: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 36
    },
    wellcomeTextSecondary: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 18
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        opacity: .4,
    },
    bottomText: {
        color: colors.textInput,
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
    }

})


export default styles