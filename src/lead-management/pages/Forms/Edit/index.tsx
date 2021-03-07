import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { View, Text } from 'react-native'
import InputContainer from '@lead-management/components/InputContainer'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import StandardButton from '@lead-management/components/StandardButton'
import { Ionicons } from '@expo/vector-icons'
import colors from '@core/theme/colors'
import usersAPI from './usetsTest.json'

var searchTimeout: any = null

interface UserListProps {
  name: string,
  id: string
}

export default function CampaignEdit() {
  const { navigate } = useNavigation()
  const [userSearchName, setUserSearchName] = useState<string>("")
  const [userList, setUserList] = useState<UserListProps[]>(usersAPI)

  function moveUserUp(pressedIdx: number) {
    console.log("Movendo usuário para cima " + pressedIdx)

    const newUserList = userList.reduce((acc: Array<UserListProps>, user: UserListProps, idx) => {
      if (idx == pressedIdx) {
        acc.push(userList[idx - 1])
      } else if (idx == pressedIdx - 1) {
        acc.push(userList[idx + 1])
      } else {
        acc.push(user)
      }
      return acc
    }, [])

    setUserList(newUserList)

  }

  function moveUserDown(pressedIdx: number) {
    console.log("Movendo usuário para baixo " + pressedIdx)

    const newUserList = userList.reduce((acc: Array<UserListProps>, user: UserListProps, idx) => {
      if (idx == pressedIdx) {
        acc.push(userList[idx + 1])
      } else if (idx == pressedIdx + 1) {
        acc.push(userList[idx - 1])
      } else {
        acc.push(user)
      }
      return acc
    }, [])

    setUserList(newUserList)

  }

  function handleSearch(value: string) {
    setUserSearchName(value)
    clearTimeout(searchTimeout)

    searchTimeout = setTimeout(() => {
      searchUser(value)
    }, 500)
  }

  async function searchUser(value: string) {
    console.log("Buscando usuário...")
  }

  function handleNavigateToCampaignList() {
    navigate('Minhas Campanhas')
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputSearchContainer}>
        <InputContainer
          label="Usuário"

        >
          <TextInput
            placeholder="Digite o nome do usuário"
            enabled={true}
            style={styles.textInput}
          />
        </InputContainer>
      </View>

    </View>
  )
}
