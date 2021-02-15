import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '@lead-management/components/ItemCard'
import styles from './styles'
import { ListUser } from '@core/store/ducks/listUser/types'
import { useNavigation } from '@react-navigation/native'

import { setSelectedUser } from '@core/services/storage'


interface ActiveUsersProps {
  users: ListUser[]
}

const ActiveUsers: React.FC<ActiveUsersProps> = ({ users }) => {
  const { navigate } = useNavigation()
  
  function onPress(user : ListUser) {
    setSelectedUser(user)

    navigate("Usuário", {
      userid: user
    })
  }


  return (
    <ScrollView style={styles.contentContainer}>
      {users.map(user => {
        return (
          <ItemCard
            level="neutral"
            topText={user.fullName}
            middleText={user.email}
            pageToNavigate="Usuário"
            navigationParameters={{
              userid: user.id
            }}
            key={user.id}
            onPressFunc={() => onPress(user)}
          />
        )
      })}

    </ScrollView>
  )
}

export default ActiveUsers