import React, { useState } from 'react'
import { View, Text, RefreshControl, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import DashboardGroup from '../../Components/DashboardGroup'
import { useNavigation } from '@react-navigation/native'
import colors from '../../theme/colors'
import { Ionicons } from '@expo/vector-icons';
import FormPageHeader from '../../Components/HeaderFormContainer'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AppConfig() {
  const [refreshing, setRefreshing] = useState(false)
  const { goBack } = useNavigation()
  const [titleAlpha, setTitleAlpha] = useState(100)

  const onRefresh = async () => {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  function handleContentOffsetChanges(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const titleColorTransparency = 1 - Number((event.nativeEvent.contentOffset.y * 1) / 100)
    setTitleAlpha(titleColorTransparency < 0.1 ? 0 : titleColorTransparency)
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        onScroll={(event) => handleContentOffsetChanges(event)}
      >
        <FormPageHeader
          backButtomAction={goBack}
        />
        <View style={styles.wellcomeContainer}>
          <Text
            style={{
              ...styles.wellcomeTextPrimary,
              color: `rgba(0,0,0,${titleAlpha})`
            }}
          >
            Configurações
                    </Text>
          <Text
            style={{
              ...styles.wellcomeTextSecondary,
              color: `rgba(0,0,0,${titleAlpha})`
            }}
          >
            Precisando fazer ajustes? é aqui mesmo
                    </Text>
        </View>
        <DashboardGroup
          items={[
            {
              count: 0,
              name: 'Ativas',
              color: colors.imobcasaPrimary,
              id: '0',
              pageToNavigate:"campaigns",
              nestedRouteName: "0"
            },
            {
              count: 5,
              name: 'Inativas',
              color: colors.imobcasaPrimary,
              id: '1',
              pageToNavigate:"campaigns",
              nestedRouteName: "1"
            }
          ]}
          title='Suas campanhas'
          modal={{
            title: 'Selecione uma opção',
            options: [
              {
                name: 'Nova campanha',
                pageToNavigate: 'newcampaign',
                id: "424",
                isPageExternalLink: false
              },
              {
                name: 'Ver campanhas',
                pageToNavigate: 'campaigns',
                id: "24243",
                isPageExternalLink: false
              }
            ]
          }}
        />

        <DashboardGroup
          items={[
            {
              name: 'Ativos',
              count: 5,
              color: colors.imobcasaPrimary,
              id: '0',
              nestedRouteName: "0",
              pageToNavigate: "users"
            },
            {
              name: 'Inativos',
              count: 15,
              color: colors.imobcasaPrimary,
              id: '1',
              nestedRouteName: "1",
              pageToNavigate: "users"
            }
          ]}
          title='Seus usuários'
        />
        <View
          style={styles.bottomContainer}
        >
          <Text style={styles.bottomText}>Deslize para atualizar</Text>
          <Ionicons name="ios-arrow-down" size={24} color={colors.textInput} />
        </View>


      </ScrollView>
    </SafeAreaView >
  )
}