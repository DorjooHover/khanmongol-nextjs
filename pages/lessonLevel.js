import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
     Box,
     Button,
     Container,
     Grid,
     GridItem,
     Heading,
     Image,
     Input,
     InputGroup,
     InputLeftElement,
     Modal,
     ModalBody,
     ModalCloseButton,
     ModalContent,
     ModalFooter,
     ModalHeader,
     ModalOverlay,
     Stack,
     Text,
     useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import MainTitle from "../src/components/mainTitle";

const LessonCard = () => {
     return (
          <GridItem bgColor={"white"} borderRadius={10} px={5} pb={4}>
               <Image
                    src="https://www.w3schools.com/w3css/img_lights.jpg"
                    alt="topic image"
                    mb={"3"}
               />
               <Heading size={"lg"}>Topic-1</Heading>
          </GridItem>
     );
};

const LessonLevel = () => {
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
                    <MainTitle heading1={"Hicheeliin"} heading2={"tuvshnuud"} />
               </Stack>
               <Box py={5}>
                    <InputGroup>
                         <InputLeftElement
                              focusBorderColor="text.icon"
                              pointerEvents="none"
                              children={<SearchIcon color="gray.300" />}
                         />
                         <Input
                              variant="flushed"
                              placeholder="Түвшинг нэрээр хайх"
                         />
                    </InputGroup>
                    <Box width={"100%"} my={5}>
                         <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                              <LessonCard />
                              <LessonCard />
                              <LessonCard />
                              <LessonCard />
                              <LessonCard />
                              <LessonCard />
                              <LessonCard />
                              <GridItem
                                   bgColor={"white"}
                                   borderRadius={10}
                                   display="grid"
                                   placeItems={"center"}
                              >
                                   <Button
                                        w={"100%"}
                                        h={"100%"}
                                        onClick={onOpen}
                                   >
                                        <AddIcon fontSize={"3em"} />
                                   </Button>
                              </GridItem>
                         </Grid>
                         <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                              <ModalOverlay />
                              <ModalContent>
                                   <ModalHeader>Түвшин нэмэх</ModalHeader>
                                   <ModalCloseButton />
                                   <ModalBody>
                                        <Stack
                                             direction={"row"}
                                             placeholder="Нэр бичих"
                                             gap={10}
                                             px={5}
                                        >
                                             <Box
                                                  w={"125px"}
                                                  h={"125px"}
                                                  pos="relative"
                                                  borderRadius={"10px"}
                                                  borderColor="white"
                                                  borderWidth={"1px"}
                                                  borderStyle="dashed"
                                             >
                                                  <Box
                                                       pos={"absolute"}
                                                       w={"100%"}
                                                       h={"100%"}
                                                       display={"flex"}
                                                       justifyContent="center"
                                                       alignItems={"flex-end"}
                                                       bottom={"-20%"}
                                                  >
                                                       <Text
                                                            whiteSpace={
                                                                 "nowrap"
                                                            }
                                                       >
                                                            Зургаа оруулна уу
                                                       </Text>
                                                  </Box>
                                                  <Input
                                                       type="file"
                                                       aria-hidden="true"
                                                       accept="image/*"
                                                       opacity="0"
                                                       w={"100%"}
                                                       h={"100%"}
                                                  />
                                             </Box>
                                             <Stack
                                                  direction={"column"}
                                                  my={"auto"}
                                                  h={"100%"}
                                             >
                                                  <Text>Түвшний нэр</Text>
                                                  <Input placeholder="Нэр бичих" />
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
                    </Box>
               </Box>
          </Container>
     );
};

export default LessonLevel;
