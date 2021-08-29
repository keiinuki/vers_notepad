import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>ここをHOMEにします</h1>
      <div>
      <Link to="/Notepad">「メモ帳」はこちら</Link>
      </div>
    </div>
  );
};