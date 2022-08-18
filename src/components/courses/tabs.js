import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Flex, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react"
import { Title } from "../mainTitle"
import { AccordionsItem } from "./accordian"
const lessons = [1,2,3,4,5]
const quizzes = [1,2,3]
export const Overview = () => {
    return (
        <VStack>
            <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <Box h={10}/>
            <Box w={'100%'}>
                <Title text={'Leave a Reply'}/>
                <Text>Your email address will not be published. Required fields are marked *</Text>
                <Textarea placeholder='Comments' mb={3}/>
                <HStack gap={4} mb={6}>
                    <Input placeholder="Your name"/>
                    <Input placeholder="Your email"/>
                    <Input placeholder="Website URL"/>
                </HStack>

                <Button px={4} color={'white'} transition="0.3s" boxShadow={'0 4px 15px 0 rgba(229, 66, 10, 0.75)'} backgroundSize={'300% 100%'} borderRadius={'50px'} bg="linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)" _hover={{bgPos:'100% 0', transition: '0.3s'}} >Post Comment</Button>

            </Box>
        </VStack>
    )
}

export const Curriculum = () => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionsItem data={lessons}/>
            <AccordionsItem data={quizzes}/>
        </Accordion>
    )
}