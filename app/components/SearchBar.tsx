import { SearchProps } from '@Types/Props'
import { StyleSheet } from 'react-native'
import { SearchBar } from '@rneui/themed'
import useApi from '@Hooks/useApi'
import { API } from '@Api'

const Search = ({ searchInput, setSearchInput }: SearchProps) => {
  const { data, isLoading, mutate } = useApi({
    URL: API.SEARCH_IN(searchInput),
    options: {
      method: 'GET'
    }
  })

  const handleSearch = () => (
    // setHeadlines([...data.articles])
    console.log(searchInput)
  )

  return (
    <SearchBar
      placeholder='Search in...'
      platform='ios'
      returnKeyType='search'
      showLoading={isLoading}
      cancelButtonProps={styles.searchBarText}
      value={searchInput}
      onChangeText={setSearchInput}
      containerStyle={styles.searchBar}
      onEndEditing={handleSearch}
    />
  )
}

export default Search

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15
  },
  searchBarText: {
    color: '',
  },
})