import { StyleSheet } from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFF',
        borderWidth: .5,
        borderColor: '#E6E6F0',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    labelText: {
        color: "#C1BCCC",
        fontSize: 10
    },
    inputedValue: {
        color: colors.textInput,
        fontFamily: "Archivo_400Regular",
        fontSize: 16,
    }
})

export default styles