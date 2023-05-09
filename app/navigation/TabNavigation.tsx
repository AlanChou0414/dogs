import { Icons } from '@Hooks/icon.hook'
import { PATH } from '@Path'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'

import HomeScreen from '@Screens/Home'
import { SettingStack } from '@Navigation/StackNavigation'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={PATH.home}
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#252525'
      }}
    >
      <Tab.Screen
        name={PATH.home}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => Icons.HomeIcon(30, color),
          tabBarLabelStyle: styles.tabBarTitle,
        }}
      />
      <Tab.Screen
        name={PATH.setting}
        component={SettingStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => Icons.SettingIcon(30, color),
          tabBarLabel:'settings',
          tabBarLabelStyle: styles.tabBarTitle
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 100
  },
  tabBarTitle: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase'
  }
})