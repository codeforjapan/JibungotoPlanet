import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { chakraTheme } from '../utils/chakratheme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={chakraTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
