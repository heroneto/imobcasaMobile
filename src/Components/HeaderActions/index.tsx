import React, { ReactComponentElement, useState } from 'react'
import styles from './styles'
import { View, TouchableOpacity, ViewComponent, Image, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


interface IHeaderActionsProps {
  headerColor: string,
  imageUrl: string,
  enableBackButton?: boolean,
  backButtonCustomAction?: any,
  openDrawerFunc: any
}

const HeaderActions: React.FC<IHeaderActionsProps> = ({ children, headerColor, imageUrl, enableBackButton = false, backButtonCustomAction, openDrawerFunc }) => {
  const { navigate, goBack } = useNavigation()
  
  function handleNavigateToSearchPage() {
    navigate('search')
  }



  return (
    <View style={{
      backgroundColor: headerColor,
      ...styles.headerContainer
    }}>
      <View style={styles.imageSearchContainer}>
        <TouchableOpacity
          style={styles.myselfContainer}
          onPress={openDrawerFunc}
        >
          {/* <Image style={styles.myselfImage} source={{ uri: imageUrl }} /> */}
          <Ionicons name="md-menu" size={32} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleNavigateToSearchPage}
        >
          <Ionicons name="md-search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.backButtonContainer}>
        {enableBackButton &&
          <TouchableOpacity
            style={styles.backButton}
            onPress={backButtonCustomAction || goBack}
          >
            <Ionicons name="ios-arrow-back" size={24} color={"#FFF"} />
          </TouchableOpacity>
        }


        {children}
      </View>
    </View>
  )
}

export default HeaderActions