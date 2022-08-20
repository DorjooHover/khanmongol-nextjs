import { Box, Center, chakra, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import styled from "styled-components";
import { Title } from "../mainTitle";
import {ArrowForwardIcon} from '@chakra-ui/icons'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});
const CircleBox = chakra(motion.div, {});

const circleMotion = {
  rest: { opacity: 0.6, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    right: '-100px',
    top: '-100px',
    zIndex: 10,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const textMotion = {
  rest: {
    opacity: 0.6, ease: "easeOut", duration: 0.2, type: "tween"
  },
  hover: {
    
    opacity: 1,
    top: '-120px',
    zIndex: 10,
    transition: {
      delay: 0.3,
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
}
const cardMotion = {
  rest: {
    opacity: 0.6, ease: "easeOut", duration: 0.2, type: "tween"
  },
  hover: {
    
    opacity: 1,
    top: '-80px',
    zIndex: 10,
    transition: {
      delay: 0.3,
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
}
const buttonMotion = {
  rest: {
    opacity: 0.6, ease: "easeOut", duration: 0.2, type: "tween"
  },
  hover: {
    
    opacity: 1,
    top: '325px',
    right:'90px',
    zIndex: 10,
    transition: {
      delay: 0.3,
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
}
export default function Card() {
  return (
    <ChakraBox

      initial="rest"
      py={10}
      pos="relative"
      whileHover={"hover"}
      overflow='hidden'
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
    >
      <CircleBox
        variants={circleMotion}
        pos="absolute"
        content={`""`}
        zIndex="-1"
        bgImage="linear-gradient( -145deg, rgb(253,200,48) 50%, rgb(243,115,53) 75%)"
        w="600px"
        h="600px"
        borderRadius="100%"
        top="-480px"
        right="-480px"
        display={'flex'}
        alignItems='center'
        justifyContent={'center'}
      >
        <CircleBox w={'200px'} left={'65px'} top="-20px" variants={cardMotion} pos={'relative'}>
          <Link _hover={{textDecoration:'none'}}>
          <Title text={'Learn Course online'} size='18px' color={'white'} />
          </Link>
          <Text color={'white'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iste.</Text>
        </CircleBox>
        <CircleBox w={'60px'} pos='absolute' top={'375px'} bg='white' h={'60px'} display='flex' justifyContent={'center'} alignItems='center' borderRadius={'100%'} right="40px" variants={buttonMotion} onClick={() => console.log('asdf')} cursor={'pointer'}>
          <ArrowForwardIcon color={'text.hover'} fontSize={'20px'}/>
        </CircleBox>
      </CircleBox>
      <Image
        src="https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2017/05/1.png"
        mx={"auto"}
      />
      <Text fontSize={"18px"} py={5} fontWeight={500} color={"text.card.title"}>
        Learn courses online
      </Text>
      <Text>Lorem ipsum dolor sit amet consectetur.</Text>
    </ChakraBox>
  );
}
export const SemiCard = (props) => {
  return (
    <ChakraBox
      display={"flex"}
      initial="rest"

      p={10}
      pos="relative"
      whileHover={"hover"}
      overflow='hidden'
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
    >
      <CircleBox
        variants={circleMotion}
        pos="absolute"
        content={`""`}
        zIndex="-1"
        bgImage="linear-gradient( -145deg, rgb(253,200,48) 50%, rgb(243,115,53) 75%)"
        w="600px"
        h="600px"
        borderRadius="100%"
        top="-480px"
        right="-480px"
        display={'flex'}
        alignItems='center'
        justifyContent={'center'}
      >
        <CircleBox w={'300px'} left={'30px'} top="-50px" variants={textMotion} pos={'relative'}>
          <Title text={'Students Successive'} size='18px' color={'white'}/>
          <Text color={'white'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iste.</Text>
        </CircleBox>
      </CircleBox>
      <Image
        src="https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2017/05/1.png"
        mx={"auto"}
      />

      <VStack ml={6} alignItems={"start"}>
        <Heading color={"black"}>{props.heading}</Heading>
        <Text>{props.text}</Text>
      </VStack>
    </ChakraBox>
  );
};
