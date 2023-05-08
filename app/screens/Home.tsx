import { StyleSheet, View, ScrollView } from 'react-native'
import { SearchBar, Card, Button, Text } from '@rneui/themed'
import Layout from '@Components/layout'
import { global } from '@Styles/global'
import { useState, useEffect } from 'react'
import { Icons } from '@Hooks/icon.hook'
import useApi from '@Hooks/useApi'
import { API } from '@Api'
import { HeadlinesProps } from '@Types/Props'
import dayjs from 'dayjs'

const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState('')
  const { data, mutate } = useApi({
    URL: API.GET_HEADLINES('en'),
    options: {
      method: 'GET'
    }
  })
  const [headlines, setHeadlines] = useState<HeadlinesProps>()

  useEffect(() => {
    if (data) {
      setHeadlines(data)
    }
  }, [data])

  return (
    <Layout>
      <View style={styles.searchBar}>
        <SearchBar
          placeholder='Searching...'
          platform='ios'
          cancelButtonProps={styles.searchBarText}
          value={searchInput}
          onChangeText={setSearchInput}
        />
      </View>
      <ScrollView>
        <Text style={global.title}>Headlines</Text>
        {
          headlines &&
          headlines.articles.map((news, index) => (
            <Card key={index} containerStyle={styles.newsItems}>
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
          ))
        }

      </ScrollView>
    </Layout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 50,
  },
  searchBarText: {
    color: ''
  },
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
    maxWidth: 300,
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
