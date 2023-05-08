import TabNavigation from "@Navigation/TabNavigation"
import { NavigationContainer } from "@react-navigation/native"


export default function RootApp() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}