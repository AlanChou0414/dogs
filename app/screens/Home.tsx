import { FlatList, RefreshControl } from 'react-native'
import { Text } from '@rneui/themed'
import Layout from '@Components/layout'
import { global } from '@Styles/global'
import { useState } from 'react'
import useApi from '@Hooks/useApi'
import { API } from '@Api'
import Search from '@Components/SearchBar'
import uuid from 'react-native-uuid'
import PlaceHolder from '@Components/PlaceHolder'
import NewsCard from '@Components/NewsCard'
import axios from 'axios'
import { API_KEY } from '@env'

const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState('')
  const [pages, setPages] = useState(1)
  const { data, isLoading, mutate } = useApi({
    URL: API.GET_HEADLINES('en', 1, 10),
    options: {
      method: 'GET'
    }
  })

  const handleRefresh = async () => {
    try {
      setPages(1)
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  const handleEndReached = async () => {
    setPages(prevPages => prevPages + 1)
    try {
      const response = await axios(API.GET_HEADLINES('en', pages, 10), {
        method: 'GET',
        headers: { 'X-Api-Key': API_KEY }
      })
      const newData = await response.data
      console.log(newData)
      // const [articles] = newData
      // mutate([...data?.articles, ...newData], false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <Text style={global.title}>Headlines</Text>
      {
        <FlatList
          keyExtractor={() => uuid.v4()?.toString()}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={handleEndReached}
          data={data?.articles}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} tintColor='#252525' />
          }
          renderItem={({ item: news }) => (
            <NewsCard news={news} />
          )}
        />
      }
    </Layout >
  )
}

export default HomeScreen
