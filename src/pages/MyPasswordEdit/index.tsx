import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import FormPageHeader from '../../Components/HeaderFormContainer'
import TopInput from '../../Components/TopInput'
import BottomInput from '../../Components/BottonInput'
import StandardButton from '../../Components/StandardButton'
import MiddleInput from '../../Components/MiddleInput'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

interface MyPasswordEditProps {
  route: any
}

const MyPasswordEdit: React.FC<MyPasswordEditProps> = ({ route }) => {
  const { userid } = route
  const { navigate, goBack } = useNavigation()
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function handleSaveButtom() {
    goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <FormPageHeader backButtomAction={goBack} />
      <View style={styles.contentContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>
            Segurança
                    </Text>
          <TopInput
            label="Senha antiga"
            placeholder="Digite a senha antiga"
            value={oldPassword}
            onChangeText={text => setOldPassword(text)}
            actionIconName='eye'
            secureEntry={true}
          />
          <MiddleInput
            label="Senha nova"
            placeholder="Digite a nova senha"
            value={password}
            onChangeText={text => setPassword(text)}
            actionIconName='eye'
            secureEntry={true}
          />
          <BottomInput
            label="Confirmação de senha"
            placeholder="Digite a senha novamente"
            value={passwordConfirmation}
            secureEntry={true}
            onChangeText={text => setPasswordConfirmation(text)}
            actionIconName='eye'
          />
        </View>
        <View style={styles.formActions}>
          <StandardButton
            onPress={handleSaveButtom}
            text="Salvar"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MyPasswordEdit