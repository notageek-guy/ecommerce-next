import { Container } from "@chakra-ui/react";
import { useRef } from "react";
import Hero from "./Hero";
import ItemList from "./ItemList";
import Layout from "./Layout";
export default function Main() {
  const ref = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    const element = document.querySelector(".item_list");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  return (
    <Layout>
      <Container maxW="container.xl">
        <Hero scrollDownFn={handleClick} />
        <ItemList itemRef={ref} />
      </Container>
    </Layout>
  );
}
