import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '@lead-management/components/ItemCard'
import styles from './styles'

import facebookIcon from '@commons/assets/icons/facebook.png'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@core/store/ducks/forms/types'
import { fromPairs } from 'lodash'

interface activeCampanigsProps {
  data: Form[]
}

const ActiveForms: React.FC<activeCampanigsProps> = ({ data }) => {
  const { navigate } = useNavigation()
  return (
    <ScrollView style={styles.container}>
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