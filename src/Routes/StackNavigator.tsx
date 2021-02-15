import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import LeadsView from '@lead-management/pages/Lead/List'
import TaskView from '@lead-management/pages/Task/Read'
import NewTaskView from '@lead-management/pages/Task/Create'
import LeadView from '@lead-management/pages/Lead/Read'
import LeadEdit from '@lead-management/pages/Lead/Edit'
import SearchPage from '@lead-management/pages/Lead/Search'
import TaskEdit from '@lead-management/pages/Task/Edit'
import UsersList from '@lead-management/pages/User/List'
import UserEdit from '@lead-management/pages/User/Edit'
import UserView from '@lead-management/pages/User/Read'
import UserPasswordChange from '@lead-management/pages/User/ResetPassword'
import NewUser from '@lead-management/pages/User/Create'
import NewCampaign from '@lead-management/pages/Campaign/Create'
import NewLead from '@lead-management/pages/Lead/Create'
import Campaigns from '@lead-management/pages/Campaign/List'
import CampaignView from '@lead-management/pages/Campaign/Read'
import CampaignEdit from '@lead-management/pages/Campaign/Edit'
import { Header } from '@lead-management/components/Header'

import UserListContainer from '@lead-management/containers/UserList'
import UserDetailsContainer from "@lead-management/containers/UserDetails"
import UserEditContainer from '@lead-management/containers/UserEditContainer'

const Stack = createStackNavigator()



export const UserStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      initialRouteName="Meus Usuários"
    >
      <Stack.Screen
        name="Meus Usuários"
        component={UserListContainer}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={true} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Edição de Usuário"
        component={UserEditContainer}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Usuário"
        component={UserDetailsContainer}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Novo Usuário"
        component={NewUser}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Reset de Senha"
        component={UserPasswordChange}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )

}

export const CampaignStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="Minhas Campanhas"
    >
      <Stack.Screen
        name="Minhas Campanhas"
        component={Campaigns}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={true} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Nova Campanha"
        component={NewCampaign}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Campanha"
        component={CampaignView}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Edição de Campanha"
        component={CampaignEdit}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )
}

export const LeadStackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
      initialRouteName="Meus Leads"
    >
      <Stack.Screen
        name="Meus Leads"
        component={LeadsView}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={true} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Novo Lead"
        component={NewLead}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Lead"
        component={LeadView}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Edição de Lead"
        component={LeadEdit}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Tarefa"
        component={TaskView}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Nova Tarefa"
        component={NewTaskView}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Edição de Tarefa"
        component={TaskEdit}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Busca de Leads"
        component={SearchPage}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} showSearchButton={false} />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}
