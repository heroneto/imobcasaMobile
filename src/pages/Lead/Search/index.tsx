import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler'

var timeout: any = null

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState<string>("")
  const [ searchTries, setSearchTries ] = useState<number>(0)

  function handleSearch(value: string) {
    setSearchValue(value)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      search(value)
    }, 500)
  }

  function search(value: string) {
    console.log("buscando....")
    setSearchTries(prevValue => prevValue +1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <View style={styles.inputTextContainer}>
          <TextInput
            value={searchValue}
            onChangeText={text => handleSearch(text)}
            style={styles.inputText}
            placeholder="Digite para encontrar o seu Lead"
          />
        </View>   
      </View>
      <Text>{searchTries} Buscas Realizadas</Text>
    </View>
  )
}