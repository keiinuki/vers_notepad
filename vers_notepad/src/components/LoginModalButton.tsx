import "./components.css";
import { useState } from "react";
import { memo } from "react";
import { LoginModal } from "./LoginModal"
import { Button } from "@chakra-ui/react";


export const LoginModalButton = memo(() => {
  const [show, setShow] = useState<boolean>(
    false
  );
  const openModal = () => {
    setShow(true)
  }
  return (
    <div>
      <Button colorScheme="teal" size="sm" onClick={openModal}>
        ログインはこちらから
      </Button>
      <LoginModal show={show} setShow={setShow} />
    </div>
  );
});
