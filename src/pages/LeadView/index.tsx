import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import styles from './styles'
import HeaderActions from '../../Components/HeaderActions'
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


import WhatsAppIcon from '../../../assets/icons/WhatsApp.png'
import colors from '../../theme/colors'
import FormPageHeader from '../../Components/HeaderFormContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import LeadStatus from './components/LeadStatus'
import ButtonContainer from '../../Components/ButtonContainer'

interface LeadViewProps {
  route: any
}

const LeadView: React.FC<LeadViewProps> = ({ route }) => {
  const { leadid } = route.params
  const { navigate, goBack } = useNavigation()

  function handleToWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${'+5511952827212'}`)
  }

  function handleNavigateToLeadsPage() {
    navigate('leads')
  }

  function handleNavigateToEditPage() {
    navigate('leadedit', { leadid })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <FormPageHeader backButtomAction={handleNavigateToLeadsPage}/>
        <View style={styles.contentContainer}>
          <View style={styles.leadHeaderGroup}>
            <Text style={styles.leadName}>José da Silva Junior</Text>
          </View>

          <View style={styles.leadHeaderGroup}>
            <View style={styles.leadActionsContainer}>
              <ButtonContainer position="left">
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNavigateToEditPage}
                >
                  <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
              </ButtonContainer>
              <ButtonContainer backgroundColor={colors.whatsapp} position="right">
                <TouchableOpacity
                  style={styles.whatsAppButton}
                  onPress={handleToWhatsApp}
                >
                  <Image
                    source={WhatsAppIcon}
                    style={styles.whatsappIcon}
                  />
                </TouchableOpacity>
              </ButtonContainer>
            </View>
          </View>
                  
          <View style={styles.leadHeaderGroup}>
            <LeadStatus
              title="Cobrar o cliente - Pendente"
              details="Quarta-feira, 28 de setembro de 2020 às 09:00hs"
              statusLevel="info"
              taskId= "_id1234"
              pressable={true}
            />
          </View>

          <View style={styles.leadHeaderGroup}>
            <Text style={styles.leadHeaderGroupTitle}>Defina seu próximo passo</Text>
            <View style={styles.leadNextStepsContainer}>
              <ButtonContainer position="left">
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                >
                  <Text style={styles.buttonStepText}>Agendar Atividade</Text>
                </TouchableOpacity>
              </ButtonContainer>
              <ButtonContainer position="middle">
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                >
                  <Text style={styles.buttonStepText}>Negócio Fechado</Text>
                </TouchableOpacity>
              </ButtonContainer>
              <ButtonContainer position="right">
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                >
                  <Text style={styles.buttonStepText}>Arquivar Lead</Text>
                </TouchableOpacity>
              </ButtonContainer>
            </View>
          </View>

        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentGroup}>
            <View style={styles.contentHeader}>
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
                <Text style={styles.value}>(11) 9 99999-9999</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data do cadastro</Text>
                <Text style={styles.value}>12/08/2020 às 21:45</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Status</Text>
                <Text style={styles.value}>Aguardando</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data da última alteração</Text>
                <Text style={styles.value}>12/08/2020 às 22:00</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentGroup}>
            <View style={styles.contentHeader}>
              <Text style={styles.headerTitle}>
                Fonte
                          </Text>
              <View style={styles.headerLine} />
            </View>
            <View style={styles.content}>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Fonte</Text>
                <Text style={styles.value}>Facebook</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Formulário</Text>
                <Text style={styles.value}>Penha</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentGroup}>
            <View style={styles.contentHeader}>
              <Text style={styles.headerTitle}>
                Responsável
                          </Text>
              <View style={styles.headerLine} />
            </View>
            <View style={styles.content}>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Nome</Text>
                <Text style={styles.value}>Heron Hideki de Queiroz Eto</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.contentHeader}>
            <View style={styles.headerLine}/>
            <Text style={styles.headerTitle}>Atividades</Text>  
            <View style={styles.headerLine}/>
          </View>
          <View style={styles.leadActivityList}>
            <LeadStatus
              title="Segunda-feira, 26 de setembro de 2020"
              details="Heron Eto | Atividade criada | Cobrar cliente -> José da Silva"
              statusLevel="neutral"
              taskId= "_id1234"
              pressable={false}
            />
            <LeadStatus
              title="Segunda-feira, 26 de setembro de 2020"
              details="Heron Eto | Atividade criada | Cobrar cliente -> José da Silva"
              statusLevel="neutral"
              taskId= "_id1234"
              pressable={false}
            />
            <LeadStatus
              title="Segunda-feira, 26 de setembro de 2020"
              details="Heron Eto | Atividade criada | Cobrar cliente -> José da Silva"
              statusLevel="neutral"
              taskId= "_id1234"
              pressable={false}
            />
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default LeadView