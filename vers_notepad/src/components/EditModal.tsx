import "./components.css";
import { memo } from "react";
import { EditForm } from "./EditForm";
import { Button, Box } from "@chakra-ui/react";
import { ModalButton } from "../type/Type";

export const EditModal = memo((props: ModalButton) => {
  const closeModal = () => {
    props.setShow(false);
  };
  if (props.show) {
    return (
      <Box id="overlay" onClick={closeModal}>
        <Box id="content" onClick={(e) => e.stopPropagation()}>
          <EditForm show={props.show} setShow={props.setShow} />
          <Button colorScheme="red" size="sm" m="10px" onClick={closeModal}>
            戻る
          </Button>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
});
