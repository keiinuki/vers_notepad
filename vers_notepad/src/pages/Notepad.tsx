import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { Keys, getItem } from "../utils/LocalStorage";
import { Memo } from "../type/Type"
import toast, { Toaster } from "react-hot-toast";
import { LogoutButton } from "../components/LogoutButton";
import { ToArticlesButton } from "../components/ToArticlesButton";
import {
  Box,
  FormControl,
  Input,
  Button,
  Textarea,
  Radio, RadioGroup,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Calendar from "react-calendar";
import { BackHomeButton } from "../components/BackHomeButton";

export const Notepad = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [mark_div, setMark_div] = useState<number>(0);
  const [memos, setMemos] = useState<Memo>();
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
    setDate(e.target.value);
  };
  const onChangeMarkDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newMark_div = parseInt(e.target.value)
    setMark_div(newMark_div)
  };
  
  const onClickAdd = async () => {
    try{
      const token = getItem(Keys.access_token);
      const response = await axios.post<Memo>("https://raisetech-memo-api.herokuapp.com/api/memo",
        {
		    title: title,
	      category: category,
        description: description,
        date: date,
        mark_div: mark_div,
        },{
        headers: {
        Authorization: `Bearer ${token}`,        
        }
        })
      console.log(response.data);
      setMemos(response.data);
      setTitle("");
      setCategory("");
      setDescription("");
      setDate("");
      setMark_div(0);
    }
    catch (error) {
      console.error("失敗しました");
      toast.error("もう一度ログインしてください！");
    };
    };
  
  return (
    <Box>
      <h1>ここをメモ帳にします</h1>
      <FormControl>
        <Input
          type="text"
          onChange={onChangeTitle}
          placeholder="タイトルを入力"
          value={title}
          isrequired
        />
        <br />
        <Input
          type="text"
          onChange={onChangeCategory}
          placeholder="カテゴリーを入力"
          value={category}
        />
        <br />
        <Textarea
          onChange={onChangeDescription}
          placeholder="本文を入力"
          value={description}
        />
        <br />
        <input type="date" onChange={onChangeDate} value={date} />
        {/*<RadioGroup onChange={setMark_div} value={mark_div}>
          <Radio value="0" >重要</Radio>
          <Radio value="1">普通</Radio>
        </RadioGroup>*/}
        <input type="radio" name="revel" value="0" onChange={onChangeMarkDiv} />
        重要
        <input type="radio" name="revel" value="1" onChange={onChangeMarkDiv} />
        普通
        <Button type="button" onClick={onClickAdd}>
          保存する
        </Button>
        <br />
      </FormControl>
      <Box>
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
        <Box>
          <ToArticlesButton />
        </Box>
        <Toaster />
      </Box>
      <Box>
        <LogoutButton color="white" />

        <BackHomeButton />

        <Link to="/">HOMEはこちら</Link>
      </Box>
    </Box>
  );
};