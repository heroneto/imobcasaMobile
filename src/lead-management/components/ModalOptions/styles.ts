import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

export const InfoContainer = styled.View`
  display: flex;
  background-color: #FFF;
  height: 25%;
  padding: 25px;
  justify-content: space-between;
`
export const InfoBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonBox = styled.View`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`