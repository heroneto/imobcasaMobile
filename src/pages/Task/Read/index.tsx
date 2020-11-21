import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import styles from './styles'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


import WhatsAppIcon from '../../../../assets/icons/WhatsApp.png'
import colors from '../../../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context'
import FormPageHeader from '../../../Components/HeaderFormContainer'

interface TaskViewProps {
  route: any
}

const TaskView: React.FC<TaskViewProps> = ({ route }) => {
  const { taskid } = route.params
  const { navigate, goBack } = useNavigation()

  function handleToWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${'+5511952827212'}`)
  }

  function handleNavigateToEditPage() {
    navigate('Edição de Tarefa', { taskid })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.pageHeaderContainer}>
          <View style={styles.pageHeaderTitleContainer}>
            <Text style={styles.pageHeaderTitle}>Solicitar documentação</Text>
            <Text style={styles.pageHeaderSubtitle}>ontem - Atrasada</Text>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.leftButtonContainer}>
              <RectButton
                style={styles.leftButton}
                onPress={handleNavigateToEditPage}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </RectButton>
            </View>
            <View style={styles.middleButtonContainer}>
              <RectButton
                style={styles.middleButton}
              >
                <Ionicons name="md-trash" size={24} color="#FFF" />
              </RectButton>
            </View>
            <View style={styles.middleButtonContainer}>
              <RectButton
                style={styles.middleButton}
              >
                <Ionicons name="md-checkmark" size={24} color="#FFF" />
              </RectButton>
            </View>
            <View style={{
              ...styles.rightButtonContainer,
              backgroundColor: colors.whatsapp,
            }}>
              <RectButton
                style={styles.rightButton}
                onPress={handleToWhatsApp}
              >
                <Image
                  source={WhatsAppIcon}
                  style={styles.whatsappIcon}
                />
              </RectButton>
            </View>
          </View>
        </View>
        <View
          style={styles.contentList}
        >
          <View style={styles.contentGroup}>
            <View style={styles.contentGroupHeader}>
              <Text style={styles.headerTitle}>
                Dados da tarefa
                            </Text>
              <View style={styles.headerLine} />
            </View>
            <View style={styles.content}>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data planejada</Text>
                <Text style={styles.value}>12/02/2020</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data planejada</Text>
                <Text style={styles.value}>12/02/2020</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Detalhes</Text>
                <Text style={styles.value}>Cliente malucoooo</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Responsável</Text>
                <Text style={styles.value}>Heron Hideki de Queiroz Eto</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentGroup}>
            <View style={styles.contentGroupHeader}>
              <Text style={styles.headerTitle}>
                Dados do Lead
                            </Text>
              <View style={styles.headerLine} />
            </View>
            <View style={styles.content}>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Nome</Text>
                <Text style={styles.value}>José da Silva Junior</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Telefone</Text>
                <Text style={styles.value}>(11) 95282-7212</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Status</Text>
                <Text style={styles.value}>Aguardando</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data do cadastro</Text>
                <Text style={styles.value}>12/08/2020 às 21:45</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data da última alteração</Text>
                <Text style={styles.value}>12/08/2020 às 22:00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default TaskView