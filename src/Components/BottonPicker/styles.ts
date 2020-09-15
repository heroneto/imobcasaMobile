import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 0,
        borderWidth: .5,
        borderColor: '#E6E6F0',
        backgroundColor: '#FFF',
    },
    labelContainer: {
        // flex: 1,
    },
    label: {
        color: "#C1BCCC",
        fontSize: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default styles