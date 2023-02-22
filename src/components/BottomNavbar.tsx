import {
  Flex,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { MdFavoriteBorder, MdHome } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import BadgeIconWithCount from "./BageIconWithCount";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function BottomNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();
  const goToHome = () => router.push("/");

  return (
    <Flex
      position={"fixed"}
      bottom={4}
      width={"100%"}
      overflow={"hidden"}
      p={4}
      align="center"
      borderRadius={"xl"}
      justify={"space-between"}
    >
      <Flex
        bg="gray.100"
        boxShadow={"md"}
        borderRadius={"xl"}
        p={4}
        flex="1"
        justify="center"
        gap='8'
        align="center"
      >
        <RxHamburgerMenu size="30" color="gray.500" onClick={onOpen} />
        <BadgeIconWithCount count={3} icon={IoBagHandleOutline} />
        <IoHomeOutline size="30" color="gray.500" onClick={goToHome} />
        <BadgeIconWithCount count={3} icon={MdFavoriteBorder} />
        <BsGrid size="30" color="gray.500" />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>NextMart</DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Button variant="outline" colorScheme="teal" size="lg">
                  Home
                </Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}
