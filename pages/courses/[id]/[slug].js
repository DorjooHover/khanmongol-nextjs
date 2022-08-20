import { Box, Button, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Input, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import {ChevronRightIcon, ChevronLeftIcon} from '@chakra-ui/icons'
import { Curriculum } from "../../../src/components/courses/tabs";
export default function LessonView() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
    return (
    <VStack mt={'78px'} py={20}>
      <Box pos={'absolute'} left={!isOpen ? '0px' :'320px'} transition='0.45s' zIndex={1500}>
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHead/er> */}

          <DrawerBody mt={10}>
            <Curriculum/>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
      <Button ref={btnRef} onClick={!isOpen ? onOpen : onClose} bg="white" h={'56px'} minW={'25px'} px={0} w={'25px'} _hover={{bg: 'white'}} _active={{bg: 'white'}} boxShadow='0 15px 30px 0 rgba(0,0,0,0.1)'>
        {!isOpen ? <ChevronRightIcon fontSize={'24px'} color='text.hover'/> : <ChevronLeftIcon fontSize={'24px'} color='text.hover'/>}
      </Button>
      </Box>
      <Center>
        
      <Box maxW={'800px'}>
          <Heading mb={5}>Lesson11</Heading>
          <Text mb={5}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure alias sit officiis quam dignissimos voluptates excepturi a laboriosam accusamus debitis veritatis suscipit, optio eum atque dolorem eveniet nisi animi illo.</Text>
          <Divider/>
          <Flex justifyContent={'end'} mt={5}>
            <Button rightIcon={<ChevronRightIcon/>}>Next</Button>
          </Flex>
      </Box>
      </Center>
    </VStack>
    )
}