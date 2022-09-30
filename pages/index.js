import {
  VStack,
  Container,
  Heading,
  Image,
  HStack,
  Text,
  Box,
  Center,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Input,
  FormHelperText,
  FormErrorMessage,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Card from "../src/components/home/card";
import MainTitle from "../src/components/mainTitle";

import ChooseUs from "../src/components/chooseUs";
import MainCourse from "../src/components/courses";
import { useEffect, useState } from "react";
import AnimatedButton from "../src/components/button";
import axios from "axios";

export default function Home() {
  const colors = ["red", "green", "yellow"];
  const [input, setInput] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: undefined,
    type: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = {
      name: data.name,
      email: data.email, 
      phone: data.phone,
      type: data.type
    }
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const content = await res.json()

    console.log(content)

    setData((data) => ({...data, name: '', email: '', phone: undefined, type: ''}))
  }
  const isError =
    data.name === "" ||
    data.email === "" ||
    data.phone === "" ||
    data.type === "";

    const test = async () => {
      try {
        const res = await axios.post('https://khanmongol.herokuapp.com/v1/lesson', {
     
          "name": "asasdfasdfasdfasdf",
          "category": "62f7788cd193dcbc95c51f2a",
          "videoUrl": "asdf",
          "description": "asdfasdf",
          "level": "62f7788cd193dcbc95c51f2a",
          "teacher": "62f7788cd193dcbc95c51f2a"
        
      })
      console.log(res)
      } catch(err) {
        console.log(err)
      }
    }
  useEffect(() => {
    
  },[]);
  return (
    <VStack>
      <Box w={"100%"} pos="relative" mt={"78px"}>
        <Box
          w={"100%"}
          bg={"bg.linearYellow"}
          h={"90%"}
          pos="absolute"
          zIndex={"-1"}
        />
        <Center>
          <Heading
            textTransform={"uppercase"}
            color="white"
            fontSize={"250px"}
            pos="absolute"
            zIndex={5}
          >
            learning
          </Heading>
          <Box
            w={"40vw"}
            h={"40vw"}
            bg="grey"
            borderRadius={"100%"}
            pos="absolute"
            zIndex={1}
          />
          <Image
            src="https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2018/08/img.png"
            pt={20}
            pos="relative"
            zIndex={10}
          />
        </Center>
      </Box>
      <Box
        maxW={"1170px"}
        gap={10}
        w={"100%"}
        display="flex"
        color={"text.card.text"}
        textAlign="center"
        py={20}
        alignItems="center"
      >
        <MainTitle heading1={"our"} heading2={"expertise"} />
        <Card />
        <Card />
        <Card />
      </Box>

      <Center>
        <Container
          maxW={"1170px"}
          w={"100%"}
          justifyContent="center"
          overflow={"hidden"}
        >
          <MainTitle heading1={"Recommended "} heading2={"courses"} />
          <Box h={10} />
          <MainCourse />
        </Container>
      </Center>
      <Box maxW={"1170px"} w="100%" py={20}>
        <Flex justifyContent={"space-between"}>
          <Image
            src="https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2018/08/enroll-535x600.jpg"
            w={"50%"}
            pt={20}
          />
          <VStack
            sx={{
              borderImage:
                "linear-gradient(-145deg, rgb(253,200,48) 50%, rgb(243,115,53) 75%) 1",
            }}
            border={"5px solid"}
            w={"40%"}
            p={8}
            pos={"relative"}
            overflow="hidden"
            h={"100%"}
          >
            <Box
              _before={{
                pos: "absolute",
                content: `""`,
                zIndex: "-1",
                bgImage:
                  "linear-gradient( -145deg, rgb(253,200,48) 50%, rgb(243,115,53) 75%)",
                w: "600px",
                h: "600px",
                borderRadius: "100%",
                top: "-85%",
                left: "-100px",
              }}
              mb={10}
            >
              <Heading color={"white"}>Enroll Now</Heading>
            </Box>

            <FormControl _invalid={isError}>
              <Input
                placeholder="Your Name"
                value={data.name}
                onChange={(e) =>
                  setData((data) => ({ ...data, name: e.target.value }))
                }
                borderRadius={32}
                py={6}
                px={5}
                my={3}
              />

              <Input
                placeholder="Your Email"
                type={"email"}
                value={data.email}
                onChange={(e) =>
                  setData((data) => ({ ...data, email: e.target.value }))
                }
                borderRadius={32}
                py={6}
                px={5}
                my={3}
              />

              <Input
                placeholder="Your Phone"
                type={"tel"}
                value={data.phone}
                pattern="/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g"
                onChange={(e) => {
                  e.target.value.match("d") ??
                    setData((data) => ({ ...data, phone: e.target.value }));
                }}
                borderRadius={32}
                py={6}
                px={5}
                my={3}
              />

              <Select
                placeholder="Course, Type"
                value={data.type}
                onChange={(e) =>
                  setData((data) => ({ ...data, type: e.target.value }))
                }
                borderRadius={32}
                my={3}
              >
                <option value={0} style={{ padding: "10px 0" }}>
                  Korea
                </option>
                <option value={1}>Japan</option>
                <option value={2}>English</option>
              </Select>

              {isError && (
                <Alert status="error" borderRadius={32} py={3} px={5}>
                  <AlertIcon />
                  <AlertTitle>Мэдээлэл буруу</AlertTitle>
                </Alert>
              )}
              <Box h={10} />
              <Center>
                <AnimatedButton
                  text={"Submit"}
                  func={(e) => handleSubmit(e)}
                  type={!isError ?? "submit"}
                />
              </Center>
            </FormControl>
          </VStack>
        </Flex>
      </Box>
      <ChooseUs />
    </VStack>
  );
}
