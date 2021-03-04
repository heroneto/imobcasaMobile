import colors from '@core/theme/colors'
import Typography from '@lead-management/components/Typography'
import React from 'react'
import { View, Text, RefreshControl, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'

import * as facebookFormsActions from '@core/store/ducks/facebookForms/actions'
import {
  facebookFormStateSelector,
  afterSelector
} from '@core/store/ducks/facebookForms/selectors'

import {
  formStateSelector
} from '@core/store/ducks/forms/selectors'
import * as formActions from '@core/store/ducks/forms/actions'


import { FacebookForm } from '@core/store/ducks/facebookForms/types'
import { ScrollView } from 'react-native-gesture-handler'
import LoadingBanner from '@lead-management/components/LoadingBanner'
import ItemCard from '@lead-management/components/ItemCard'

import FacebookIcon from "@commons/assets/icons/facebook.png"
import StandardButton from '@lead-management/components/StandardButton'
import ModalFeedback from '@lead-management/components/ModalFeedback'
import { useNavigation } from '@react-navigation/native'
import ModalOptions from '@lead-management/components/ModalOptions'


const FormList = () => {
  const { goBack, navigate } = useNavigation()
  const dispatch = useDispatch()
  const { data, error, loading, response } = useSelector(facebookFormStateSelector)
  const { loading: formStateLoading, createdForm } = useSelector(formStateSelector)
  const [forms, setForms] = React.useState<FacebookForm[]>([])
  const [loadMore, setLoadMore] = React.useState<boolean>(false)
  const after = useSelector(afterSelector)
  const [showOptionsModal, setShowOptionsModal] = React.useState<boolean>(false)
  const [optionsModalTitle, setOptionsModalTitle] = React.useState<string>("")
  const [loadingText, setLoadingText] = React.useState<string>("")
  const [formSelected, setFormSelected] = React.useState<{
    name: string,
    fbFormId: string
  }>()

  React.useEffect(() => {
    dispatch(facebookFormsActions.listFacebookForms())
    setLoadingText("Encontrando formulários")
  }, [])

  React.useEffect(() => {
    if (data.forms.length < 10) {
      handleLoadMoreButton(data.after)
    } else {
      setForms(data.forms)
      setLoadMore(data.next.length > 0)
      setLoadingText("Encontrando formulários")
    }
  }, [data])

  React.useEffect(() => {
    if(createdForm && !error){
      navigate("Form", { id: createdForm.id })
    }
  }, [createdForm, formStateLoading, error])

  const onErrorSubmit = React.useCallback(() => {
    dispatch(facebookFormsActions.resetState())
    goBack()
  }, [])

  const onRefresh = React.useCallback(() => {
    dispatch(facebookFormsActions.listFacebookForms())
  }, [])

  const handleLoadMoreButton = React.useCallback((after) => {
    dispatch(facebookFormsActions.loadMoreFacebookForms(after))
  }, [])

  const handleItem = React.useCallback((name: string, fbFormId: string) => {
    setOptionsModalTitle(`O Formulário ${name} será cadastrado. Deseja continuar?`)
    setFormSelected({
      name,
      fbFormId
    })
    setShowOptionsModal(true)
  }, [])

  const createForm = React.useCallback((name: string | undefined, fbFormId: string | undefined) => {

    if (name && fbFormId) {
      setLoadingText("Cadastrando formulário")
      const data = {
        name,
        fbFormId,
        active: true,
        fbCreatedDate: new Date(),
      }
      dispatch(formActions.create(data))
      setShowOptionsModal(false)
    }

  }, [])






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
        visible={loading || formStateLoading}
        text={loadingText}
      />

      {!error && (
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
                onPressFunc={() => handleItem(form.name, form.id)}
                key={idx}
                topText={form.name}
              />
            )
          })}
          <View style={styles.buttonContainer}>
            <StandardButton
              text="Carregar mais"
              onPress={() => handleLoadMoreButton(after)}
              disabled={!loadMore}
              variant={loadMore ? "normal" : "disabled"}
            />
          </View>
        </View>
      )}
      <ModalFeedback
        modalVisible={error}
        closeModalFunc={onErrorSubmit}
        text={response}
      />
      <ModalOptions
        text={optionsModalTitle}
        closeModalFunc={() => setShowOptionsModal(false)}
        yesFunc={() => createForm(formSelected?.name, formSelected?.fbFormId)}
        yesLabel="Sim"
        noLabel="Não, voltar"
        noFunc={() => setShowOptionsModal(false)}
        modalVisible={showOptionsModal}
      />
    </ScrollView>
  )
}


export default FormList