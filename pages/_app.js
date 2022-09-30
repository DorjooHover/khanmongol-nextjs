
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'
import Layout from '../src/components/layout'
import '@splidejs/react-splide/css';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {app} from './api/config/firebase'
import { useState } from 'react';

function MyApp({ Component, pageProps }) { 
  const auth = getAuth(app)
  const [user, setUser] = useState('')
  onAuthStateChanged(auth, (user) => {
    if(user) {
      const uid = user.uid
      console.log(uid)
    } else {
      console.log('asdf')
    }
  })
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout user={user}>
       
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
