import colors from '@core/theme/colors'
import React from 'react'
import { View, Modal, ActivityIndicator } from 'react-native'
import Typography from '../Typography'
import styles, { ModalContainer } from './styles'


interface LoadingBannerProps {
  visible: boolean,
  text: string
}

const LoadingBanner: React.FC<LoadingBannerProps> = ({ visible, text }) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent={true}
    >
      <ModalContainer>
        <ActivityIndicator
          size="large"
          color="#FFF"
        />
        <Typography
          align="center"
          color="#FFF"
          font="primaryBold"
          size="lg"
          text={text}
        />
      </ModalContainer>

    </Modal>
  )
}

export default LoadingBanner