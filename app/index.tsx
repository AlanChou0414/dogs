import TabNavigation from "@Navigation/TabNavigation"
import { NavigationContainer } from "@react-navigation/native"
import 'react-native-gesture-handler'


export default function RootApp() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}