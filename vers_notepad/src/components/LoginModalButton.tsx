import "./components.css";
import { useState } from "react";
import { memo } from "react";
import { LoginModal } from "./LoginModal"
import { Button, Box } from "@chakra-ui/react";


export const LoginModalButton = memo(() => {
  const [show, setShow] = useState<boolean>(
    false
  );
  const openModal = () => {
    setShow(true)
  }
  return (
    <Box>
      <Button colorScheme="teal" size="sm" m="10px" onClick={openModal}>
        ログインはこちらから
      </Button>
      <LoginModal show={show} setShow={setShow} />
    </Box>
  );
});
