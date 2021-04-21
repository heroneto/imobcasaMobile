import React from 'react'
import { Modal, Text } from 'react-native'
import { Container, InfoBox, InfoContainer, ButtonBox } from './styles'

import StandardButton from '@lead-management/components/StandardButton';


interface ModalProps {
  modalVisible: boolean,
  closeModalFunc(): void,
  text: string,
  noLabel: string,
  noFunc(): void,
  yesLabel: string,
  yesFunc(): void,
}

const ModalOptions: React.FC<ModalProps> = ({
  modalVisible,
  closeModalFunc,
  yesFunc,
  yesLabel,
  noFunc,
  noLabel,
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
          <ButtonBox>
            <StandardButton
              text={noLabel}
              onPress={noFunc}
              variant="normal"
              style={{
                width: 150
              }}
            />
            <StandardButton
              text={yesLabel}
              onPress={yesFunc}
              variant="normal"
              style={{
                width: 150
              }}
            />
          </ButtonBox>


        </InfoContainer>
      </Container>


    </Modal>
  )
}

export default ModalOptions