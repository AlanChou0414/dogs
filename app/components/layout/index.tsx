import { ChildrenProps } from '@Types/Props'
import { StatusBar, useColorScheme } from 'react-native'
import { StyleSheet, View } from 'react-native'

const Layout = ({ children }: ChildrenProps) => {
  const Theme = useColorScheme()

  return (
    <View style={styles.container}>
      <StatusBar barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'} />
      {children}
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  }
})