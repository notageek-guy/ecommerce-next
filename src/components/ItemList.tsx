import { IoBagHandleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import {
  Card,
  Image,
  SimpleGrid,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Flex,
  useToast,
  HStack,
  Box,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import { cartAtom } from "@/store/store";
import { shoeDataList } from "@/data/shoeData";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  where,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase/appClient";
import { useEffect, useState } from "react";
export default function ItemList({
  itemRef,
}: {
  itemRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
  const [shoesCart, setShoesCart] = useAtom(cartAtom) as any;
  const toast = useToast();
  const ref = collection(db, "carts");
  const handleAddToCart = async (shoeData: any) => {
    const docRef = doc(db, "carts", shoeData.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        quantity: docSnap.data().quantity + 1,
      });
      toast({
        title: "Added to cart",
        description: "We've added one more item to your cart",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      await addDoc(ref, {
        id: shoeData.id,
        name: shoeData.name,
        img: shoeData.img,
        price: shoeData.price,
        quantity: 1,
      });
      toast({
        title: "Added to cart",
        description: "We've added one item to your cart",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
      
  },[]);

  return (
    <Box ref={itemRef} className="item_list" mt="2">
      <Heading as="h2" size="2xl" mb="4">
        Our Products
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px" mb="4">
        {shoeDataList.map((shoeData) => (
          <div key={shoeData.id}>
            <Card w="100%" h="100%" p={4} position="relative">
              <CardHeader>
                <Text fontSize="xl" fontWeight="bold">
                  {shoeData.name}
                </Text>
              </CardHeader>
              <CardBody>
                <Image
                  w="100%"
                  h="100%"
                  objectFit="contain"
                  _hover={{
                    transform: "rotate(12deg)",
                    transition: "all 0.5s ease-in-out",
                  }}
                  src={shoeData.img.src}
                  alt={shoeData.name}
                  transform="rotate(-10deg)"
                />
              </CardBody>
              <CardFooter>
                <HStack justifyContent="space-between" w="100%">
                  <VStack alignItems="flex-start">
                    <Box bg="gray.100" p="2" borderRadius="md">
                      <Text fontSize="sm" fontWeight="bold">
                        $ {shoeData.price}
                      </Text>
                    </Box>
                    <HStack spacing="4">
                      <FaStar size="20" />
                      <Text fontSize="sm" fontWeight="bold">
                        {String(shoeData.rating).slice(0, 3)}
                      </Text>
                    </HStack>
                    <Button colorScheme="teal" size="sm">
                      Buy Now
                    </Button>
                  </VStack>

                  <Flex
                    w="40px"
                    h="40px"
                    borderRadius="50%"
                    bg="gray.100"
                    justifyContent="center"
                    alignItems="center"
                    _hover={{
                      bg: "gray.200",
                      transition: "all 0.5s ease-in-out",
                    }}
                  >
                    <IoBagHandleOutline
                      size={20}
                      onClick={() => handleAddToCart(shoeData)}
                    />
                  </Flex>
                </HStack>
              </CardFooter>
            </Card>
          </div>
        ))}
      </SimpleGrid>
    </Box>
  );
}
