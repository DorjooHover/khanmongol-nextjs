import { InfoIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  HStack,
  Link,
  Center,
  Container,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Text,
  FormControl,
  Input,
  Box,
  Alert,
  AlertIcon,
  Progress,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { passwordStrength } from "check-password-strength";
var validator = require("email-validator");

export default function Navbar({user}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [singupCredentials, setSignupCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });
  const [reset, setReset] = useState("");
  const [alert, setAlert] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(user)
    if (!validator.validate(loginCredentials.email))
      return setAlert("Error email");
    return setAlert("success");
  };

  const rSubmit = (e) => {
    e.preventDefault();
    console.log(singupCredentials);
    if (!validator.validate(singupCredentials.email))
      return setAlert("Error email");
    if (singupCredentials.firstname == "") return setAlert("firstname");
    if (singupCredentials.lastname == "") return setAlert("lastname");
    if (singupCredentials.password != singupCredentials.password2)
      return setAlert("password not match");
    if (
      passwordStrength(singupCredentials.password).value == "" ||
      passwordStrength(singupCredentials.password).value == "Too weak"
    )
      return setAlert("password");
    return setAlert("success");
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    if (!validator.validate(reset)) return setAlert("email");
    return setAlert("success");
  };
  return (
    <Center>
      <Container
        pos="fixed"
        w={"100%"}
        maxW={"100%"}
        top={0}
        py={6}
        zIndex={100}
        bg="bg.linearYellow"
      >
        <Container
          maxW={"1170px"}
          justifyContent={"space-between"}
          display="flex"
          w={"100%"}
        >
          <Link href="/">
            <Image src="https://kamleshyadav.com/wp/traininginstitute/academic/wp-content/uploads/sites/3/2018/08/logo.png" />
          </Link>
          <HStack gap={4}>
            <Link color={"#fff"} fontWeight="600" href="/">
              Home
            </Link>
            <Link color={"#fff"} fontWeight="600" href="/about">
              About Us
            </Link>
            <Link color={"#fff"} fontWeight="600" href="/courses">
              Courses
            </Link>
            <Link color={"#fff"} fontWeight="600" href="/contact">
              Contact
            </Link>
            <>
              <Button onClick={onOpen}>Signin | Signup</Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    {isLogin ? "Нэвтрэх" : "Бүртгүүлэх"}{" "}
                  </ModalHeader>
                  <ModalCloseButton />

                  <ModalBody justifyContent={"center"}>
                    <Image
                      src="https://khanmongol.mn/_next/static/media/tsogts.e1cf72d3.jpg?imwidth=640"
                      w={"100px"}
                      mx="auto"
                    />
                    {isLogin && !isReset ? (
                      <Login
                        submit={submit}
                        data={loginCredentials}
                        setData={setLoginCredentials}
                      />
                    ) : isReset ? (
                      <ResetPassword
                        data={reset}
                        submit={resetPassword}
                        setData={setReset}
                      />
                    ) : (
                      <Register
                        data={singupCredentials}
                        setData={setSignupCredentials}
                        submit={rSubmit}
                      />
                    )}
                    {alert.length > 0 ? (
                      <Alert
                        status={
                          alert.toLowerCase() == "success"
                            ? "success"
                            : "warning"
                        }
                      >
                        <AlertIcon />
                        {alert}
                      </Alert>
                    ) : (
                      <Box />
                    )}
                  </ModalBody>

                  <ModalFooter>
                    <Flex justifyContent={"space-between"} w={"100%"} pb={10}>
                      {isLogin && !isReset ? (
                        <Button
                          variant={"unstyled"}
                          _hover={{ color: "text.hover" }}
                          onClick={() => {
                            setAlert("");
                            setIsReset(true);
                          }}
                        >
                          Нууц үг сэргээх
                        </Button>
                      ) : (
                        <Button
                          variant={"unstyled"}
                          _hover={{ color: "text.hover" }}
                          onClick={() => {
                            setAlert("");
                            setIsLogin(true);
                            setIsReset(false);
                          }}
                        >
                          Нэвтрэх
                        </Button>
                      )}
                      {isLogin ? (
                        <Button
                          variant={"unstyled"}
                          _hover={{ color: "text.hover" }}
                          onClick={() => {
                            setAlert("");
                            setIsLogin(false);
                            setIsReset(false);
                          }}
                        >
                          Бүртгүүлэх
                        </Button>
                      ) : (
                        <Box />
                      )}
                    </Flex>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          </HStack>
        </Container>
      </Container>
    </Center>
  );
}

