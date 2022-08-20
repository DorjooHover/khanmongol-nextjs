import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Flex, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react"
import { Title } from "../mainTitle"
import { AccordionsItem } from "./accordian"
import AnimatedButton from '../button'
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

                <AnimatedButton text={'post comment'}/>

            </Box>
        </VStack>
    )
}

export const Curriculum = () => {
    return (
        <Accordion px={0} defaultIndex={[0]} allowMultiple >
            <AccordionsItem data={lessons}/>
            <AccordionsItem data={quizzes}/>
        </Accordion>
    )
}