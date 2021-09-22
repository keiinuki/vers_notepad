import { useState } from "react";
import { memo } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { getMemosState } from "../store/atom";
import { Memo } from "../type/Type";
import { Keys, getItem } from "../utils/LocalStorage";
import toast ,{ Toaster } from "react-hot-toast";
import { Box, Button, FormControl, Input } from "@chakra-ui/react";

export const DeleteMemoButton = memo(() => {
  const [id, setId] = useState<string>("");
  const [getMemos, setGetMemos] = useRecoilState<Memo[]>(getMemosState);  
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const newId = value.toString();
    setId(newId);
  };
  
  const onClickDelete = () => {
    const token = getItem(Keys.access_token);
    axios
      .delete<Memo[]>(
        `https://raisetech-memo-api.herokuapp.com/api/memo/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      .then(() => {
        const newGetMemos = [...getMemos];
        newGetMemos.length = 0;
        setGetMemos(newGetMemos);
        console.log(getMemos);
      }) 
      .catch(() => {
        toast.error("idが間違っています");
      });
      setTimeout(() => {
      axios
        .get<Memo[]>("https://raisetech-memo-api.herokuapp.com/api/memos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          const newGetMemos = [...getMemos, ...response.data];
          setGetMemos(newGetMemos);
        })
        .catch(() => {
          toast.error("失敗しました");
        });
    }, 1000);
    };
  
  return (
    <Box>
      <FormControl>
        <Input
          type="number"
          onChange={onChangeId}
          placeholder="idを入力"
          value={id}
        />
        <Button type="button" onClick={onClickDelete}>
          削除する
        </Button>
      </FormControl>
      <Toaster />
    </Box>
  );
});
