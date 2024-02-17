import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";

import React from "react";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();
  const handleSubmit = async (event) => {
    console.log("hi");
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:5001/auth/login", {
        email: email,
        password: password,
      });
      console.log(res);
      if (res.status === 200) {
        router("/");
        console.log(res.data);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user", res.data.email);
        localStorage.setItem("name", res.data.name);
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(email);
  }, []);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction={"column"}
      style={{ minHeight: "100vh" }}
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Login
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              We’re looking for amazing engineers just like you! Become a part
              of our rockstar engineering team and skyrocket your career!
            </Text>
          </Stack>
          <Box as={"form"} onSubmit={handleSubmit} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              
              <Button
                fontFamily={"heading"}
                mt={8}
                type="submit"
                w={"full"}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bgGradient: "linear(to-r, red.400,pink.400)",
                  boxShadow: "xl",
                }}
              >
                Login
              </Button>
            </Stack>
          </Box>
          <p>Don't have an account? </p>
          <Button
            onClick={() => {
              router("/auth/sign-up");
            }}
            fontFamily={"heading"}
            bg={"gray.200"}
            color={"gray.800"}
          >
            Create Account
          </Button>
          <p>Forgot Password? </p>
          <Button
            onClick={() => {
              router("/auth/forgot-password");
            }}
            fontFamily={"heading"}
            bg={"gray.200"}
            color={"gray.800"}
          >
            Forgot Password
          </Button>
        </Stack>
      </Flex>

      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Flex>
  );
}
