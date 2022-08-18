import { AspectRatio, Box, Center, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import ChooseUs from "../src/components/chooseUs";
import MainTitle, { Title } from "../src/components/mainTitle";

export default function Contact() {
    return (
        <VStack>
            <Box maxW={'1140px'} py={20}>
                <Center>
                    <MainTitle heading1={'contact'} heading2={'& find'} left={'-30%'}/>
                </Center>
                <Flex mt={20}>
                    <Box p={10} bg={'bg.gray'} w={'570px'}>
                        <Title text={'contact info'}/>
                        <Text my={10} color={'text.text'}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.If you are going to use a </Text>
                        <Text color={'text.text'}>Phone: 
                        <Link href="tel: +97688666515" color={'text.title'} fontWeight={600} transition={'0.3s'}  _hover={{textDecoration: 'none', color: 'text.hover', transition: '0.3s'}}> +976 8866 6515</Link>
                        </Text>
                        <Text color={'text.text'}>Email: 
                        <Link href="mailto: dorjoohover@gmail.com" color={'text.title'} fontWeight={600} transition={'0.3s'}  _hover={{textDecoration: 'none', color: 'text.hover', transition: '0.3s'}}> dorjoohover@gmail.com</Link>
                        </Text>
                        <Text color={'text.text'}>Website: 
                        <Link href="https://www.thehover.tech/" color={'text.title'} fontWeight={600}  transition={'0.3s'}  _hover={{textDecoration: 'none', color: 'text.hover', transition: '0.3s'}}> https://www.thehover.tech/</Link>
                        </Text>
                    </Box>
                    <AspectRatio maxW={'570px'} w={'570px'} h={'362px'} ratio={1}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5347.690626023098!2d106.97529322799498!3d47.92003045695186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9691ebdd18f44b%3A0xfe5b7ecd013534ea!2sDistrict%2016%2C%20Ulaanbaatar!5e0!3m2!1sen!2smn!4v1660821865682!5m2!1sen!2smn" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </AspectRatio>
                </Flex>
            </Box>
            <ChooseUs/>
        </VStack>
    )
}