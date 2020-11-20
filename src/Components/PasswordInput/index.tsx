import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Octicons } from '@expo/vector-icons'
import styles from './styles'
import { TextInputProps } from 'react-native'


interface PasswordInputProps extends TextInputProps{
 
}

const PasswordInput: React.FC<PasswordInputProps> = ({...rest}) => {
  const [ isActionIconActive, setIsActionIconActive ] = useState<boolean>(false)

  function togglePasswordView(){
    setIsActionIconActive(!isActionIconActive)
  }    

  return (
    <>
      <TextInput 
        secureTextEntry={!isActionIconActive} 
        {...rest}
        />
        <TouchableOpacity
          style={styles.inputAction}
          onPress={togglePasswordView}
        >
        <Octicons 
            name='eye'
            size={24} 
            color={isActionIconActive ? "#309AE7" : "#F0F0F7"}
        />
        </TouchableOpacity>
    </>
  )
}

export default PasswordInput