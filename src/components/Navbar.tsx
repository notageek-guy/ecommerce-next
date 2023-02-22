import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import BottomNavbar from "./BottomNavbar";
import Header from "./Header";
export default function Navbar() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return <>{isLargerThan768 ? <Header /> : <BottomNavbar />}</>;
}
