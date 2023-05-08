import { SearchProps } from '@Types/Props'
import { StyleSheet } from 'react-native'
import { SearchBar } from '@rneui/themed'

const Search = ({ searchInput, setSearchInput }: SearchProps) => {
  return (
    <SearchBar
      placeholder='Searching...'
      platform='ios'
      returnKeyType='search'
      showLoading={false}
      cancelButtonProps={styles.searchBarText}
      value={searchInput}
      onChangeText={setSearchInput}
      containerStyle={styles.searchBar}
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