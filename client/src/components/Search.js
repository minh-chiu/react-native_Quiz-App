import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux'

export const Search = ({ search, setSearch, onSearch }) => {
  const dispatch = useDispatch()

  return (
    <View style={{ paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 22, color: '#61688B', marginTop: 15 }}>
        Find a quiz you want to learn
      </Text>
      <View style={styles.searchContainer}>
        <TextInput
          value={search}
          onChangeText={e => setSearch(e)}
          style={styles.searchInput}
          placeholder='Search for anything'
        />
        <TouchableOpacity onPress={onSearch}>
          <Icon style={styles.iconSearch} size={30} name='search' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    marginTop: 35,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    backgroundColor: '#F5F5F7',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },

  searchInput: {
    fontSize: 18,
    width: '100%',
    marginLeft: 5,
    padding: 8,
    outlineStyle: 'none',
  },
  iconSearch: { padding: 12, paddingRight: 16, borderRadius: '50%' },
})
