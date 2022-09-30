import { Box, Button, Center, Grid, GridItem, Text, transition, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AnimatedButton from "../../src/components/button";
import ChooseUs from "../../src/components/chooseUs";
import { MainCourse } from "../../src/components/courses/course";

export default function Courses() {
    const pages = [1,2,3,4,5]
    const [views, setViews] = useState(3)
    const show = () => {
        setViews(pages.length)
    }
    return (
        <VStack>
            <Grid templateColumns='repeat(3, 1fr)' gap={6} maxW={'1170px'} w={'100%'} pt={20}>
                {pages.slice(0,views).map((item, index) => (
                    <MainCourse key={index}/>
                ))}
            </Grid>
            {views == 3 && (
            <Center py={10} pb={20}>
                <AnimatedButton func={show} text={'view more'}/>
            </Center>   
            )}

            <ChooseUs/>
        </VStack>
    )
}