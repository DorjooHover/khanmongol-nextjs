import { Avatar, Button, Divider, GridItem, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"
import { Title } from "../mainTitle"
import {ChevronRightIcon} from '@chakra-ui/icons'
import { useRouter } from "next/router"
export const MainCourse = ({key}) => {
    const text = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat'
    const router = useRouter()
   
    return (
        <GridItem transition={'0.3s'} _hover={{boxShadow:'0 5px 20px -8px rgba(0, 0, 0, .5)', transition: '0.3s'}} justifyContent='center' alignItems={'center'} p={4} cursor='pointer' onClick={() => router.push(`/${router.pathname}/0`)} key={key}>
            <Image src="https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2017/05/1-330x220.jpg" w={'100%'} mb={4}/>
            <Title text={'Javascript campus'} size={'20px'}/>
            <Divider my={3}/>
            <HStack>
                <Avatar name="asdf" src="https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2017/05/1-330x220.jpg"/>
                <Title text={'javascript campus'} size={'15px'}/>
            </HStack>
            <Divider my={3}/>
            <Text>{text.length > 100 ? text.substring(0, 97) + '...' : text}</Text>
            <Button _hover={{span: {ml: 4, transition: "0.5s"}}} rightIcon={<ChevronRightIcon /> } px={0} mx={0} ml={2} transition={'0.5s'} bg='transparent' textTransform={'capitalize'} color={"text.hover"}>get involved</Button>
        </GridItem>
    )
}