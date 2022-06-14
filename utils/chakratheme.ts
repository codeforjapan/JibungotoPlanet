import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  fonts: {
    heading: 'Noto Sans JP, sans-serif',
    body: 'Noto Sans JP, sans-serif'
  },
  colors: {
    brandPrimary: {
      200: '#d9ebdb',
      400: '#439A4D'
    },
    brandSecondary: {
      200: '#ccecf7',
      400: '#00A1D8'
    },
    brandAccent: {
      200: '#fbebd4',
      400: '#ED9928'
    }
  }
})
