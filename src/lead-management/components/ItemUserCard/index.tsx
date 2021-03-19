import React from 'react'
import { 
  Container, 
  Bar, 
  UserTextImageInitials, 
  UserTitle, 
  UserInfo, 
  UserInitialsText, 
  ContentContainer,
  IconContainer
 } from './styles'
import { Octicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '@core/theme/theme';
interface ItemUserCardProps{
  fullName: string,
  info: string,
  onPress():void
}

const ItemUserCard: React.FC<ItemUserCardProps> = ({ fullName, info, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Container>
        <ContentContainer>
          <Bar
            variant="normal"
          />
          <UserTextImageInitials>
            <UserInitialsText>{fullName.split(" ").map(name => name[0].toUpperCase()).slice(0,2)}</UserInitialsText>
          </UserTextImageInitials>
          <UserTitle>
            {fullName}
          </UserTitle>
        </ContentContainer>
        <ContentContainer>
          <UserInfo>
            {info}
          </UserInfo>
          <IconContainer>
          <Octicons name="chevron-right" size={32} color={theme.colors.textInput} />
          </IconContainer>
          
        </ContentContainer>
      </Container>
    </TouchableOpacity>

  )
}

export default ItemUserCard