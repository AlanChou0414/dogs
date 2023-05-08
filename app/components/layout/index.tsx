import { ChildrenProps } from '@Types/Props'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {children}
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15
  }
})