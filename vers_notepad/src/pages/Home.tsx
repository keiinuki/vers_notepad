import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { LoginModalButton } from "../components/LoginModalButton"
import { Box, Text } from "@chakra-ui/react";

import { GetListButton } from "../components/GetListButton";

export const Home = () => {

  return (
    <Box p={25} bg="gray.50">
      <Text fontSize={32} textAlign={["center"]}>
        なんでもメモアプリ
        <br />
        HOME
      </Text>
      <Box mx="auto" my={[50, 8]} p="auto" w={20}>
        <GetListButton />
      </Box>
      <Box mx="auto" my={8} p="auto" w={20}>
        <LoginModalButton />
      </Box>
      <Text textAlign={["center"]} color="green.500">
        <Link to="/Notepad">「メモ帳」はこちら</Link>
      </Text>
      <Toaster />
    </Box>
  );
};