import React, { useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
export default function Hero({ scrollDownFn }: { scrollDownFn: () => void }) {
  return (
    <Box
      className="hero_section"
      w="100%"
      maxW="7xl"
      h="100vh"
      px={{
        base: "none",
        md: "8",
      }}
      py={8}
    >
      <Flex align="center" direction={"column"} justifyContent="center">
        <Flex direction="column" align="center" justifyContent="center">
          <Heading
            as="h1"
            size={{
              base: "lg",
              md: "2xl",
              lg: "3xl",
              xl: "4xl",
            }}
            textAlign="center"
          >
            Play With Electric Nike Adapt 2.0 Sneakers
          </Heading>
          <Button
            onClick={scrollDownFn}
            colorScheme="teal"
            mt={4}
            w="full"
            size="lg"
            maxW={{
              base: "none",
              md: "sm",
              lg: "md",
              xl: "lg",
            }}
          >
            Explore Products
          </Button>
        </Flex>

        <HStack
          px="2"
          mt={20}
          spacing={4}
          w="full"
          display={"flex"}
          justifyContent="space-between"
        >
          <VStack spacing={4}>
            <AnimatedVideo coverImg="/video/vcover1.png" />
            <AnimatedVideo coverImg="/video/vcover2.png" />
            <AnimatedVideo coverImg="/video/vcover3.png" />
          </VStack>
          <Image
            src="/images/hero.png"
            alt="hero"
            w={{
              base: "150px",
              md: "400px",
              lg: "500px",
            }}
            _hover={{
              transform: "rotate(10deg)",
              transition: "all 0.5s ease-in-out",
            }}
            transform="rotate(-10deg)"
          />
          <VStack spacing={4}>
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
            <FaYoutube size={20} />
            <FaLinkedin size={20} />
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}

const AnimatedVideo = ({ coverImg }: { coverImg?: string }) => {
  const [isPlaying, { on, off }] = useBoolean(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <Box
      position={"relative"}
      w={{
        base: "40px",
        md: "80px",
        lg: "100px",
      }}
      borderRadius={8}
      overflow="hidden"
      boxShadow="lg"
    >
      <video ref={videoRef} loop muted playsInline poster={coverImg}>
        <source src="/video/clip.mp4" type="video/mp4" />
      </video>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="black"
        opacity="0.5"
      />
      <Center
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        color="white"
        fontSize="4xl"
        cursor="pointer"
        onClick={() => {
          if (isPlaying) {
            off();
            videoRef.current?.pause();
          } else {
            on();
            videoRef.current?.play();
          }
        }}
      >
        {isPlaying ? <BsFillPlayFill /> : <BsPauseFill />}
      </Center>
    </Box>
  );
};
