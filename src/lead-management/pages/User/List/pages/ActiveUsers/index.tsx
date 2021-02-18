import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '@lead-management/components/ItemCard'
import styles from './styles'
import { User } from '@core/store/ducks/users/types'
import { useNavigation } from '@react-navigation/native'
import { RefreshControl } from 'react-native'
import { setSelectedUser } from '@core/services/storage'
import { useDispatch } from 'react-redux'

import * as ListUserActions from '@core/store/ducks/users/actions'

interface ActiveUsersProps {
  users: User[]
}

const ActiveUsers: React.FC<ActiveUsersProps> = ({ users }) => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const [ refreshing, setRefreshing ] = React.useState<boolean>(false)
  function onPress(user : User) {
    setSelectedUser(user)

    navigate("Usuário", {
      id: user.id
    })
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    
    await dispatch(ListUserActions.requestUserList())
    setRefreshing(false)
    
  }, []);

  return (
    <ScrollView 
      style={styles.contentContainer}
      refreshControl={
        <RefreshControl 
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
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