import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";
//import axios from "axios";

export const Home = () => {
  //const [post, setPost] = useState<string>("");
  //useEffect(() => {
    //axios.get("https://raisetech-memo-api.herokuapp.com/api/memos")
    //.then((response) => {      
      //setPost(response.data)
    //})
    //.catch((error) => {
      //console.log(error)
    //});       
  //},[]);  
  return (
    <div>
      <h1>ここをHOMEにします</h1>
      <form>
        <input type="email" placeholder="e-mailを入力" />
        <br/>
        <input type="password" placeholder="パスワードを入力"/>
        <button type= "button" >サインインしてメモ帳へ</button>
      </form>
      <li>ここにデータを表示する？</li>
      <div>
      <Link to="/Notepad">「メモ帳」はこちら</Link>
      </div>
    </div>
  );
};