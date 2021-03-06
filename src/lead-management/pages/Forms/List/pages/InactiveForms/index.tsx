import React from 'react'
import { Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ItemCard from '@lead-management/components/ItemCard'
import styles from './styles'

import facebookIcon from '@commons/assets/icons/facebook.png'
import { Form } from '@core/store/ducks/forms/types'
import { useNavigation } from '@react-navigation/native'

interface InactiveFormsProps {
  data: Form[]
}

const  InactiveForms : React.FC<InactiveFormsProps> = ({data}) => {
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

export default InactiveForms