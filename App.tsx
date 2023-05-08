import RootApp from "./app/index"
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => (
  <SafeAreaProvider>
    <RootApp />
  </SafeAreaProvider>
)

export default App