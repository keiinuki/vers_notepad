import { Link } from "react-router-dom";

export const Page404 = () => {  
  return (
    <div>
      <h1>ページが見つからへんねん</h1>
      <br />
      <Link to="/">HOMEはこちら</Link>
    </div>
  )
};