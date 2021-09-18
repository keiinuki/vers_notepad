import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ModalButton } from "../components/ModalButton"

export const Home = () => {

  return (
    <div>
      <h1>ここをHOMEにします</h1>
      <ModalButton />
      <br/>
      <Link to="/Notepad">「メモ帳」はこちら</Link>
      <Toaster />
    </div>
  );
};