import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headerContainer: {
        // flex: .2,
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    myselfContainer: {
        // width: "10%",
        // flex: .2,
        alignSelf: 'center',
        width: 48,
        height: 48,
        borderRadius: 50,
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
    backButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    backButtonHeader: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'rgba(100,100,100,0)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
})

export default styles