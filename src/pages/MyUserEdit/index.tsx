import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import colors from '../../theme/colors'
import { Feather } from '@expo/vector-icons';
import FormPageHeader from '../../Components/HeaderFormContainer'
import StandardButton from '../../Components/StandardButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputContainer from '../../Components/InputContainer'
import { TextInput } from 'react-native-gesture-handler'


interface MyUserEditProps {
  route: any
}

const MyUserEdit: React.FC<MyUserEditProps> = ({ route }) => {
  const { userid } = route
  const { navigate, goBack } = useNavigation()
  const [name, setName] = useState('Heron Eto')
  const [email, setEmail] = useState('heron@imobcasa.com')

  function handleSaveButtom() {
    goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <FormPageHeader
        backButtomAction={goBack}
      />
      <View style={styles.contentContainer} >
        <View style={styles.inputGroup}>
          <Text style={styles.inputTitle}>
            Dados do usuário
          </Text>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: false,
              bottomRight: false,
              topLeft: true,
              topRight: true
            }}
            label="Nome completo"
          >
            <TextInput 
              placeholder="Insira o nome completo"
              value={name}
              onChangeText={text => setName(text)}
            />
            <Feather name="user" size={24} color={colors.textInputLabel} />
          </InputContainer>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: true,
              bottomRight: true,
              topLeft: false,
              topRight: false
            }}
            label="E-Mail"
          >
            <TextInput 
              placeholder="Insira o E-Mail do usuário"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Feather name="mail" size={24} color={colors.textInputLabel} />
          </InputContainer>
        </View>

        <View style={styles.formActions}>
          <StandardButton
            onPress={handleSaveButtom}
            text="Atualizar"
          />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default MyUserEdit