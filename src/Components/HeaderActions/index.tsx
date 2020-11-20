import React from 'react'
import styles from './styles'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IHeaderActionsProps {
  headerColor: string,
  enableBackButton?: boolean,
  backButtonCustomAction?: any,
  openDrawerFunc: any,
  title: string,
}

const HeaderActions: React.FC<IHeaderActionsProps> = ({ headerColor, enableBackButton = false, backButtonCustomAction, openDrawerFunc, title }) => {
  const { navigate, goBack } = useNavigation()
  const insets = useSafeAreaInsets();

  function handleNavigateToSearchPage() {
    navigate('search')
  }



  return (
    <View style={{
      backgroundColor: headerColor,
      ...styles.headerContainer,
      paddingTop: insets.top,
      }}    
    >
      <View style={styles.titleContainer}>
        <View style={styles.menuAndTitle}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={openDrawerFunc}
          >
            <Ionicons name="md-menu" size={32} color="#FFF" />
          </TouchableOpacity>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          
        </View>
        
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleNavigateToSearchPage}
        >
          <Ionicons name="md-search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {enableBackButton &&
      <View style={styles.backButtonContainer}>

          <TouchableOpacity
            style={styles.backButton}
            onPress={backButtonCustomAction || goBack}
          >
            <Ionicons name="ios-arrow-back" size={24} color={"#FFF"} />
          </TouchableOpacity>
        
      </View>
      }
    </View>
  )
}

export default HeaderActions