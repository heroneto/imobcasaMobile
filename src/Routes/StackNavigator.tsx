import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import LeadsView from '@lead-management/pages/Lead/List'
import TaskView from '@lead-management/pages/Task/Read'
import NewTaskView from '@lead-management/pages/Task/Create'
import LeadView from '@lead-management/pages/Lead/Read'
import LeadEdit from '@lead-management/pages/Lead/Edit'
import SearchPage from '@lead-management/pages/Lead/Search'
import TaskEdit from '@lead-management/pages/Task/Edit'
import CreateFormStackNavivagor from '@lead-management/pages/Forms/Create'
import NewLead from '@lead-management/pages/Lead/Create'
import FormEdit from '@lead-management/pages/Forms/AddUsers'
import { Header } from '@lead-management/components/Header'

import UserListContainer from '@lead-management/containers/UserList'
import UserDetailsContainer from "@lead-management/containers/UserDetails"
import UserEditContainer from '@lead-management/containers/UserEditContainer'
import UserResetPasswordContainer from '@lead-management/containers/UserResetPassword'
import UserCreateContainer from '@lead-management/containers/UserCreate'

import FormDetailsContainer from '@lead-management/containers/FormDetails'
import FormListContainer from '@lead-management/containers/FormList'
import FormAddUsersContainer from '@lead-management/containers/FormAddUsers'
import FormRemoveUserContainer from '@lead-management/containers/FormRemoveUsers'

import LeadListContainer from '@lead-management/containers/LeadList'

export type StackParameters = {
  "Meus Usuários": undefined
  "Edição de Usuário": { fullName: string, email: string, active: boolean, admin: boolean, username: string }
  "Usuário": { id: string }
  "Novo Usuário": undefined
  "Reset de Senha": undefined
  "FormList": undefined
  "FormAdd": undefined
  "Form": { id: string }
  "FormAddUsers": { id: string },
  "FormRemoveUsers": {id: string},
  "LeadList": undefined
  "Novo Lead": undefined
  "Lead": undefined
  "Edição de Lead": undefined
  "Tarefa": undefined
  "Nova Tarefa": undefined
  "Edição de Tarefa": undefined
  "Busca de Leads": undefined
}


const Stack = createStackNavigator<StackParameters>()


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
        initialParams={{
          active: false,
          admin: false,
          email: "",
          fullName: "",
          username: ""
        }}
      />
      <Stack.Screen
        name="Usuário"
        component={UserDetailsContainer}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
        initialParams={{
          id: ""
        }}
      />
      <Stack.Screen
        name="Novo Usuário"
        component={UserCreateContainer}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="Reset de Senha"
        component={UserResetPasswordContainer}
        options={{
          header: props => <Header {...props} title={props.scene.route.name} primaryStyle={false} />,
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )

}

export const FormStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="FormList"
    >
      <Stack.Screen
        name="FormList"
        component={FormListContainer}
        options={{
          header: props => <Header {...props} title="Formulários" primaryStyle={true} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="FormAdd"
        component={CreateFormStackNavivagor}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Form"
        component={FormDetailsContainer}
        options={{
          header: props => <Header {...props} title="Detalhes do formulário" primaryStyle={false} showSearchButton={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="FormAddUsers"
        component={FormAddUsersContainer}
        options={{
          header: props => <Header {...props} title="Adição de usuários no formulário" primaryStyle={false} showSearchButton={false} />,
          headerShown: true
        }}
      />
      <Stack.Screen
        name="FormRemoveUsers"
        component={FormRemoveUserContainer}
        options={{
          header: props => <Header {...props} title="Remoção de usuários no formulário" primaryStyle={false} showSearchButton={false} />,
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
      initialRouteName="LeadList"
    >
      <Stack.Screen
        name="LeadList"
        component={LeadListContainer}
        options={{
          header: props => <Header {...props} title="Meus Leads" primaryStyle={true} />,
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
