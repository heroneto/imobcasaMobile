import React, { useState } from 'react'
import { View, Text, Image, RefreshControl } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '@lead-management/components/ItemCard'
import styles from './styles'

import facebookIcon from '@commons/assets/icons/facebook.png'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@core/store/ducks/forms/types'
import { fromPairs } from 'lodash'

interface activeCampanigsProps {
  data: Form[],
  requestList(): void,
  loading: boolean,
  error: boolean,
}

const ActiveForms: React.FC<activeCampanigsProps> = ({ data, requestList, error, loading }) => {
  const { navigate } = useNavigation()

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl 
          refreshing={loading}
          onRefresh={requestList}
        />
      }
    >
      {data.map(form => {
        return (
          <ItemCard
            key={form.id}
            level="neutral"
            topText={form.name}
            topIcon={<Image source={facebookIcon} style={styles.socialIcon} />}
            middleText=""
            onPressFunc={() => navigate("Form", {id: form.id})}
          />
        )
      })}


    </ScrollView>
  )
}

export default ActiveForms