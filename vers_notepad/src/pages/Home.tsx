import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { Redirect } from 'react-router';

export const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false)  
  
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value)    
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {    
    e.preventDefault();
    setPassword(e.target.value)
  };  
  
  const onClickAdd = async () => {    
    await axios.post("https://raisetech-memo-api.herokuapp.com/api/login",{
			email: email,
			password: password,
    }).then(response => {
      console.log("body:", response.data);  
    });
    setRedirect(true);    
  };
  
  if (redirect) {
    return <Redirect to={'/notepad'} />
  }else {     
    console.log("失敗しました");
  };

  return (
    <div>
      <h1>ここをHOMEにします</h1>
      <form>
        <input type="email" onChange={(e) => onChangeEmail(e)} placeholder="e-mailを入力" />
        <br/>
        <input type="password" onChange={(e) => onChangePassword(e)} placeholder="パスワードを入力"/>
        <button type= "button" onClick={onClickAdd} >サインインしてメモ帳へ</button>
      </form>
      <Link to="/Notepad">「メモ帳」はこちら</Link>
    </div>
  );
};