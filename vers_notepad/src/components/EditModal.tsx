import "./components.css";
import { memo, useState } from "react";
import { EditForm } from "./EditForm";
import { Button } from "@chakra-ui/react";
import { ModalButton } from "../type/Type";

export const EditModal = memo((props: ModalButton) => {
  const [show, setShow] = useState<boolean>(false);
  const closeModal = () => {
    props.setShow(false);
  };
  if (props.show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <EditForm
            show={show}
            setShow={setShow}
          />
          <Button colorScheme="red" size="sm" onClick={closeModal}>
            戻る
          </Button>
        </div>
      </div>
    );
  } else {
    return null;
  }
});
