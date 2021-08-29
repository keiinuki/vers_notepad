import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { Redirect } from 'react-router';

export const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false)  
  
  const onClickAdd = useCallback(async(e) => {    
    await axios.post("https://raisetech-memo-api.herokuapp.com/api/login", {
			email: email,
			password: password,
    })
    setRedirect(true)
  },[redirect]);
  
  if (redirect) {
    return <Redirect to={'/notepad'} />    
  }else { 
    alert("unauthorized")
    console.log("失敗しました");
  };

  return (
    <div>
      <h1>ここをHOMEにします</h1>
      <form>
        <input type="email" onChange={e => setEmail(e.target.value)} placeholder="e-mailを入力" />
        <br/>
        <input type="password" onChange={e => setPassword(e.target.value)} placeholder="パスワードを入力"/>
        <button type= "button" onClick={onClickAdd} >サインインしてメモ帳へ</button>
      </form>
      <li>ここにデータを表示する？</li>
      <div>
      <Link to="/Notepad">「メモ帳」はこちら</Link>
      </div>
    </div>
  );
};