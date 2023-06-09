import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import ConfigProvider from '#/providers/ConfigProvider'
import ThemeProvider from '#/providers/ThemeProvider'
import RootScreen from '#/screens/_index'
import SettingsScreen from '#/screens/settings/_index'
import AccountScreen from '#/screens/settings/account'
import FontSizeScreen from '#/screens/settings/font-size'
import SessionProvider from '#/providers/SessionProvider'

const Stack = createNativeStackNavigator()

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Setting' component={SettingsScreen} />
      <Stack.Screen name='Account' component={AccountScreen} />
      <Stack.Screen name='FontSize' component={FontSizeScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <SessionProvider>
      <ConfigProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Home' component={RootScreen} />
              <Stack.Screen name='Settings' component={SettingStack} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </ConfigProvider>
    </SessionProvider>
  )
}

export default App
