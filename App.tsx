import { StatusBar } from 'expo-status-bar'
import React from 'react';


import { MainStackNavigator } from './src/Routes/MainStackNavigator'
import {AppLoading} from 'expo'
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo'
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from './src/theme/theme';
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_400Regular
  })
  if(!fontsLoaded){
    return <AppLoading />
  }else{
    return (
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MainStackNavigator />
          <StatusBar style="inverted" backgroundColor="#000"  />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}