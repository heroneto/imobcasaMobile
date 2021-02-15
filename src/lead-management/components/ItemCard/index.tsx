import React, { ReactElement, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import CardVerticalBar from './components/CardVerticalBar';
import CustomText from './components/CustomText';
import { useNavigation } from '@react-navigation/native';


interface IItemCardProps {
  topIcon?: ReactElement,
  topText: string,
  middleText: string,
  middleIcon?: ReactElement,
  leftBottomText?: string,
  rightBottomText?: {
    text: string,
    textColor: string,
  },
  customRightText?: {
    value?: number,
    text: string,
  },
  level: 'error' | 'success' | 'info' | 'neutral',
  pageToNavigate: string,
  navigationParameters: object,
  onPressFunc():void
}

const ItemCard: React.FC<IItemCardProps> = ({ topIcon, topText, middleText, middleIcon, leftBottomText, rightBottomText, customRightText, level, pageToNavigate, navigationParameters, onPressFunc }) => {
  const { navigate } = useNavigation()
  const [isShowingModal, setIsShowingModal] = useState(false)

  function showModal() {
    console.log("teste")
    setIsShowingModal(true)
  }

  function closeModal() {
    setIsShowingModal(false)
  }

  // function handleCardItem(){

  //   navigate(pageToNavigate, navigationParameters)
  // }

  return (
    <TouchableOpacity
      onPress={onPressFunc}
      style={styles.cardButton}      
    >
      <CardVerticalBar level={level} />
      <View style={styles.cardBody}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            {topIcon}
            <Text style={styles.title}>{topText}</Text>
          </View>
          
          <View style={styles.divider} />
        </View>
        <View style={styles.content}>
          {middleIcon}
          <Text style={styles.subtitle}>{middleText}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.subtitle}>{leftBottomText}</Text> 
          <CustomText 
            text={customRightText?.text}
            value={customRightText?.value}
            level={level}
          />         
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemCard