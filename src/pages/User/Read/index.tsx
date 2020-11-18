import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import HeaderActions from '../../../Components/HeaderActions'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormPageHeader from '../../../Components/HeaderFormContainer'


interface TaskViewProps {
  route: any
}

const UserView: React.FC<TaskViewProps> = ({ route }) => {
  const { userid } = route.params
  const { navigate, goBack } = useNavigation()


  function handleNavigateToUsersPage() {
    navigate('users')
  }

  function handleNavigateToEditPage() {
    navigate('useredit', { userid })
  }

  function handleNavigateToPasswordChange() {
    navigate('userpasswordchange', { userid })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FormPageHeader backButtomAction={goBack} />
        <View style={styles.pageHeaderContainer}>
          <View style={styles.pageHeaderTitleContainer}>
            <Text style={styles.pageHeaderTitle}>Heron Hideki de Queiroz Eto</Text>
            <Text style={styles.pageHeaderSubtitle}>150 Leads - 2 campanhas</Text>
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
                onPress={handleNavigateToPasswordChange}
              >
                <Ionicons name="md-key" size={24} color="#FFF" />
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
                Sobre o usuário
                        </Text>
              <View style={styles.headerLine} />
            </View>
            <View style={styles.content}>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Nome completo</Text>
                <Text style={styles.value}>Heron Hideki de Queiroz Eto</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>E-Mail</Text>
                <Text style={styles.value}>heron@imobcasa.com.br</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data de criação</Text>
                <Text style={styles.value}>01/01/2020</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Data de atualização</Text>
                <Text style={styles.value}>21/01/2020</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Status</Text>
                <Text style={styles.value}>Ativo</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentGroup}>
            <View style={styles.contentGroupHeader}>
              <Text style={styles.headerTitle}>
                Sobre seus Leads
                        </Text>
              <View style={styles.headerLine} />
            </View>
            <View style={styles.content}>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Total</Text>
                <Text style={styles.value}>150</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Leads aguardando</Text>
                <Text style={styles.value}>50</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Leads com negociação em andamento</Text>
                <Text style={styles.value}>25</Text>
              </View>
              <View style={styles.contentItem}>
                <Text style={styles.category}>Leads com negociação concluída</Text>
                <Text style={styles.value}>666</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default UserView