import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'; 
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native';

interface FloatButtonProps {
  pageToNavigate: string
}

const FloatButton: React.FC<FloatButtonProps> = ({pageToNavigate}) => {
  const { navigate } = useNavigation()

  function handleNavigateTo(){
    navigate(pageToNavigate)
  }

  return (
    <View style={styles.floatButtonContainer}>   
      <TouchableOpacity 
        onPress={handleNavigateTo}
        style={styles.floatButton}
      >
        <Ionicons name="ios-add" size={48} color="#FFF" />
      </TouchableOpacity>
    </View>
  )
}

export default FloatButton