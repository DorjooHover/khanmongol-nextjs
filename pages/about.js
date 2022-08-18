import { Box, Text, VStack } from "@chakra-ui/react";
import ChooseUs from "../src/components/chooseUs";
import MainTitle from "../src/components/mainTitle";

export default function About() {
    return (
        <VStack>
            <Box h={60}/>
            <Box maxW={'1170px'} py={20}>
            <MainTitle heading1={'about'} heading2={'the training institute'} left={'-10%'}/>
            <Text mt={5}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
            </Box>
            <ChooseUs/>
        </VStack>
    )
}