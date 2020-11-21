import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import LeadsView from '../pages/Lead/List'
import TaskView from '../pages/Task/Read'
import NewTaskView from '../pages/Task/Create'
import LeadView from '../pages/Lead/Read'
import LeadEdit from '../pages/Lead/Edit'
import SearchPage from '../pages/Lead/Search'
import TaskEdit from '../pages/Task/Edit'
import UsersList from '../pages/User/List'
import UserEdit from '../pages/User/Edit'
import UserView from '../pages/User/Read'
import UserPasswordChange from '../pages/User/ResetPassword'
import NewUser from '../pages/User/Create'
import NewCampaign from '../pages/Campaign/Create'
import NewLead from '../pages/Lead/Create'
import Campaigns from '../pages/Campaign/List'
import CampaignView from '../pages/Campaign/Read'
import CampaignEdit from '../pages/Campaign/Edit'
import { Header } from '../Components/Header'


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
        component={UsersList}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={true} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Edição de Usuário"
        component={UserEdit}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Usuário"
        component={UserView}
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
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  )
}
