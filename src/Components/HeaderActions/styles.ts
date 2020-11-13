import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headerContainer: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    imageSearchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: '100%',
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
    backButtonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    backButton: {
        width: 48,
        height: 48,
        borderRadius: 50,
        justifyContent: "center",
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
    }
})

export default styles