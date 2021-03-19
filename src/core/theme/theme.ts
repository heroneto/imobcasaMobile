import colors, { ColorsProps } from "./colors";
import fonts, { fontProps } from './fonts';

export interface ThemeProps {
  colors: ColorsProps,
  fonts: fontProps,
  header: any
}

export const theme = {
  colors,
  fonts,
  header: {
    primary: {
      background: colors.imobcasaPrimary,
      texts: "#FFF",
    },
    secondary: {
      background: colors.background,
      texts: "#111",
    }
  }
}