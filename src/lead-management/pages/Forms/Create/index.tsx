import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { Header } from '@lead-management/components/Header'

import StartCreate from './pages/Start'
import FormList from './pages/FormList'

export type StackParameters = {
  "startCreate": undefined
  "facebookFormList": undefined,
}

const Stack = createStackNavigator<StackParameters>()

const CreateFormStackNavivagor = () => (
  <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
    initialRouteName="startCreate"
  >

    <Stack.Screen
      name="startCreate"
      component={StartCreate}
      options={{
        header: props => <Header {...props} title="Vincular novo formulário" primaryStyle={false} showSearchButton={false} />,
        headerShown: true
      }}
    />

    <Stack.Screen
      name="facebookFormList"
      component={FormList}
      options={{
        header: props => <Header {...props} title="Vincular novo formulário" primaryStyle={false} showSearchButton={false} />,
        headerShown: true
      }}
    />

  </Stack.Navigator>
)


export default CreateFormStackNavivagor