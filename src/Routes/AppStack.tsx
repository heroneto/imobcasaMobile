import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginView from '../pages/Login'
import LeadsView from '../pages/Leads'
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
import NewUser from '../pages/NewUser'
import MyUserEdit from '../pages/MyUserEdit'
import MyPasswordEdit from '../pages/MyPasswordEdit'
import NewCampaign from '../pages/NewCampaign/intex'
import NewLead from '../pages/NewLead'
const { Navigator, Screen } = createStackNavigator()


function AppStack(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
            }}>
                <Screen name="login" component={LoginView} />
                <Screen name="leads" component={LeadsView} />
                <Screen name="newlead" component={NewLead} />
                <Screen name="leadview" component={LeadView} />
                <Screen name="leadedit" component={LeadEdit} />
                <Screen name="taskview" component={TaskView} />
                <Screen name="newtask" component={NewTaskView} />
                <Screen name="taskedit" component={TaskEdit} />
                <Screen name="search" component={SearchPage} />
                <Screen name="appconfig" component={AppConfig} />
                <Screen name="users" component={UsersList} />
                <Screen name="useredit" component={UserEdit} />
                <Screen name="userview" component={UserView} />
                <Screen name="newuser" component={NewUser} />
                <Screen name="userpasswordchange" component={UserPasswordChange} />
                <Screen name="myuseredit" component={MyUserEdit} />
                <Screen name="mypasswordedit" component={MyPasswordEdit} />
                <Screen name="newcampaign" component={NewCampaign} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack