import React from 'react'
import { CustomText } from './styles'

export interface TypographyProps {
  size: "xs" | "s" | "md" | "lg" | "xl" | "xxl",
  color: string,
  font: "primaryRegular" | "primarySemiBold" | "primaryBold" | "secondaryRegular" | "secondaryBold"
  text: string, 
  align: "center" | "end" | "start" | "left" | "right" | "justify" | "inherit" | "initial" | "unset"
}

const Typography : React.FC<TypographyProps> = ({
  color,
  font,
  size,
  text,
  align
}) => {
  return (
    <CustomText
      size={size}
      color={color}
      font={font}
      align={align}
    >
      {text}
    </CustomText>
  )
}

export default Typography