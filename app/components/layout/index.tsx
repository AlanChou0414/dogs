import { ChildrenProps } from '@Types/Props'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, SafeAreaView } from 'react-native'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.inner}>
        {children}
      </SafeAreaView>
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#252525'
  },
  inner: {
    flex: 1,
    marginHorizontal: 15
  }
})