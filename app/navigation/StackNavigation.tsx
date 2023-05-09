import { PATH } from '@Path'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet } from 'react-native'

import SettingScreen from '@Screens/Setting'

const Stack = createStackNavigator()

export const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PATH.settingPage}
        component={SettingScreen}
        options={{
          headerTitle: 'settings',
          headerTitleStyle: styles.headerTitle
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase'
  }
})