import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Keys, getItem } from "../utils/LocalStorage";
import { Memo } from "../type/Type";
import { useRecoilState } from "recoil";
import { getMemosState } from "../store/atom";
import toast, { Toaster } from "react-hot-toast";
import { Box } from "@chakra-ui/react";

export const EditForm = () => {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [mark_div, setMark_div] = useState<number>(0);
  const [memos, setMemos] = useState<Memo>();
  const [getMemos, setGetMemos] = useRecoilState<Memo[]>(getMemosState);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const newId = value.toString();
    setId(newId);
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
          placeholder="idを入力"
          value={id}
          defaultValue="ここにstateを呼び出す関数"
        /><br/>
        <input
          type="text"
          onChange={onChangeTitle}
          placeholder="タイトルを入力"
          value={title}
          required
          defaultValue="ここにstateを呼び出す関数"
        />
        <br />
        <input
          type="text"
          onChange={onChangeCategory}
          placeholder="カテゴリーを入力"
          value={category}
          defaultValue="ここにstateを呼び出す関数"
        />
        <br />
        <textarea
          onChange={onChangeDescription}
          placeholder="本文を入力"
          value={description}
          defaultValue="ここにstateを呼び出す関数"
        ></textarea>
        <br />
        <input
          type="date"
          onChange={onChangeDate}
          value={date}
          defaultValue="ここにstateを呼び出す関数"
        ></input>
        <input
          type="radio"
          name="revel"
          value="0"
          onChange={onChangeMarkDiv}
          defaultValue="ここにstateを呼び出す関数"
        />
        重要
        <input
          type="radio"
          name="revel"
          value="1"
          onChange={onChangeMarkDiv}
          defaultValue="ここにstateを呼び出す関数"
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
};
