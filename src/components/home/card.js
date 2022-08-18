import {Box, Heading, Image, Text, VStack} from '@chakra-ui/react'
export default function Card() {
    return (
        <Box boxShadow={'#f7f7f7 0px 7px 29px 0px'}  bg="white" p={10}>
          <Image src='https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2017/05/1.png' mx={'auto'}/>
          <Text fontSize={'18px'} py={5} fontWeight={500} color={'text.card.title'}>Learn courses online</Text>
          <Text>Lorem ipsum dolor sit amet consectetur.</Text>
        </Box>
    )
}

export const SemiCard = (props) => {
  return (
    <Box boxShadow={'#f7f7f7 0px 7px 29px 0px'}  bg="white" p={10} display='flex' >
      <Image src='https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2017/05/1.png' mx={'auto'}/>
      <VStack ml={6} alignItems={'start'}>
        <Heading color={'black'}>{props.heading}</Heading>
        <Text>{props.text}</Text>
      </VStack>
    </Box>
  )
}