import React from 'react'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import theme from './src/styles/theme'

import { Login } from './src/pages/Login'
import { Main } from './src/pages/Main'

const { Navigator, Screen } = createNativeStackNavigator();

export function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />

      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Screen name="Login" component={Login} />
          <Screen name="Main" component={Main}/>
        </Navigator>
      </NavigationContainer>

    </ThemeProvider>
  )
}
