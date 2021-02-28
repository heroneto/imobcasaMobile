import React from 'react'
import { Modal, Text } from 'react-native'
import { Container,InfoBox,InfoContainer } from './styles'
import StandardButton from '@lead-management/components/StandardButton';
interface ModalProps {
  modalVisible: boolean,
  closeModalFunc(): void,
  text: string,
}

const ModalOptions: React.FC<ModalProps> = ({ 
  modalVisible, 
  closeModalFunc, 
  text 
}) => {

  return (

    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={closeModalFunc}
      animationType="fade"
    >
      <Container>
      <InfoContainer>
          <InfoBox>
            <Text>
              {text}
            </Text>
          </InfoBox>
          <StandardButton 
            text="Fechar"
            onPress={closeModalFunc}
            variant="normal"
          />

        </InfoContainer>
      </Container>


    </Modal>
  )
}

export default ModalOptions