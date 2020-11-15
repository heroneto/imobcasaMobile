import React, { ReactElement, useState } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import styles from './styles'
import ModalView from '../ModalView';
import { ModalProps } from '../Shared'
import CardVerticalBar from './components/CardVerticalBar';
import CustomText from './components/CustomText';


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
  modalOptions: ModalProps,
  customRightText?: {
    value?: number,
    text: string,
  },
  level: 'error' | 'success' | 'info' | 'neutral'
}

const ItemCard: React.FC<IItemCardProps> = ({ topIcon, topText, middleText, middleIcon, leftBottomText, rightBottomText, customRightText, modalOptions, level }) => {
  const [isShowingModal, setIsShowingModal] = useState(false)

  function showModal() {
    console.log("teste")
    setIsShowingModal(true)
  }

  function closeModal() {
    setIsShowingModal(false)
  }


  return (
    <TouchableOpacity
      onPress={showModal}
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
          {/* <View style={styles.customTextContainer}>
            {customRightText?.value &&
              <View style={styles.cardCustomTextContainer}>
                <Text style={styles.cardCustomText}>{customRightText?.value}</Text>
              </View>
            }

            <Text style={styles.customText}>{customRightText?.text}</Text>
          </View> */}
        </View>
      </View>

      <Modal
        transparent={true}
        animationType='fade'
        visible={isShowingModal}
        hardwareAccelerated={true}
        onRequestClose={() => {
          setIsShowingModal(false)
        }}
      >
        <ModalView
          title={modalOptions.title}
          options={modalOptions.options}
          closeModalFunc={closeModal}
        />
      </Modal>
    </TouchableOpacity>
  )
}

export default ItemCard