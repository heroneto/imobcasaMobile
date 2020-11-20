import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormPageHeader from '../../../../../Components/HeaderFormContainer'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { View, Text } from 'react-native'
import StandardButton from '../../../../../Components/StandardButton'
import colors from '../../../../../theme/colors'

const ConfirmCampaignCreation: React.FC = () => {
  const { goBack, navigate } = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <FormPageHeader 
        backButtomAction={goBack}
      />
      <View style={styles.confirmationContainer}>
        <Text style={styles.messageText}>
          Quase tudo pronto, deseja ativar o recebimento de Leads nessa campanha?
        </Text>
        <View style={styles.optionsContainer}>
          <View style={styles.buttonContainer}>
            <StandardButton
              text="Sim"  
              color={colors.standardButton}
              onPress={() => navigate('appconfig')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <StandardButton
              text="Não"  
              color={colors.cancelButton}
              onPress={() => navigate('appconfig')}
            />
          </View>
          
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ConfirmCampaignCreation