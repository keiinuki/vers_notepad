import "./components.css";
import { memo } from "react";
import { LoginForm } from "./LoginForm"
import { Button } from "@chakra-ui/react";
import { ModalButton } from "../type/Type";

export const LoginModal = memo(( props: ModalButton ) => {
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