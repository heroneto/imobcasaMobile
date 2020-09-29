import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 20,
        borderWidth: .5,
        borderColor: '#E6E6F0',
        backgroundColor: '#FFF',
    },
    inputLabel: {
        color: "#C1BCCC",
        fontSize: 10
    },
    inputContianer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        backgroundColor: '#FFF',
        color: '#6A6180',
        fontSize: 16
    },
    inputAction: {
        width: 24,
        height: 24,
        borderRadius: 100,
        justifyContent: 'space-around',
        flexDirection: 'row'
        
    }
})

export default styles