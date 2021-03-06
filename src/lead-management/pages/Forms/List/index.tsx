import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles'
import FloatButton from '@lead-management/components/FloatButton'
import ActiveForms from './pages/ActiveForms'
import InactiveForms from './pages/InactiveForms'
import { Form } from '@core/store/ducks/forms/types';


const Tab = createMaterialTopTabNavigator();

interface FormListProps {
  activeForms: Form[],
  inactiveForms: Form[]
}

const FormList : React.FC<FormListProps> = ({activeForms, inactiveForms}) => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="0"
        tabBarOptions={{
          style: styles.navigatorContainer,
          activeTintColor: "#FFF",
          indicatorStyle: {
            backgroundColor: 'rgba(0,0,0,.5)',
            height: "100%",
          },
          labelStyle: {
            fontFamily: 'Poppins_600SemiBold',
            fontSize: 14,
            margin: 0,
          },
          tabStyle: {
            padding: 5,
          },
        }}
      >
        <Tab.Screen
          name="0"
          children={
            () => <ActiveForms data={activeForms} />
          }
          options={{
            tabBarLabel: "Ativadas",
          }}
        />
        <Tab.Screen
          name="1"
          children={
            () => <InactiveForms data={inactiveForms} />
          }
          options={{
            tabBarLabel: "Inativadas"
          }}
        />
      </Tab.Navigator>

      <FloatButton
        pageToNavigate="FormAdd"
      />
    </View>
  )
}


export default FormList