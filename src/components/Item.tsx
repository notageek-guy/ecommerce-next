import {
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Box,
  Center,
  Card,
  Button,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { cartAtom } from "@/store/store";
import {
  doc,
  deleteDoc,
  getDoc,
  where,
  collection,
  onSnapshot,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase/appClient";
import { useAtom } from "jotai";
import { useEffect } from "react";
export default function Item({
  id,
  name,
  price,
  img,
}: {
  id: string;
  name: string;
  img: string;
  price: number;
}) {
  const toast = useToast();
  // const [cart, setCart] = useAtom(cartAtom);

  const deleteItem = async (id: string) => {};
  useEffect(() => {
    console.log("hello")
  }, []);

  return (
    <>
      <Flex
        w="100%"
        h="100%"
        p={4}
        position="relative"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack spacing="2" align="center">
          <Card w="100%" h="100%" p={4} maxW="100px" position="relative">
            <Image w="100%" h="100%" objectFit="contain" src={img} />
            <Box position="absolute" top="1" right="1">
              <Text
                fontSize="sm"
                bg="gray.100"
                p="1"
                borderRadius="md"
                fontWeight="bold"
                color="black"
              >
                ${price}
              </Text>
            </Box>
          </Card>
          <VStack alignItems="flex-start">
            <Text fontSize="sm">{name}</Text>
            <Center w="100%" h="100%">
              {/* increase decrase button  mini size*/}
              <HStack spacing="2">
                <Button size="xs">+</Button>
                <Button size="xs">-</Button>
              </HStack>
            </Center>
          </VStack>
          <IconButton
            size="xs"
            onClick={() => {
              deleteItem(id);
            }}
            aria-label="delete"
            icon={<FaTrash />}
          />
        </HStack>

        {/*  */}
      </Flex>
    </>
  );
}
