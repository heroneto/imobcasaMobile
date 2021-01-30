import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { View, Text } from 'react-native'
import InputContainer from '@components/InputContainer'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import StandardButton from '@components/StandardButton'
import { Ionicons } from '@expo/vector-icons'
import colors from '@theme/colors'
import usersAPI from './usetsTest.json'

var searchTimeout: any = null

interface UserListProps {
  name: string,
  id: string
}

const JoinCampaignUsers = () => {
  const { navigate } = useNavigation()
  const [userSearchName, setUserSearchName] = useState<string>("")
  const [ userList, setUserList ] = useState<UserListProps[]>(usersAPI)

  function moveUserUp(pressedIdx: number){
    console.log("Movendo usuário para cima "+pressedIdx)

    const newUserList = userList.reduce((acc: Array<UserListProps>, user: UserListProps, idx) => {
      if(idx == pressedIdx){
        acc.push(userList[idx-1])
      }else if(idx == pressedIdx-1){
        acc.push(userList[idx+1])
      }else {
        acc.push(user)
      }
      return acc
    },[])

    setUserList(newUserList)

  }

  function moveUserDown(pressedIdx: number){
    console.log("Movendo usuário para baixo "+pressedIdx)

    const newUserList = userList.reduce((acc: Array<UserListProps>, user: UserListProps, idx) => {
      if(idx == pressedIdx){
        acc.push(userList[idx+1])
      }else if(idx == pressedIdx+1){
        acc.push(userList[idx-1])
      }else {
        acc.push(user)
      }
      return acc
    },[])

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

  function handleNavigateToCampaignSelectPage() {
    navigate('confirmcampaigncreation')
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.inputGroupContainer}>
            <InputContainer
              inputRadiusStyle={{
                bottomLeft: true,
                bottomRight: true,
                topLeft: true,
                topRight: true
              }}
              label="Nome do usuário"
            >
              <TextInput placeholder="Digite o nome da usuário..." value={userSearchName} onChangeText={text => handleSearch(text)} />
            </InputContainer>
          </View>

          <View style={styles.selectedUsersContainer}>
              <Text style={styles.selectedUsersTitle}>
                Usuários selectionados
              </Text>
              {userList.map((user, idx) => {
                const upDisabled = idx === 0 ? true : false
                const downDisabled = idx === userList.length-1 ? true : false
                
                return (
                  <View key={user.id} style={styles.userContainer}>
                    <View style={styles.userMoveActionsContainer}>
                      <TouchableOpacity disabled={upDisabled} onPress={() => moveUserUp(idx)} style={styles.moveUserButtonUp}>
                        <Ionicons name="ios-arrow-up" size={24} color={upDisabled ? colors.disabledButton : "black"} />
                      </TouchableOpacity>
                      <TouchableOpacity disabled={downDisabled} onPress={() => moveUserDown(idx)} style={styles.moveUserButtonDown}>
                        <Ionicons name="ios-arrow-down" size={24} color={downDisabled ? colors.disabledButton : "black"} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.userNameContainer}>
                      <Text style={styles.userName}>{user.name}</Text>
                    </View>
                    <View style={styles.removeUserContainer}>
                      <TouchableOpacity style={styles.removeUserButton}>
                        <Ionicons name="md-trash" size={24} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>
                )
              })}
              

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
      </ScrollView>
    </View>
  )
}

export default JoinCampaignUsers