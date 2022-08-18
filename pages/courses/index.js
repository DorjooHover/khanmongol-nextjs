import { Box, Button, Center, Grid, GridItem, Text, transition, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ChooseUs from "../../src/components/chooseUs";
import { MainCourse } from "../../src/components/courses/course";

export default function Courses() {
    const pages = [1,2,3,4,5]
    const [views, setViews] = useState(3)
    return (
        <VStack>
            <Grid templateColumns='repeat(3, 1fr)' gap={6} maxW={'1170px'} w={'100%'} pt={20}>
                {pages.slice(0,views).map((item, index) => (
                    <MainCourse key={index}/>
                ))}
            </Grid>
            {views == 3 && (
            <Center py={10} pb={20}>
                <Button px={10} color={'white'} transition="0.3s" boxShadow={'0 4px 15px 0 rgba(229, 66, 10, 0.75)'} backgroundSize={'300% 100%'} borderRadius={'50px'} bg="linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)" _hover={{bgPos:'100% 0', transition: '0.3s'}} onClick={() => setViews(pages.length)}>View More</Button>
            </Center>
            )}
            <ChooseUs/>
        </VStack>
    )
}