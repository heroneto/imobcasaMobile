import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { View, Text } from 'react-native'
import StandardButton from '../../../../../components/StandardButton'
import colors from '../../../../../theme/colors'

const ConfirmCampaignCreation: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.confirmationContainer}>
        <Text style={styles.messageText}>
          Quase tudo pronto, deseja ativar o recebimento de Leads nessa campanha?
        </Text>
        <View style={styles.optionsContainer}>
          <View style={styles.buttonContainer}>
            <StandardButton
              text="Sim"  
              color={colors.standardButton}
              onPress={() => navigate('Minhas Campanhas')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <StandardButton
              text="Não"  
              color={colors.cancelButton}
              onPress={() => navigate('Minhas Campanhas')}
            />
          </View>
          
        </View>
      </View>
    </View>
  )
}

export default ConfirmCampaignCreation