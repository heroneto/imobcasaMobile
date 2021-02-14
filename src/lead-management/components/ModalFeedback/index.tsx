import React from 'react'
import { Modal, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import StandardButton from '@lead-management/components/StandardButton';


const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

const InfoContainer = styled.View`
  display: flex;
  background-color: #FFF;
  height: 25%;
  padding: 25px;
  justify-content: space-between;
`
const InfoBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonBox = styled.View``

interface ModalProps {
  modalVisible: boolean,
  closeModalFunc(): void,
  text: string,
}

const ModalFeedback: React.FC<ModalProps> = ({ modalVisible, closeModalFunc, text }) => {

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

export default ModalFeedback