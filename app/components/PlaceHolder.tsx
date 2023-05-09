import { StyleSheet, View, ScrollView } from 'react-native'
import { Skeleton, LinearProgress } from '@rneui/themed'
import { PlaceHolderProps } from '@Types/Props'

const PlaceHolder = ({ rows }: PlaceHolderProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        Array.from({ length: rows }).map((item, index) => (
          <View key={index} style={styles.container}>
            <Skeleton animation='pulse' style={styles.skeletonTitle} width={300} height={30} />
            <Skeleton animation='pulse' style={styles.skeletonImg} width={300} height={200} />
            <Skeleton animation='pulse' style={styles.skeletonText} width={300} height={10} />
            <Skeleton animation='pulse' style={styles.skeletonText} width={300} height={10} />
            <Skeleton animation='pulse' style={styles.skeletonButton} width={300} height={35} />
          </View>
        ))
      }
    </ScrollView>
  )
}

export default PlaceHolder

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20
  },
  skeletonTitle: {
    backgroundColor: '#e3e3e3',
    marginVertical: 5,
  },
  skeletonImg: {
    backgroundColor: '#e3e3e3',
    marginVertical: 5,
    borderRadius: 10
  },
  skeletonText: {
    backgroundColor: '#e3e3e3',
    marginTop: 5
  },
  skeletonButton: {
    backgroundColor: '#e3e3e3',
    marginTop: 10,
    borderRadius: 10
  }
})