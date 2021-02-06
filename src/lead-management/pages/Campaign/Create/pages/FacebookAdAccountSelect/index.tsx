import React, { useState, useEffect } from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import StandardButton from '@lead-management/components/StandardButton'
import colors from '@core/theme/colors'
import PickerInput from '@lead-management/components/PickerInput'

interface FacebookAdAccountSelectProps {
  route: any
}

interface adAccountsRequestResult {
  name: string,
  account_id: string,
  id: string
}

interface adAccounts {
  key: any,
  label: any,
  section?: any
  account_id?: any
}

interface inputPickerProps {
  key?: any,
  label?: any,
  section?: any
  account_id?: any
}

const FacebookAdAccountSelect: React.FC<FacebookAdAccountSelectProps> = ({ route }) => {
  const { goBack, navigate } = useNavigation()
  const { fbToken } = route.params
  const [adAccounts, setAdAccounts] = useState<Array<adAccounts>>([])
  const [adAccountSelected, setAdAccountSelected] = useState<inputPickerProps>()

  function handleNavigateToCampaignSelectPage() {
    navigate('campaignselect', {
      adAccountSelected
    })
  }

  async function getAdAccounts(fbToken: string) {
    const result = await axios.get('https://graph.facebook.com/v8.0/me?fields=adaccounts%7Bname%2Caccount_id%7D&access_token=' + fbToken)
    const adAccountsToShow: Array<adAccounts> = result.data.adaccounts.data.map((item: adAccountsRequestResult, index: number) => {
      const { name, account_id, id } = item

      return {
        label: name,
        account_id: account_id,
        key: index
      }
    })

    setAdAccounts([{
      key: -1,
      label: "Contas de anúncios",
      section: true
    }, ...adAccountsToShow])
  }


  useEffect(() => {
    getAdAccounts(fbToken)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.contentTextContainer}>
          <Text style={styles.contentText}>
            Encontramos {adAccounts.length - 1} contas de anúncios, selecione uma conta para continuar.
                    </Text>
        </View>
        <View style={styles.inputGroupContainer}>

          <PickerInput
            value={adAccountSelected?.label}
            borderRadius={{
              topLeft: 0,
              topRight: 0,
              bottomLeft: 0,
              bottomRight: 0
            }}
            data={adAccounts}
            label="Conta de anúncio"
            placeholder="Selecione uma conta de anúncios"
            onChange={(option) => {
              setAdAccountSelected(option)
            }}
          />

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
    </View>
  )

}

export default FacebookAdAccountSelect