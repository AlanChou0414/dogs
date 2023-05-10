import { StyleSheet, View, ScrollView } from 'react-native'
import { Skeleton, LinearProgress } from '@rneui/themed'
import { PlaceHolderProps } from '@Types/Props'

const PlaceHolder = ({ rows }: PlaceHolderProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        Array.from({ length: rows }).map((item, index) => (
          <View key={index} style={styles.container}>
            <Skeleton animation='pulse' style={styles.skeletonImg} width={350} height={250} />
            <Skeleton animation='pulse' style={styles.skeletonText} width={350} height={15} />
            <Skeleton animation='pulse' style={styles.skeletonText} width={350} height={15} />
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
  skeletonImg: {
    backgroundColor: '#e3e3e3',
    marginVertical: 3,
    borderRadius: 10
  },
  skeletonText: {
    backgroundColor: '#e3e3e3',
    marginVertical: 5,
  }
})