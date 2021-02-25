import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 800,
    backgroundColor: "rgba(0,0,0,.3)",
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export const ModalContainer = styled.View`
  background-color: rgba(0,0,0,.5);
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`


export default styles