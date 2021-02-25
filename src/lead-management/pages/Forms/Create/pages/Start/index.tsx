import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { View } from 'react-native'
import StandardButton from '@lead-management/components/StandardButton'
import styles from './styles'
import Typography from '@lead-management/components/Typography'
import colors from '@core/theme/colors'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'


interface Screens {
  text: "facebookFormList"
}



export default function StartCreate() {
  const { navigate } = useNavigation()  

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <View style={styles.titleContainer}>
        <Typography
          color={colors.textTitle}
          font="primaryRegular"
          size="lg"
          text="Selecione como deseja encontrar o formulário para integração"
          align="center"
        />
      </View>
      <View>

      </View>

      <View style={styles.ButtonsContainer}>
        <StandardButton
          text="Listar todas"
          onPress={() => { navigate("facebookFormList") }}
          variant="normal"
        />
        <StandardButton
          text="Buscar pelo nome"
          onPress={() => { }}
          variant="disabled"
          disabled={true}        />
      </View>
    </ScrollView>
  )
}

