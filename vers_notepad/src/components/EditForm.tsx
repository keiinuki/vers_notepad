import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Keys, getItem } from "../utils/LocalStorage";
import { Memo, ModalButton } from "../type/Type";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { getMemosState, addIdState } from "../store/atom";
import toast, { Toaster } from "react-hot-toast";
import { Box, Button } from "@chakra-ui/react";

export const EditForm = memo((props: ModalButton ) => {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [mark_div, setMark_div] = useState<number>(0);
  const [getMemos, setGetMemos] = useRecoilState<Memo[]>(getMemosState);
  const [addId] = useRecoilState<string>(addIdState);    
  
  const editMemo: Memo = getMemos.find((value) => value.id == addId) as Memo;    

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  setId(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDate(e.target.value);
  };
  const onChangeMarkDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMark_div = parseInt(e.target.value);
    setMark_div(newMark_div);
  };
  const onClickPut = async () => {
    try {
      const token = getItem(Keys.access_token);
      await axios.put<Memo>(
        `https://raisetech-memo-api.herokuapp.com/api/memo/${id}`,
        {
          title: title,
          category: category,
          description: description,
          date: date,
          mark_div: mark_div,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await axios.get<Memo[]>(
        "https://raisetech-memo-api.herokuapp.com/api/memos",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setGetMemos(response.data);
      console.log(getMemos);
      setId("");
      setTitle("");
      setCategory("");
      setDescription("");
      setDate("");
      setMark_div(0);
      props.setShow(false);
    } catch (error) {
      toast.error("失敗しました");
    }
  };
  
  
    return (
      <Box>
        <h1>この記事を編集します</h1>
        <form>
          <input
            type="number"
            onChange={onChangeId}
            value={id}
            defaultValue={editMemo.id}
          />
          <br />
          <input
            type="text"
            onChange={onChangeTitle}
            value={title}
            required
            defaultValue={editMemo.title}
          />
          <br />
          <input
            type="text"
            onChange={onChangeCategory}
            value={category}
            defaultValue={editMemo.category}
          />
          <br />
          <textarea
            onChange={onChangeDescription}
            value={description}
            defaultValue={editMemo.description || ""}
          ></textarea> 
          <br />
          <input
            type="date"
            onChange={onChangeDate}
            value={date}
            defaultValue={editMemo.date}
          ></input>
          <input
            type="radio"
            name="revel"
            value="0"
            onChange={onChangeMarkDiv}
            defaultValue={editMemo.mark_div || 0}
          />
          重要
          <input
            type="radio"
            name="revel"
            value="1"
            onChange={onChangeMarkDiv}
            defaultValue={editMemo.mark_div || 1}
          />
          普通
          <br />
          <button type="button" onClick={onClickPut}>
            編集する
          </button>
        </form>
        <div>
          <Toaster />
        </div>
      </Box>
    );
  });
