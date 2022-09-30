import {
     Box,
     Button,
     Container,
     Heading,
     HStack,
     Stack,
     Text,
     // Modal
     Modal,
     ModalBody,
     ModalCloseButton,
     ModalContent,
     ModalFooter,
     ModalHeader,
     ModalOverlay,
     useDisclosure,
     Input,
     VStack,
     Flex,
} from "@chakra-ui/react";
import React from "react";
import MainTitle from "../src/components/mainTitle";
import { BsBookFill } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { FaRegFileVideo } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
const Lesson = () => {
     return (
          <Stack
               direction={"row"}
               w={"100%"}
               justifyContent="space-between"
               borderColor={"text.icon"}
               borderWidth={"1px"}
               color={"white"}
               p={5}
          >
               <Stack direction={"row"} alignItems={"center"}>
                    <AiFillPlayCircle />
                    <Text> 1. Angi</Text>
               </Stack>

               <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={3}
               >
                    <Flex alignItems={"center"} gap={1}>
                         <FaRegFileVideo />
                         <Text>1 Video Hicheel</Text>
                    </Flex>
                    <Flex alignItems={"center"} gap={1}>
                         <BsBookFill />
                         <Text>1 Dasgal ajil</Text>
                    </Flex>
                    <Flex alignItems={"center"} gap={1}>
                         <MdAssignment />
                         <Text>1 Shalgalt</Text>
                    </Flex>
               </Stack>
          </Stack>
     );
};

const lessonInput = ({ inputType }) => {
     return (
          <>
               <Input type={inputType} w="50%" />;
          </>
     );
};

const LessonContent = () => {
     const { isOpen, onOpen, onClose } = useDisclosure();
     return (
          <Container
               maxW={"1170px"}
               gap={10}
               w={"100%"}
               color={"text.card.text"}
               py={20}
          >
               <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    py={10}
               >
                    <MainTitle
                         heading1={"Hicheeliin"}
                         heading2={"tuvshnii ner"}
                    />
                    <Button>Busad tuvshin</Button>
               </Stack>
               <Box py={10}>
                    <Stack
                         direction={"row"}
                         w={"full"}
                         justifyContent={"space-between"}
                    >
                         <Heading>Hicheeliin aguulga</Heading>
                         <Button
                              borderRadius={"10px"}
                              bgColor={"text.hover"}
                              color={"white"}
                         >
                              <Heading size={"lg"} py={5} onClick={onOpen}>
                                   Hicheel nemeh
                              </Heading>
                              <Modal
                                   isOpen={isOpen}
                                   onClose={onClose}
                                   size={"xl"}
                              >
                                   <ModalOverlay />
                                   <ModalContent>
                                        <ModalHeader>Түвшин нэмэх</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                             <Stack
                                                  direction={"column"}
                                                  placeholder="Нэр бичих"
                                                  gap={5}
                                                  px={5}
                                             >
                                                  <Stack
                                                       direction={"row"}
                                                       my={"auto"}
                                                       h={"100%"}
                                                       justifyContent="space-between"
                                                  >
                                                       <Text
                                                            whiteSpace={
                                                                 "nowrap"
                                                            }
                                                       >
                                                            Хичээлийн нэр:
                                                       </Text>
                                                       <Input
                                                            placeholder="Нэр бичих"
                                                            w={"70%"}
                                                       />
                                                  </Stack>
                                                  <Stack
                                                       direction={"row"}
                                                       my={"auto"}
                                                       h={"100%"}
                                                       justifyContent="space-between"
                                                  >
                                                       <Text
                                                            whiteSpace={
                                                                 "nowrap"
                                                            }
                                                       >
                                                            Бичлэг:
                                                       </Text>
                                                       <Input
                                                            type={"file"}
                                                            w={"70%"}
                                                       />
                                                  </Stack>
                                                  <Stack
                                                       direction={"row"}
                                                       my={"auto"}
                                                       h={"100%"}
                                                       justifyContent="space-between"
                                                  >
                                                       <Text
                                                            whiteSpace={
                                                                 "nowrap"
                                                            }
                                                       >
                                                            Дасгал ажил:
                                                       </Text>
                                                       <Input
                                                            type={"file"}
                                                            w={"70%"}
                                                       />
                                                  </Stack>
                                             </Stack>
                                        </ModalBody>
                                        <ModalFooter>
                                             <Button
                                                  variant="ghost"
                                                  onClick={onClose}
                                             >
                                                  Буцах
                                             </Button>
                                             <Button colorScheme="blue" mr={3}>
                                                  Нээх
                                             </Button>
                                        </ModalFooter>
                                   </ModalContent>
                              </Modal>
                         </Button>
                    </Stack>
                    <Box width={"80%"} my={5}>
                         <Lesson />
                         <Lesson />
                         <Lesson />
                    </Box>
               </Box>
          </Container>
     );
};

export default LessonContent;
