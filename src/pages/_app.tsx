import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@/context/AuthContext";
import { createStore, Provider } from "jotai";

export default function App({ Component, pageProps }: AppProps) {
  const myStore = createStore();

  return (
    <ChakraProvider>
      <AuthProvider>
        <Provider store={myStore}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </ChakraProvider>
  );
}
