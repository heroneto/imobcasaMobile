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
        // flex: .2,
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
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
        // flex: .3,
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wellcomeTextPrimary: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 36
    },
    wellcomeTextSecondary: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 14
    },
    leadStatusContainer: {
        // flex: .3,
    },
    leadStatusHeader: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    leadStatusHeaderText: {
        // flex: .2,
        fontFamily: 'Poppins_700Bold',
        fontSize: 18
    },
    lineHeader: {
        flex: .8,
        margin: 10,
        height: 1,
        backgroundColor: '#000'
    },
    leadStatusContainerOptions: {
        backgroundColor: 'rgba(100,100,100,0)',
        borderRadius: 50,
        width: 32,
        height: 32,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems:'center'
    },
    leadStatusContent: {
        // flex: 1,

    },
    statusContainer: {
        // flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-around'
    },
    statusButton: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    statusCount: {
        backgroundColor: colors.textInput,
        alignItems:'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 50,
        width: 48,
        height: 48,
    },
    statusCountText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        color: '#FFF',
    },
    statusName: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        color: colors.textInput,
        marginLeft: 20
    },
    scheculeContainer: {
        flex: 1,
    }

})


export default styles