import {
  Flex,
  Heading,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Box,
  Text,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoBagHandleOutline } from "react-icons/io5";

import BadgeIconWithCount from "./BageIconWithCount";
import { MdFavoriteBorder, MdSearch, MdPersonOutline } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import Item from "./Item";
import Empty from "./Empty";
import { cartAtom } from "@/store/store";
import { getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase/appClient";
import { collection } from "firebase/firestore";
export default function Header() {
  const router = useRouter();
  const [shoesCart, setShoesCart] = useAtom(cartAtom);
  const [itemName, setItemName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const goToCheckOut = () => {
    router.push({
      pathname: "/checkout",
    });
  };
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      py={4}
      px={8}
      bg=""
      position="sticky"
    >
      <Flex flex="1">
        <Heading as="h1" size="lg">
          NextMart
        </Heading>
      </Flex>
      <Flex align={"center"} flex="1" justifyContent={"center"} gap="4">
        <InputGroup w="100%">
          <Input
            type="text"
            placeholder="Enter your product name"
            onChange={handleChange}
            value={itemName}
          />
          <InputRightElement
            pointerEvents="none"
            children={<Icon as={MdSearch} color="gray.300" />}
          />
        </InputGroup>
      </Flex>
      <Flex alignItems={"center"} flex="1" justifyContent={"flex-end"} gap="4">
        <MdPersonOutline size="30" />
        <BadgeIconWithCount
          count={shoesCart.length}
          icon={IoBagHandleOutline}
          onClick={onOpen}
          btnRef={btnRef}
        />
        <BadgeIconWithCount count={3} icon={MdFavoriteBorder} />
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              {shoesCart.length> 0 ? (
                <>
                  <HStack spacing={4}>
                    <Heading as="h1" size="lg">
                      Your Cart
                    </Heading>
                    <Box bg="gray.100" p={2} borderRadius="md">
                      <Text>{} items</Text>
                    </Box>
                  </HStack>
                </>
              ) : (
                <Empty />
              )}
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}>
                {shoesCart.length > 0 ? (
                  <>
                    {shoesCart.map((item: any) => (
                      <Item
                        img={item.img.src}
                        name={item.name}
                        price={item.price}
                        key={item.id}
                        id={item.id}
                      />
                    ))}
                  </>
                ) : null}
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Box flex="1">
                <Text py="2" as="p" fontSize="sm" color="gray.500">
                  Subtotal : $ {shoesCart.length > 0 ? "" : 0}
                </Text>
                <Button
                  variant="solid"
                  bg="gray.800"
                  color="white"
                  _hover={{
                    bg: "gray.700",
                  }}
                  disabled={shoesCart.length > 0 ? false : true}
                  sx={{
                    cursor: shoesCart.length > 0 ? "pointer" : "not-allowed",
                  }}
                  // blur the button if cart is empty
                  filter={shoesCart.length > 0 ? "none" : "blur(2px)"}
                  size="lg"
                  w="100%"
                  onClick={goToCheckOut}
                >
                  Checkout
                </Button>
              </Box>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
