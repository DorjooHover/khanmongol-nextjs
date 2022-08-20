import { RepeatClockIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Center, Container, Heading, HStack, Image, Link, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import { Title } from "./mainTitle";

export default function Footer() {
    return (
        <Box>
            <Box bg='bg.black'>
            <HStack w={'1170px'} gap={4} mx='auto' py={10} alignItems={'start'}>
                <Box w={'25%'} >
                    <Box>
                    <Image src="https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2018/08/logo.png" />
                    </Box>
                    <Box h={10}/>
                    <Text color={'white'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam ratione minus qui laborum labore necessitatibus facere repudiandae, similique molestias.</Text>
                </Box>
                <Box w={'25%'}>
                    <Title text={'quick links'} size='24px' color={'white'}/>
                    <Box h={10}/>
                    <VStack color={'text.text'} textAlign='start' alignItems={'start'}>
                        <Link>Became A Teacher</Link>
                        <Link>Became A Teacher</Link>
                        <Link>Became A Teacher</Link>
                        <Link>Became A Teacher</Link>
                        <Link>Became A Teacher</Link>
                    </VStack>
                </Box>
                <Box w={'25%'}>
                    <Title text={'find us'} size='24px' color={'white'}/>
                    <Box h={10}/>
                    <List color={'white'} >
                        <ListItem mb={2}>
                            <ListIcon as={RepeatClockIcon}  color={'text.hover'}/>143 Gordon Terrace BASSINGTHORPE NG33 0ZT United Kingdom
                        </ListItem>
                        <ListItem mb={2}>
                            <ListIcon as={EmailIcon}  color={'text.hover'}/>info@traininginstitute.gov.co public@training.gov.co
                        </ListItem>
                        <ListItem>
                            <ListIcon as={PhoneIcon}  color={'text.hover'}/>+1800 326 3264
                        </ListItem>
                    </List>
                </Box>
                <Box w={'25%'}>
                    <Title text={'social media'} size='24px' color={'white'}/>
                    <Box h={10}/>
                    <VStack color={'text.text'} textAlign='start' alignItems={'start'}>
                        <Link>Became A Teacher</Link>
                        <Link>Became A Teacher</Link>
                        <Link>Became A Teacher</Link>
                        <Link>Became A Teacher</Link>
                        <Link>Became A Teacher</Link>
                    </VStack>
                </Box>
            </HStack>
        </Box>
        <Box bg={'#111'} py={6} color='white'>
            <Center>
                <Text>	&copy; Copyright 2022, All Rights Reversed, <Link textTransform={'uppercase'} color='text.hover'>Training  institute</Link></Text>
            </Center>
        </Box>
        </Box>
    )
}