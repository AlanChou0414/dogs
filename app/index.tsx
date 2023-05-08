import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Layout from '@Components/layout'
import { global } from '@Styles/global'
import { API } from '@Api'

export default function RootApp() {
  return (
    <Layout>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Headlines</Text>

      </ScrollView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: global.title,
    textAlign: 'center',
    textTransform: 'uppercase'
  }
})
