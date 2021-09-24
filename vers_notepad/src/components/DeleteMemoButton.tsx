import { useState, useCallback } from "react";
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
    
  const onClickDelete = async () => {
    try {
      const token = getItem(Keys.access_token);
      await axios
        .delete<Memo[]>(
          `https://raisetech-memo-api.herokuapp.com/api/memo/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });      
      const response = await axios.get<Memo[]>(
        "https://raisetech-memo-api.herokuapp.com/api/memos",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });      
      setGetMemos(response.data);
      setId("");
      console.log(getMemos);
    }
    catch (error) {
      toast.error("idが違います");
    };
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
