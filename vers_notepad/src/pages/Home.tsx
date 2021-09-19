import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ModalButton } from "../components/ModalButton"
import { chakra, Box, Text } from "@chakra-ui/react";

export const Home = () => {

  return (
    <Box m="auto" bg="gray.50">
      <Text fontSize={32} textAlign={["center"]}>
        なんでもメモアプリ HOME
      </Text>
      <Box m="auto" w={20}>
        <ModalButton />
      </Box>
      <Text textAlign={["center"]} color="green.200">
        <Link to="/Notepad">「メモ帳」はこちら</Link>
      </Text>
      <Toaster />
    </Box>
  );
};