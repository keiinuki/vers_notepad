import { memo } from "react";
import { Keys, getItem } from "../utils/LocalStorage";
import { useRecoilState } from "recoil";
import { getMemosState } from "../store/atom";
import { Memo } from "../type/Type";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const GetListButton = memo(() => {
  const history = useHistory();
  const [getMemos, setGetMemos] = useRecoilState<Memo[]>(getMemosState);
  const onClickGet = () => {
    const token = getItem(Keys.access_token);
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
      .then(() => {
        history.push({ pathname: "/notepad/pastarticles", state: getMemos });
      })
      .catch(() => {
        toast.error("ログインが必要です");
      });
  };
  
  return (
    <div>
      <Button colorScheme="teal" size="sm" type="button" onClick={onClickGet}>
        今までの記事はこちら
      </Button>
      <Toaster />
    </div>
  );
});



