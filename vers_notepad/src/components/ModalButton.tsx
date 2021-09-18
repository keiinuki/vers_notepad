import "./components.css";
import { useState } from "react";
import { memo } from "react";
import { Modal } from "./Modal"
import { chakra } from "@chakra-ui/react";


export const ModalButton = memo(() => {
  const [show, setShow] = useState<boolean>(
    false
  );
  const openModal = () => {
    setShow(true)
  }
  return (
    <div>
      <button onClick={openModal}>ログインはこちらから</button>
      <Modal show={show} setShow={setShow} />
    </div>
  );
});
