import styled from 'styled-components/native'
import { Text } from 'react-native'
import { TypographyProps } from '.';
import fonts from '@core/theme/fonts'
import colors from '@core/theme/colors';

export const CustomText = styled.Text<Omit<TypographyProps, "text">>`
  color: ${({color}) => color ? color : colors.textTitle};
  text-align: ${({align}) => align ? align : "auto"};

  ${({ size }) => {
    switch (size) {
      case "xs":
        return 'font-size: 12px';
      case "s":
        return 'font-size: 15px';
      case "md":
        return 'font-size: 16px';
      case "lg":
        return 'font-size: 18px';
      case "xl":
        return 'font-size: 24px';
      case "xxl":
        return 'font-size: 36px';
      default:
        return 'font-size: 12px';
    }
  }}
 
  ${({ font }) => {
    switch (font) {
      case "primaryBold":
        return `font-family: ${fonts.primary.bold}`;
      case "primaryRegular":
        return `font-family: ${fonts.primary.regular}`;
      case "primarySemiBold":
        return `font-family: ${fonts.primary.semiBold}`;
      case "secondaryRegular":
        return `font-family: ${fonts.secondary.regular}`;
      case "secondaryBold":
        return `font-family: ${fonts.secondary.bold}`;
      default:
        return `font-family: ${fonts.primary.regular}`;
    }
  }}

`