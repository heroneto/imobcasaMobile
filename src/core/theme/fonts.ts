const fonts = {
  primary: {
    bold: 'Poppins_700Bold',
    semiBold: 'Poppins_600SemiBold',
    regular: 'Poppins_400Regular'
  },
  secondary: {
    bold: 'Archivo_700Bold',
    regular: 'Archivo_400Regular'
  }
}


export interface fontProps {
  primary: {
    bold: string,
    semiBold: string,
    regular: string,
  },
  secondary: {
    bold: string,
    regular: string
  }
}

export default fonts