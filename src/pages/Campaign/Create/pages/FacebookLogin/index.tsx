import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import HeaderActions from '../../../../../Components/HeaderActions'
import { useNavigation } from '@react-navigation/native'
import * as Facebook from 'expo-facebook'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import StandardButton from '../../../../../Components/StandardButton'
import colors from '../../../../../theme/colors'

const FacebookLogin: React.FC = () => {
  const { goBack, navigate } = useNavigation()
  const [isLogged, setIsLogged] = useState(false)
  const [totalLoginAttempts, setTotalLoginAttempts] = useState(0)
  const [facebookToken, setFacebookToken] = useState('')

  function handleNavigateToNextPage() {
    navigate('adaccountselect', {
      fbToken: facebookToken
    })
  }

  async function handleFacebookLogin() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile']
    })
    if (type === 'success') {
      setIsLogged(true)
      const totalAttempts = totalLoginAttempts + 1
      setTotalLoginAttempts(totalAttempts)
      setFacebookToken(token)
    } else if (type === 'cancel') {
      setIsLogged(false)
    } else {
      setIsLogged(false)
      const totalAttempts = totalLoginAttempts + 1
      setTotalLoginAttempts(totalAttempts)
    }
  }

  async function initFacebookSDK() {
    await Facebook.initializeAsync('561773431399086', 'imobcasa api')
  }

  useEffect(() => {
    initFacebookSDK()
  })

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.contentTextContainer}>
          <Text style={styles.contentText}>
            Clique no botão abaixo para Logar com a sua conta do Facebook
          </Text>
        </View>
        <View style={styles.facebookButtonContainer}>
          <StandardButton
            icon={<Ionicons name="logo-facebook" size={32} color="#FFF" />}
            text="Login com Facebook"
            color={!isLogged ? colors.facebook : colors.disabledButton}
            enabled={!isLogged ? true : false}
            onPress={handleFacebookLogin}
          />
          {totalLoginAttempts > 0 ?
            <View style={styles.loginResultContainer}>
              <Text style={{
                ...styles.loginStatus,
                color: isLogged ? colors.success : colors.error
              }}>
                {isLogged ? "Sucesso" : "Falha"}
              </Text>
              {isLogged ?
                <Ionicons name="ios-checkmark-circle" size={24} color={colors.success} />
                :
                <Feather name="x-circle" size={24} color={colors.error} />
              }
            </View>
            :
            true
          }

        </View>

      </View>
      <View style={styles.pageActionsContainer}>
        <View style={styles.nextPageButtonContainert}>
          <StandardButton
            icon={<Ionicons style={{ alignSelf: 'center' }} name="ios-arrow-forward" size={24} color="#FFF" />}
            onPress={handleNavigateToNextPage}
            color={!isLogged ? colors.disabledButton : colors.standardButton}
            enabled={isLogged}
          />
        </View>
      </View>
    </View>
  )
}

export default FacebookLogin