export const Login = ({ submit, data, setData }) => {
  return (
    <FormControl>
      <Input
        type={"email"}
        placeholder="Email"
        my={2}
        value={data.email}
        onChange={(e) =>
          setData((data) => ({ ...data, email: e.target.value }))
        }
      />
      <Input
        type={"password"}
        placeholder="Password"
        my={2}
        value={data.password}
        onChange={(e) =>
          setData((data) => ({ ...data, password: e.target.value }))
        }
      />
      <Flex gap={4} my={2}>
        <Button flex={1}>
          <InfoIcon />
        </Button>
        <Button flex={1} type="submit" onClick={(e) => submit(e)}>
          Нэвтрэх
        </Button>
      </Flex>
    </FormControl>
  );
};

export const Register = ({ data, submit, setData }) => {
  const [checkPassword, setCheckPassword] = useState("");
  return (
    <FormControl>
      <Flex gap={4}>
        <Input
          placeholder="Овог"
          my={2}
          value={data.firstname}
          onChange={(e) =>
            setData((data) => ({ ...data, firstname: e.target.value }))
          }
        />
        <Input
          placeholder="Нэр"
          my={2}
          value={data.lastname}
          onChange={(e) =>
            setData((data) => ({ ...data, lastname: e.target.value }))
          }
        />
      </Flex>
      <Input
        type={"email"}
        placeholder="Имайл"
        my={2}
        value={data.email}
        onChange={(e) =>
          setData((data) => ({ ...data, email: e.target.value }))
        }
      />
      <Input
        type={"tel"}
        placeholder="Утас"
        my={2}
        value={data.phone}
        onChange={(e) =>
          setData((data) => ({ ...data, phone: e.target.value }))
        }
      />
      <Flex gap={4}>
        <Input
          type={"password"}
          placeholder="Password"
          my={2}
          value={data.password}
          onChange={(e) => {
            setCheckPassword(passwordStrength(e.target.value).value);
            setData((data) => ({ ...data, password: e.target.value }));
          }}
        />
        <Input
          type={"password"}
          placeholder="Password2"
          my={2}
          value={data.password2}
          onChange={(e) =>
            setData((data) => ({ ...data, password2: e.target.value }))
          }
        />
      </Flex>
      <Progress
        value={
          checkPassword == "Too weak"
            ? 25
            : checkPassword == "Weak"
            ? 50
            : checkPassword == "Medium"
            ? 75
            : checkPassword == "Strong"
            ? 100
            : 0
        }
        size="xs"
        colorScheme="red"
        mt={2}
        transition={"0.3s"}
      />
      <Text mb={2}>{checkPassword}</Text>
      <Flex gap={4} my={2}>
        <Button flex={1}>
          <InfoIcon />
        </Button>
        <Button flex={1} type="submit" onClick={(e) => submit(e)}>
          Бүртгүүлэх
        </Button>
      </Flex>
    </FormControl>
  );
};

export const ResetPassword = ({ data, submit, setData }) => {
  return (
    <FormControl>
      <Input
        type={"email"}
        placeholder="Имайл"
        my={2}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <Button
        flex={1}
        type="submit"
        w={"100%"}
        mb={2}
        onClick={(e) => submit(e)}
      >
        Илгээх
      </Button>
    </FormControl>
  );
};
