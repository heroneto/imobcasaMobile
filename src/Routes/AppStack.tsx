import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import LoginView from '../pages/Login'
import HomeView from '../pages/Home'
import LeadsView from '../pages/Leads'
import NewLeadView from '../pages/NewLead'
import TasksView from '../pages/Tasks'
import NewTaskView from '../pages/NewTask'
import LeadView from '../pages/LeadView'
import LeadEdit from '../pages/LeadEdit'
const { Navigator, Screen } = createStackNavigator()


function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <Screen name="login" component={LoginView} />
                <Screen name="home" component={HomeView} />
                <Screen name="leads" component={LeadsView} />
                <Screen name="newlead" component={NewLeadView} />
                <Screen name="tasks" component={TasksView} />
                <Screen name="newtask" component={NewTaskView} />
                <Screen name="leadview" component={LeadView} />
                <Screen name="leadedit" component={LeadEdit} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack