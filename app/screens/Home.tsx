import { StyleSheet, VirtualizedList, RefreshControl } from 'react-native'
import { Card, Button, Text } from '@rneui/themed'
import Layout from '@Components/layout'
import { global } from '@Styles/global'
import { useState, useEffect } from 'react'
import { Icons } from '@Hooks/icon.hook'
import useApi from '@Hooks/useApi'
import { API } from '@Api'
import { HeadlinesProps } from '@Types/Props'
import dayjs from 'dayjs'
import Search from '@Components/SearchBar'
import uuid from 'react-native-uuid'
import PlaceHolder from '@Components/PlaceHolder'

const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState('')
  const [pages, setPages] = useState(1)
  // const [isLoading, setIsLoading] = useState(false)
  const { data, isLoading, mutate } = useApi({
    URL: API.GET_HEADLINES('en', pages, 10),
    options: {
      method: 'GET'
    }
  })

  const [headlines, setHeadlines] = useState<HeadlinesProps[]>([])

  useEffect(() => {
    if (data) {
      setHeadlines(prevHeadlines => [...prevHeadlines, ...data.articles])
    }
  }, [data, pages])

  const handleRefresh = async () => {
    try {
      // setIsLoading(true)
      setPages(1)
    } catch (error) {
      console.log(error)
    }
    // setIsLoading(false)
  }

  const handleEndReached = () => (
    setPages(prevPages => prevPages + 1)
  )

  return (
    <Layout>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} setHeadlines={setHeadlines} />
      <Text style={global.title}>Headlines</Text>
      {
        true
          ? <PlaceHolder rows={10} />
          :
          <VirtualizedList
            keyExtractor={() => uuid.v4()?.toString()}
            data={headlines}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={handleEndReached}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} tintColor='#252525' />
            }
            getItemCount={() => headlines.length}
            getItem={(data, index) => data[index]}
            renderItem={({ item: news }) => (
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
                    uri: `${news.urlToImage ? news.urlToImage : 'https://fakeimg.pl/300x200/CCC'}`
                  }}
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
            )}
          />
      }
    </Layout >
  )
}

export default HomeScreen

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
