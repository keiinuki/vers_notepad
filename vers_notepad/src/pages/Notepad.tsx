import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { Keys, getItem  } from "../utils/LocalStorage";
import { Memo } from "../type/Type"
import toast, { Toaster } from "react-hot-toast"

export const Notepad = () => {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [mark_div, setMark_div] = useState<number>(0);
  const [memos, setMemos] = useState<Memo>();
  const [getMemos, setGetMemos] = useState<Memo[]>([]);
  
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = (e.target.value)
    const newId = value.toString()
    setId(newId)
  };
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
  
  const onClickAdd = async () => {
    const token = getItem(Keys.access_token);    
    await axios.post<Memo>("https://raisetech-memo-api.herokuapp.com/api/memo", {      
		  title: title,
	    category: category,
      description: description,
      date: date,
      mark_div: mark_div,
    },{
      headers: {
      Authorization: `Bearer ${token}`,        
    }
    }).then((response) => {
      console.log(response.data);
      setMemos(response.data)
    }).catch(()=>{
      console.error("失敗しました");
      toast.error("もう一度ログインしてください！");
    })      
    };
    
    const onClickGet = async () => {
      const token = getItem(Keys.access_token);    
      await axios.get<Memo[]>("https://raisetech-memo-api.herokuapp.com/api/memos", {
        headers: {
        Authorization: `Bearer ${token}`,        
      }
      }).then((response) => {
        console.log(response.data);
        const newGetMemos = [...getMemos, ...response.data]
        setGetMemos(newGetMemos)
      }).catch(()=>{
        toast.error("失敗しました");
      })      
      };

      const onClickPut = async () => {
        const token = getItem(Keys.access_token);    
        await axios.put<Memo>(`https://raisetech-memo-api.herokuapp.com/api/memo/${id}`, 
          {
          title: title,
          category: category,
          description: description,
          date: date,
          mark_div: mark_div,
          }, {
            headers: {
            Authorization: `Bearer ${token}`,
          }})
          .then((response) => {
          console.log(response.data);
          setMemos(response.data)
        }).catch(()=>{
          toast.error("失敗しました");
        })      
        };

        const onClickDelete = async () => {
          const token = getItem(Keys.access_token);    
          await axios.delete<Memo>(`https://raisetech-memo-api.herokuapp.com/api/memo/${id}`, {
            headers: {
            Authorization: `Bearer ${token}`,        
          }}
          ).then((response) => {
            console.log(response.data);            
          }).catch(()=>{
            console.error("失敗しました");
          })      
          };

  return (
    <div>
      <h1>ここをメモ帳にします</h1>
      <form>
        <input
          type="text"
          onChange={onChangeTitle}
          placeholder="タイトルを入力"
          value={title}
        />
        <br />
        <input
          type="text"
          onChange={onChangeCategory}
          placeholder="カテゴリーを入力"
          value={category}
        />
        <br />
        <textarea
          onChange={onChangeDescription}
          placeholder="本文を入力"
          value={description}
        ></textarea>
        <br />
        <input type="date" onChange={onChangeDate} value={date}></input>
        <input type="radio" name="revel" value="0" onChange={onChangeMarkDiv} />
        重要
        <input type="radio" name="revel" value="1" onChange={onChangeMarkDiv} />
        普通
        <button type="button" onClick={onClickAdd}>
          保存する
        </button>
        <br />
        <input
          type="number"
          onChange={onChangeId}
          placeholder="idを入力"
          value={id}
        />
        <br />
        <button type="button" onClick={onClickPut}>
          編集する
        </button>
        <button type="button" onClick={onClickDelete}>
          削除する
        </button>
      </form>
      <div>
        <h2>登録したメモはこれです</h2>
        <p>
          {memos?.id}
          <br />
          {memos?.title}
          <br />
          {memos?.category}
          <br />
          {memos?.description}
          <br />
          {memos?.date}
          <br />
          {memos?.mark_div}
        </p>
        <br />
        <button type="button" onClick={onClickGet}>
          全部を表示する
        </button>
        <h2>今まで登録したメモはこれです</h2>
        <ul>
          {getMemos.map((getMemos, i) => (
            <li key={i}>
              {getMemos?.id}
              <br />
              {getMemos?.title}
              <br />
              {getMemos?.category}
              <br />
              {getMemos?.description}
              <br />
              {getMemos?.date}
              <br />
              {getMemos?.mark_div}
            </li>
          ))}
        </ul>
        <Toaster />
      </div>
      <div>
        <Link to="/">HOMEはこちら</Link>
      </div>
    </div>
  );
};