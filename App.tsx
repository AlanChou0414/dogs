import RootApp from "./app/index"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SWRConfig } from "swr"

const swrConfig = {
  revalidateOnFocus: false,
  shouldRetryOnError: false
}

const App = () => (
  <SWRConfig value={swrConfig}>
    <SafeAreaProvider>
      <RootApp />
    </SafeAreaProvider>
  </SWRConfig>
)

export default App