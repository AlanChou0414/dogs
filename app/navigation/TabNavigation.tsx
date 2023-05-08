import { Icons } from '@Hooks/icon.hook'
import { PATH } from '@Path'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'

import HomeScreen from '@Screens/Home'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => Icons.HomeIcon(35),
          tabBarLabelStyle: styles.tabBarTitle
        }}
        name={PATH.home}
        component={HomeScreen} />
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
    color: '#252525',
    textTransform: 'uppercase'
  }
})