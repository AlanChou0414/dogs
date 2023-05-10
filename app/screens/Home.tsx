import { FlatList, RefreshControl } from 'react-native'
import { Text } from '@rneui/themed'
import Layout from '@Components/layout'
import { global } from '@Styles/global'
import { useState, useEffect, lazy, Suspense } from 'react'
import useApi from '@Hooks/useApi'
import { API } from '@Api'
import Search from '@Components/SearchBar'
import uuid from 'react-native-uuid'
import PlaceHolder from '@Components/PlaceHolder'
import { HeadlinesProps } from '@Types/Props'

const NewsCard = lazy(() => import('@Components/NewsCard'))

const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState('')
  const [pages, setPages] = useState(1)
  const { data, isLoading, mutate } = useApi({
    URL: API.GET_HEADLINES('en', pages, 5),
    options: {
      method: 'GET'
    }
  })
  const [newsList, setNewsList] = useState<HeadlinesProps[]>([])

  useEffect(() => {
    if (data && data.articles) {
      setNewsList(prevNewsList => [...prevNewsList, ...data.articles])
    }
  }, [data])

  const handleRefresh = async () => {
    try {
      await mutate()
    } catch (error) {
      console.log(error)
    }
  }

  const handleEndReached = async () => {
    setPages(prevPages => prevPages + 1)
    try {
      const newRequest = API.GET_HEADLINES('en', pages + 1, 5)
      const newData = await mutate(newRequest, true)
      setNewsList(prevNewsList => [...prevNewsList, ...newData.articles])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <Text style={global.title}>Headlines</Text>
      <FlatList
        keyExtractor={() => uuid.v4()?.toString()}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        initialNumToRender={5}
        onEndReached={handleEndReached}
        data={newsList}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} tintColor='#252525' />
        }
        renderItem={({ item: news }) => (
          <Suspense fallback={<PlaceHolder rows={1} />}>
            <NewsCard news={news} isLoading={isLoading} />
          </Suspense>
        )}
      />
    </Layout >
  )
}

export default HomeScreen
