import { useCallback, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { FaGithub, FaGoogle } from "react-icons/fa";

import useLogin from "@/lib/useLogin";
import Head from "next/head";

import {
  Box,
  useToast,
  Text,
  Flex,
  Stack,
  Button,
  Link,
  FormControl,
  IconButton,
  FormLabel,
  Input,
  Center,
  HStack,
} from "@chakra-ui/react";
export default function Login() {
  const { loginWithGithub, loginWithGoogle } = useLogin();
  const router = useRouter();

  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  const logGoogle = async () => {
    await loginWithGoogle();
    router.push("/");
  };

  const logGithub = async () => {
    await loginWithGithub();
    router.push("/");
  };
  return (
    <Box
      h="100vh"
      display={"flex"}
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
    >
      <Head>
        <title>Login</title>
      </Head>
      <Box p="10" rounded="lg" shadow="xl" w="96">
        <Text textAlign={"center"}>Login to your account</Text>
        <Center my="5">
          <HStack spacing="4">
            <IconButton aria-label="Github" onClick={logGithub}>
              <FaGithub />
            </IconButton>

            <IconButton aria-label="Google" onClick={logGoogle}>
              <FaGoogle />
            </IconButton>
          </HStack>
        </Center>
        <form onSubmit={handleSubmit}>
          <Stack spacing="4" mt="5">
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme={"green"} w="full">
              Login
            </Button>
            <Flex justifyContent="center">
              <Text>Don&apos;t have an account?</Text>
              <span>
                <Link cursor="pointer" href="/signup">
                  Sign Up
                </Link>
              </span>
            </Flex>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
