import React from 'react'
import styled from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StackHeaderProps } from '@react-navigation/stack';
import { DrawerContentComponentProps, DrawerContentOptions } from '@react-navigation/drawer';
import { DrawerHeaderProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { useNavigation } from '@react-navigation/native';

const HeaderStyled = styled.View`
  padding-top:${props => `${props.paddingTop}px`};
  flex-direction: row;
  padding-left: 8px;
  padding-right: 8px;
  background:  ${props => props.primaryStyle ? 
    props.theme.header.primary.background : 
    props.theme.header.secondary.background};
  justify-content: space-between;
`

const HeaderItensContainer = styled.View`
  flex-direction: row;
`
const HeaderButton = styled.TouchableOpacity`
  padding: 8px;
  
`
const HeaderTitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`
const HeaderTitle = styled.Text`
  font-family: ${props => props.theme.fonts.primary.semiBold};
  font-size: 18px;
  margin-top: 3px;
  margin-left: 10px;
  color: ${props => props.primaryStyle ? 
    props.theme.header.primary.texts : 
    props.theme.header.secondary.texts};
`

interface HeaderProps extends StackHeaderProps{
  primaryStyle: boolean,
  title: string
}

export const Header : React.FC<HeaderProps> = ({ primaryStyle, title, navigation }) => {
  const insets = useSafeAreaInsets()
  const themeContext = useContext(ThemeContext); 
  const { goBack, openDrawer, navigate } = navigation as any
   
  return (
    <HeaderStyled theme={themeContext} primaryStyle={primaryStyle} paddingTop={insets.top}>
      <HeaderItensContainer>
        <HeaderButton
          onPress={() => primaryStyle ? openDrawer() : goBack()}
        >
          <Ionicons 
            name={primaryStyle ? "md-menu" : "ios-arrow-back"}
            size={32} 
            color={ primaryStyle ? 
              themeContext.header.primary.texts : 
              themeContext.header.secondary.texts}
          />
        </HeaderButton>
        <HeaderTitleContainer>
          <HeaderTitle theme={themeContext} primaryStyle={primaryStyle}>{title}</HeaderTitle>
        </HeaderTitleContainer>
      </HeaderItensContainer>
      <HeaderItensContainer>
        <HeaderButton
          onPress={() => navigate("Busca de Leads")}
        >
          <Ionicons 
            name="md-search" 
            size={32} 
            color={ primaryStyle ? 
              themeContext.header.primary.texts : 
              themeContext.header.secondary.texts}
          />
        </HeaderButton>
      </HeaderItensContainer>
    </HeaderStyled>
  )
}