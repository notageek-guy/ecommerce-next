import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface LayoutProps {
  children?: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Box minH="100vh">
        <Navbar />
        <Box as="main" h="calc(100vh - 100px)">
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
