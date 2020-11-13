import { StyleSheet } from 'react-native'
import colors from '../../theme'

const styles = StyleSheet.create({
  floatButtonContainer: {
    width: 64,
    height: 64,
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  floatButton: {    
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: colors.imobcasaPrimary,
    alignItems:'center',
    justifyContent:'center',
    elevation: 8,
    
  }
})

export default styles