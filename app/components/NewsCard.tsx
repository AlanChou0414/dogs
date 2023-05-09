import { StyleSheet, Text } from 'react-native'
import { Card, Button } from '@rneui/themed'
import dayjs from 'dayjs'
import { Icons } from '@Hooks/icon.hook'
import { NewsArticleProps } from '@Types/Props'



const NewsArticle = ({ news }: NewsArticleProps) => {
  return (
    <Card containerStyle={styles.newsItems}>
      <Card.Title style={styles.newsTitle}>{news.source.name}</Card.Title>
      <Card.FeaturedSubtitle style={styles.newsTime}>
        <Text>
          {dayjs(news.publishedAt).format('YYYY-MM-DD HH:mm dddd')}
        </Text>
      </Card.FeaturedSubtitle>
      <Card.Title>{news.title}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={styles.newsImage}
        source={{
          uri: `${news.urlToImage ? news.urlToImage : 'https://fakeimg.pl/300x200/CCC'}`,
          cache: 'force-cache',
        }}
        resizeMode='cover'
      />
      <Text style={styles.newsContent} numberOfLines={2}>
        {news.content}
      </Text>
      <Button
        icon={Icons.MoreIcon(20, '#fff')}
        title='MORE'
        titleStyle={{ fontWeight: '700' }}
        loading={false}
        buttonStyle={styles.moreButton}
      />
    </Card>
  )
}

export default NewsArticle


const styles = StyleSheet.create({
  newsItems: {
    borderRadius: 20,
    marginVertical: 20
  },
  newsTitle: {
    fontSize: 28,
    textTransform: 'uppercase'
  },
  newsTime: {
    textAlign: 'center',
    color: '#252525'
  },
  newsImage: {
    borderRadius: 10,
  },
  newsContent: {
    marginHorizontal: 15,
    marginVertical: 10,
    fontSize: 18,
    color: '#ccc'
  },
  moreButton: {
    paddingVertical: 10,
    backgroundColor: '#ccc',
    borderRadius: 10
  },
})