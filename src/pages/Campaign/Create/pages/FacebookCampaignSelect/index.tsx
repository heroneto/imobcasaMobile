import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormPageHeader from '../../../../../Components/HeaderFormContainer'
import styles from './styles'
import StandardButton from '../../../../../Components/StandardButton'
import colors from '../../../../../theme/colors'

import { Ionicons } from '@expo/vector-icons'
import InputContainer from '../../../../../Components/InputContainer'
import { TextInput } from 'react-native-gesture-handler'

interface FacebookCampaignSelect {
  adAccountSelected: string
}

var timeout: any = null

export default function FacebookCampaignSelect() {
  const { navigate, goBack } = useNavigation()
  const route = useRoute()
  const { adAccountSelected } = route.params as FacebookCampaignSelect
  const [campaings, setCamapaings] = useState([])
  const [search, setSearch] = useState<string>("")
  const [ execucoes, setExecucoes ] = useState<number>(0)

  useEffect(() => {
    console.log(adAccountSelected)
  }, [])

  function handleNavigateToCampaignSelectPage() {
    navigate('joincampaignusers')
  }

  function handleInput(text: string) {
    setSearch(text)
    
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      searchCampaigns(text)
      setExecucoes(lastvalue => lastvalue +1)
    }, 500)
  }

  function searchCampaigns(value: string){
    console.log("Buscando...")
  }


  return (
    <SafeAreaView style={styles.container}>
      <FormPageHeader
        backButtomAction={goBack}
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentTextContainer}>
          <Text style={styles.contentText}>
            Campanha
          </Text>
        </View>
        <View style={styles.inputGroupContainer}>
          <InputContainer
            inputRadiusStyle={{
              bottomLeft: true,
              bottomRight: true,
              topLeft: true,
              topRight: true
            }}
            label="Nome da campanha"
          >
            <TextInput placeholder="Digite o nome da campanha..." value={search} onChangeText={text => handleInput(text)}/>
          </InputContainer>
          <Text>{execucoes} execuções</Text>
        </View>
      </View>
      <View style={styles.pageActionsContainer}>
        <View style={styles.nextPageButtonContainert}>
          <StandardButton
            icon={<Ionicons style={{ alignSelf: 'center' }} name="ios-arrow-forward" size={24} color="#FFF" />}
            onPress={handleNavigateToCampaignSelectPage}
            color={colors.standardButton}
          />
        </View>
      </View>

    </SafeAreaView>
  )
}