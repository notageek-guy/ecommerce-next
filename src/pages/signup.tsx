import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Head from "next/head";
import {
  Box,
  useToast,
  Text,
  Heading,
  Flex,
  Stack,
  Button,
  Link,
  FormControl,
  FormLabel,
  Input,
  Center,
  HStack,
  Alert,
  IconButton,
} from "@chakra-ui/react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/appClient";
export default function SignUp() {
  const toast = useToast();
  const router = useRouter();
  const loginGithub = useCallback(async () => {
    const provider = new GithubAuthProvider();
    try {
    } catch (err) {
      await signInWithPopup(auth, provider);
      router.push("/");
      console.log(err);
      alert(err);
    }
  }, [router]);
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast({});
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
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
        <Text textAlign={"center"}>Create your Account</Text>
        <Center my="5">
          <HStack spacing="4">
            <IconButton onClick={loginGithub} aria-label="Github">
              <FaGithub size={30} />
            </IconButton>
            <IconButton onClick={handleGoogleLogin} aria-label="Google">
              <FaGoogle size={30} />
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
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme={"green"} w="full">
              Signup
            </Button>
            <Flex justifyContent="center">
              <Text>Already have an account?</Text>
              <span>
                <Link cursor={"pointer"} href="/login">
                  Sign in
                </Link>
              </span>
            </Flex>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
