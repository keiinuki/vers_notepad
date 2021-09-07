import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { KEYS, getItem  } from "../utils/LocalStorage";

export const Notepad = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [mark_div, setMark_div] =useState<number>(0);
  const [token, setToken] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value)
  };
  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCategory(e.target.value)
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDescription(e.target.value)
  };
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDate(e.target.value)
  };
  const onChangeMarkDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMark_div = parseInt(e.target.value)
    setMark_div(newMark_div)
  };

  const onClickAdd = () =>{
    setToken(getItem(KEYS.access_token))
    console.log(token);
    // console.log({      
		// 	title: title,
		// 	category: category,
    //   description: description,
    //   date: date,
    //   mark_div: mark_div
    // })
  }
  
  // const onClickAdd = async () => {
  //   setToken(getItem(KEYS.Token));    
  //   await axios.post("https://raisetech-memo-api.herokuapp.com/api/memo", {      
	// 		title: title,
	// 		category: category,
  //     description: description,
  //     date: date,
  //     mark_div: mark_div
  //   },{
  //     headers: {
  //       Authorization: `Bearer ${token}`,        
  //     }
  //   }).then((response) => {
  //     console.log(response.data);
  //     const newMemos = [...memos];
  //     newMemos.push(response.data);
  //     setMemos(newMemos);
  //     }).catch((error)=>{
  //       console.error("失敗しました");
  //     })      
  // };

  return (
    <div>
      <h1>ここをメモ帳にします</h1>
      <form>
      <input type="text" onChange={onChangeTitle} placeholder="タイトルを入力" value={title} /><br/>
      <input type="text" onChange={onChangeCategory} placeholder="カテゴリーを入力" value={category} /><br/>
      <textarea  onChange={onChangeDescription} placeholder="本文を入力" value={description} ></textarea><br/>
      <input type="date" onChange={onChangeDate} value={date}></input>
      <input type="radio" name="revel" value="0" onChange={onChangeMarkDiv} />重要
      <input type="radio" name="revel" value="1" onChange={onChangeMarkDiv} />普通
      <button type= "button" onClick={onClickAdd} >保存する</button>
      </form>
      <div>
      {memos.map((val)=>(<li>{val}</li>))}
      </div>
      <div>
      <Link to="/">HOMEはこちら</Link>
      </div>
    </div>
  );
};