import { Heading, Image, Text } from "@chakra-ui/react";
const Empty = () => {
  return (
    <>
      <Heading as="h1" size="lg">
        Your Cart
      </Heading>
      <Image src="/emptycart.jpg" alt="empty cart" w="100%" />
      <Text mt="4" as="p" fontSize="sm" color="gray.500" textAlign="center">
        Looks like you haven't added anything to your cart yet.
      </Text>
    </>
  );
};

export default Empty;
