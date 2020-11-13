import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    backButtonContainer: {
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