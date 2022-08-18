import {Flex, Image, HStack, Link, Center, Container} from '@chakra-ui/react'
export default function Navbar() {
    return (

       <Center>
         <Container pos='fixed'  justifyContent={'space-between'} w={'100%'} maxW={'1170px'} display="flex" top={0} py={6} zIndex={100}>
 
 <Link href='/'>
 <Image src="https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2018/08/logo.png"/>
 </Link>
 <HStack gap={4}>
     <Link color={'#fff'} fontWeight="600" href='/'>Home</Link>
     <Link color={'#fff'} fontWeight="600" href='/about'>About Us</Link>
     <Link color={'#fff'} fontWeight="600" href='courses'>Courses</Link>
     <Link color={'#fff'} fontWeight="600" href='contact'>Contact</Link>
 </HStack>

</Container>
       </Center>

    )
}