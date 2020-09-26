import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import LoginView from '../pages/Login'
import HomeView from '../pages/Home'
import LeadsView from '../pages/Leads'
import NewLeadViewStepOne from '../pages/NewLead'
import TasksView from '../pages/Tasks'
import TaskView from '../pages/TaskView'
import NewTaskView from '../pages/NewTask'
import LeadView from '../pages/LeadView'
import LeadEdit from '../pages/LeadEdit'
import SearchPage from '../pages/SearchPage'
import TaskEdit from '../pages/TaskEdit'
import AppConfig from '../pages/AppConfig'
import UsersList from '../pages/Users/intex'
import UserEdit from '../pages/UserEdit'
import UserView from '../pages/UserView'
import UserPasswordChange from '../pages/UserPasswordChange'
const { Navigator, Screen } = createStackNavigator()


function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
            }}>
                <Screen name="login" component={LoginView} />
                <Screen name="home" component={HomeView} />
                <Screen name="leads" component={LeadsView} />
                <Screen name="newlead" component={NewLeadViewStepOne} />
                <Screen name="tasks" component={TasksView} />
                <Screen name="taskview" component={TaskView} />
                <Screen name="newtask" component={NewTaskView} />
                <Screen name="taskedit" component={TaskEdit} />
                <Screen name="leadview" component={LeadView} />
                <Screen name="leadedit" component={LeadEdit} />
                <Screen name="search" component={SearchPage} />
                <Screen name="appconfig" component={AppConfig} />
                <Screen name="users" component={UsersList} />
                <Screen name="useredit" component={UserEdit} />
                <Screen name="userview" component={UserView} />
                <Screen name="userpasswordchange" component={UserPasswordChange} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack