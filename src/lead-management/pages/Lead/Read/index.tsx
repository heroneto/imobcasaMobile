import React, { useCallback } from 'react'
import { View, Text, Image, Linking, RefreshControl } from 'react-native'
import styles from './styles'
import HeaderActions from '@lead-management/components/HeaderActions'
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


import WhatsAppIcon from '@commons/assets/icons/WhatsApp.png'
import colors from '@core/theme/colors'
import FormPageHeader from '@lead-management/components/HeaderFormContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import LeadStatus from './components/LeadStatus'
import ButtonContainer from '@lead-management/components/ButtonContainer'
import ItemDetails from '@lead-management/components/ItemDetails'
import { LeadDetails } from '@core/store/ducks/lead/leadDetails/types'
import { selectActiveLeadTask } from '@core/store/ducks/lead/leadDetails/selectors'
import { dateFormat, dateTimeFormat } from '@commons/utils'
import LoadingBanner from '@lead-management/components/LoadingBanner'
import Typography from '@lead-management/components/Typography'
import { useSelector } from 'react-redux'
import {Task} from '@core/store/ducks/lead/leadDetails/types'

interface LeadViewProps {
  data: LeadDetails | null,
  loading: boolean,
  error: boolean,
  getLeadDetails(id: string): void,
  id: string
}

const LeadView: React.FC<LeadViewProps> = ({ data, id, loading, error, getLeadDetails }) => {
  const { navigate } = useNavigation()
  const [refreshing, setRefreshing] = React.useState<boolean>(false)

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    getLeadDetails(id)
    setRefreshing(false)

  }, []);

  const handleToWhatsApp = React.useCallback(() => {
    Linking.openURL(`whatsapp://send?phone='+55'${data?.phone}`)
  }, [data])

  function handleNavigateToEditPage() {
    navigate('Edição de Lead', { leadid: id })
  }

  const activeTask = useSelector(selectActiveLeadTask)

  const handleLeadStatusLevel = (task: Task | undefined, lead: LeadDetails) => {
    if(!task){
      return 'error'
    }

    const now = new Date().getTime()
    const taskDate = new Date(task.startdate).getTime()

    if(now > taskDate){
      return 'error'
    }

    if(now < taskDate){
      return 'info'
    }


  
    if(lead.negociationCompletedAt){
      const negociationCompletedAt = new Date(lead.negociationCompletedAt).getTime()
      if(negociationCompletedAt > now){
        return 'success'
      }
    }

    return 'neutral'
   }

   const handleLeadStatusTitle = (task: Task | undefined, lead: LeadDetails) => {
    if(!task){
      return 'Nenhuma atividade oO'
    }

    const now = new Date().getTime()
    const taskDate = new Date(task.startdate).getTime()

    if(now > taskDate){
      return `${task.taskTypeData.name} - Atrasado`
    }

    if(now < taskDate){
      return `${task.taskTypeData.name} - Pendente`
    }

    if(lead.negociationCompletedAt){
      const negociationCompletedAt = new Date(lead.negociationCompletedAt).getTime()
      if(negociationCompletedAt > now){
        return 'success'
      }

   }

    return ""
   }

   const handleLeadStatusDetails = (task: Task | undefined, lead: LeadDetails) => {
    if(!task){
      return 'Registre uma atividade para não perder novos Leads'
    }

    if(task.startdate){
      return dateFormat(new Date(task.startdate).toString(), "DD [de] MMMM [de] YYYY [às] hh:mm")
    }

    
    if(lead.negociationCompletedAt){
      if(lead.negociationCompletedAt > new Date()){
        return 'Este Lead já está com negócio fechado, não há atividades para serem realizadas'
      }
    }

    return ""
   }


  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <LoadingBanner 
            visible={loading}
            text="Carregando"
          />

        {data &&
          !loading &&
          !error && (
            <>
              <View style={styles.contentContainer}>
                <View style={styles.leadHeaderGroup}>
                  <Text style={styles.leadName}>{data?.name}</Text>
                </View>

                <View style={styles.leadHeaderGroup}>
                  <View style={styles.leadActionsContainer}>
                    <ButtonContainer position="left">
                      <TouchableOpacity
                        style={styles.button}
                        onPress={handleNavigateToEditPage}
                      >
                        <Text style={styles.buttonText}>Editar</Text>
                      </TouchableOpacity>
                    </ButtonContainer>
                    <ButtonContainer backgroundColor={colors.whatsapp} position="right">
                      <TouchableOpacity
                        style={styles.whatsAppButton}
                        onPress={handleToWhatsApp}
                      >
                        <Image
                          source={WhatsAppIcon}
                          style={styles.whatsappIcon}
                        />
                      </TouchableOpacity>
                    </ButtonContainer>
                  </View>
                </View>

                <View style={styles.leadHeaderGroup}>                 
                  <LeadStatus
                    title={handleLeadStatusTitle(activeTask, data)}
                    details={handleLeadStatusDetails(activeTask, data)}
                    statusLevel={handleLeadStatusLevel(activeTask, data)}
                    taskId={data.id}
                    pressable={activeTask ? true : false}
                  />
                </View>

                <View style={styles.leadHeaderGroup}>
                  <Text style={styles.leadHeaderGroupTitle}>Defina seu próximo passo</Text>
                  <View style={styles.leadNextStepsContainer}>
                    <ButtonContainer position="left">
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => { }}
                      >
                        <Text style={styles.buttonStepText}>Agendar Atividade</Text>
                      </TouchableOpacity>
                    </ButtonContainer>
                    <ButtonContainer position="middle">
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => { }}
                      >
                        <Text style={styles.buttonStepText}>Negócio Fechado</Text>
                      </TouchableOpacity>
                    </ButtonContainer>
                    <ButtonContainer position="right">
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => { }}
                      >
                        <Text style={styles.buttonStepText}>Arquivar Lead</Text>
                      </TouchableOpacity>
                    </ButtonContainer>
                  </View>
                </View>

              </View>
              <View style={styles.contentContainer}>
                <ItemDetails
                  title="Dados do Lead"
                  itens={[
                    {
                      category: "Nome",
                      value: data.name
                    },
                    {
                      category: "Telefone",
                      value: data.phone
                    },
                    {
                      category: "Status",
                      value: data.statusData.name
                    },
                    {
                      category: "Data do cadastro",
                      value: dateTimeFormat(data.createdAt)
                    },
                    {
                      category: "Data da última alteração",
                      value: dateTimeFormat(data.updatedAt)
                    }
                  ]}
                />
                <ItemDetails
                  title="Fonte"
                  itens={[
                    {
                      category: "Fonte",
                      value: data.sourceData.name
                    },
                    {
                      category: "Campanha",
                      value: data.formData.name
                    }
                  ]}
                />
                <ItemDetails
                  title="Responsável"
                  itens={[
                    {
                      category: "Nome",
                      value: data.ownerData.fullName
                    }
                  ]}
                />
              </View>
              <View style={styles.contentContainer}>
                <View style={styles.contentHeader}>
                  <View style={styles.headerLine} />
                  <Text style={styles.headerTitle}>Atividades</Text>
                  <View style={styles.headerLine} />
                </View>
                <View style={styles.leadActivityList}>
                  {data.tasks.length === 0 &&
                  (
                    <Typography 
                      align="center"
                      color={colors.textInput}
                      font="primaryRegular"
                      size="s"
                      text="Não existe histórico de tarefas para este Lead"                      

                    />
                  )}
                  {data.tasks.length > 0 &&
                  data.tasks.map(task => {
                    return (
                      <LeadStatus
                        title={handleLeadStatusTitle(task, data)}
                        details={`${task.ownerData.fullName} | Atividade criada | ${task.taskTypeData.description}`} 
                        // "Heron Eto | Atividade criada | Cobrar cliente -> José da Silva"
                        statusLevel="neutral"
                        taskId={task.id}
                        pressable={false}
                        key={task.id}
                    />
                    )
                  })}
                </View>
              </View>

            </>
          )}


      </ScrollView>

    </View>
  )
}

export default LeadView