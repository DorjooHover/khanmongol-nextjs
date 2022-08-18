
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import Layout from '../src/components/layout'
import '@splidejs/react-splide/css';
function MyApp({ Component, pageProps }) { 
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
