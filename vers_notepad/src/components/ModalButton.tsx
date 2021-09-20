import "./components.css";
import { useState } from "react";
import { memo } from "react";
import { Modal } from "./Modal"
import { Button } from "@chakra-ui/react";


export const ModalButton = memo(() => {
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
      <Modal show={show} setShow={setShow} />
    </div>
  );
});
