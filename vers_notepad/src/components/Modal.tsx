import "./components.css";
import { memo } from "react";
import { LoginForm } from "./LoginForm"

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
          <p><LoginForm/></p>
          <button onClick={closeModal}>戻る</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
});