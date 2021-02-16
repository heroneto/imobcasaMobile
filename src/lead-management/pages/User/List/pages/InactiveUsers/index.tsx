import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '@lead-management/components/ItemCard'
import styles from './styles'
import { ListUser } from '@core/store/ducks/listUser/types'
import { setSelectedUser } from '@core/services/storage'
import { useNavigation } from '@react-navigation/native'
import { RefreshControl } from 'react-native'
import { useDispatch } from 'react-redux'

import * as ListUserActions from '@core/store/ducks/listUser/actions'


interface InactiveUsersProps {
  users: ListUser[]
}


const InactiveUsers: React.FC<InactiveUsersProps> = ({ users }) => {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const [ refreshing, setRefreshing ] = React.useState<boolean>(false)

  function onPress(user: ListUser) {
    setSelectedUser(user)

    navigate("Usuário", {
      userid: user
    })
  }
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    
    await dispatch(ListUserActions.loadRequest())
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

export default InactiveUsers