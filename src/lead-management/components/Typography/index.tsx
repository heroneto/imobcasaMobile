import React from 'react'
import { CustomText } from './styles'

export interface TypographyProps {
  size: "xs" | "s" | "md" | "lg" | "xl" | "xxl",
  color: string,
  font: "primaryRegular" | "primarySemiBold" | "primaryBold" | "secondaryRegular" | "secondaryBold"
  text: string, 
}

const Typography : React.FC<TypographyProps> = ({
  color,
  font,
  size,
  text,
}) => {
  return (
    <CustomText
      size={size}
      color={color}
      font={font}
    >
      {text}
    </CustomText>
  )
}

export default Typography