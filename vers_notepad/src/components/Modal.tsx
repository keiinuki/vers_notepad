import "./components.css";
import { memo } from "react";
import { LoginForm } from "./LoginForm"
import { Button } from "@chakra-ui/react";

type ModalButton = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = memo(( props: ModalButton ) => {
  const closeModal = () => {
    props.setShow(false);
  };
  if (props.show) {
    return (
      <div id="overlay" onClick={closeModal}>
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <p>
            <LoginForm />
          </p>
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