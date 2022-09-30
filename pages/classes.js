import {
     Box,
     Button,
     Container,
     Heading,
     HStack,
     Stack,
     Text,
} from "@chakra-ui/react";
import React from "react";
import MainTitle from "../src/components/mainTitle";

const Class = () => {
     return (
          <Stack
               direction={"row"}
               w={"100%"}
               justifyContent="space-between"
               borderColor={"text.icon"}
               borderWidth={"1px"}
               color={"white"}
               p={3}
          >
               <Box>1. Angi</Box>
               <Box>
                    <Button>Tuvvshin Nemeh</Button>
                    <Stack direction={"row"} justifyContent={"center"}>
                         <Text>Tuvshin</Text>
                         <Text>Suragch</Text>
                    </Stack>
               </Box>
          </Stack>
     );
};

const Classes = () => {
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
                    <MainTitle heading2={"ангиуд"} />
                    <Button>Busad Button</Button>
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
                              <Heading size={"lg"} py={5}>
                                   Angi nemeh
                              </Heading>
                         </Button>
                    </Stack>
                    <Box width={"80%"} my={5}>
                         <Class />
                         <Class />
                         <Class />
                    </Box>
               </Box>
          </Container>
     );
};

export default Classes;
