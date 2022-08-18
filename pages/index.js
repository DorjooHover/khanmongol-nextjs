import {VStack, Container, Heading, Image, HStack,Text,  Box, Center} from '@chakra-ui/react'
import Card from '../src/components/home/card'
import MainTitle from '../src/components/mainTitle'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ChooseUs from '../src/components/chooseUs'
export default function Home() {
  const colors = ['red', 'green', 'yellow']
  return (
    <VStack>
      <Image src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80" w={'100%'}/>

      <Box maxW={'1170px'} gap={10} w={'100%'} display="flex" color={'text.card.text'} textAlign='center' py={20} alignItems='center'>
        <MainTitle heading1={'our'} heading2={'expertise'}/>
        <Card/>
        <Card/>
        <Card/>
      </Box>

      {/* <Splide options={{perPage: 3, perMove: 1, height: '9rem', focus: 'center', trimSpace: false, breakpoints: {600:{ perPage: 2, height: '6rem'}}}} >
        {colors.map((c) => (
          <SplideSlide>
          <Container>
            <Heading>{c}</Heading>
          </Container>
        </SplideSlide>
        ))}
      </Splide> */}
      <ChooseUs/>
    </VStack>
  )
}
