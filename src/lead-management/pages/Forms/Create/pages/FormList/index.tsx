import colors from '@core/theme/colors'
import Typography from '@lead-management/components/Typography'
import React from 'react'
import { View, Text, RefreshControl, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'

import * as facebookFormsActions from '@core/store/ducks/facebookForms/actions'
import {
  facebookFormStateSelector
} from '@core/store/ducks/facebookForms/selectors'
import { FacebookForm } from '@core/store/ducks/facebookForms/types'
import { ScrollView } from 'react-native-gesture-handler'
import LoadingBanner from '@lead-management/components/LoadingBanner'
import ItemCard from '@lead-management/components/ItemCard'

import FacebookIcon from "@commons/assets/icons/facebook.png"
import StandardButton from '@lead-management/components/StandardButton'

const FormList = () => {
  const dispatch = useDispatch()
  const { data, error, loading, response } = useSelector(facebookFormStateSelector)
  const [forms, setForms] = React.useState<FacebookForm[]>([])
  const [refreshing, setRefreshing] = React.useState(false);
  const [ loadMore, setLoadMore ] = React.useState<boolean>(false)
  const [ after, setAfter ] = React.useState<string>("")

  React.useEffect(() => {
    dispatch(facebookFormsActions.listFacebookForms())
  }, [])

  React.useEffect(() => {
    setForms(data.forms)
    setLoadMore(data.next.length > 0)
  }, [data, after])

  const onRefresh = React.useCallback(() => {
    dispatch(facebookFormsActions.listFacebookForms())
  }, [])

  const handleLoadMoreButton = React.useCallback(() => {
    dispatch(facebookFormsActions.loadMoreFacebookForms(data.forms, data.after))
  }, [])

  console.log(after)

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={onRefresh}
        />
      }
    >
      <LoadingBanner
        visible={loading}
      />

      {!loading && !error && (
        <View style={styles.TitleContainer}>
          <Typography
            align="center"
            color={colors.textTitle}
            font="primaryRegular"
            size="md"
            text="Lista de formulários carregada. 
     Toque no formulário que deseja vincular usuários ou 
     toque em carregar mais para carregar 
     mais 10 formulários"
          />


          {forms.map((form, idx) => {
            return (
              <ItemCard 
                 level="info"
                 middleText={form.status}
                 topIcon={<Image source={FacebookIcon} />}
                 onPressFunc={()=>{}}
                 key={idx}
                 topText={form.name}
              />
            )
          })}
          <View style={styles.buttonContainer}>
            <StandardButton 
              text="Carregar mais"
              onPress={handleLoadMoreButton}
              disabled={!loadMore}
              variant={loadMore ? "normal" : "disabled"}
            />
          </View>
        </View>
      )}

    </ScrollView>
  )
}


export default FormList