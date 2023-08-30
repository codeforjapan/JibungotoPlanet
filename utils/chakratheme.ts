import { extendTheme } from '@chakra-ui/react'

export const chakraTheme = extendTheme({
  fonts: {
    heading: 'Noto Sans JP, sans-serif',
    body: 'Noto Sans JP, sans-serif'
  },
  colors: {
    brandPrimary: {
      200: '#99D9EF',
      400: '#009ACE'
    },
    brandSecondary: {
      200: '#ccecf7',
      400: '#00A1D8'
    },
    brandAccent: {
      200: '#fbebd4',
      400: '#ED9928'
    },
    grey: {
      200: '#CCCCCC',
      400: '#888888'
    },
    mobility: {
      200: '#99D9EF',
      400: '#009DD3',
      600: '#B3E1F1'
    },
    food: {
      200: '#d9eadb',
      400: '#51a15a',
      600: '#BBE7C0'
    },
    housing: {
      200: '#fbebd4',
      400: '#ed9928',
      600: '#FBD199'
    },
    other: {
      200: '#f8e5e4',
      400: '#da7f79',
      600: '#FBCBC8'
    }
  }
})
