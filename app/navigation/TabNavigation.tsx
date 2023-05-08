import { PATH } from '@Path'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '@Screens/Home'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false
        }}
        name={PATH.home}
        component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigation