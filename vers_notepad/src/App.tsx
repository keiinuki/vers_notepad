import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";


export default function App () {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
      </ChakraProvider>
  );
};