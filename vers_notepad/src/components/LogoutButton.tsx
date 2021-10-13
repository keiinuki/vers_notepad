import { memo } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getMemosState } from "../store/atom";
import { Memo } from "../type/Type";
import { Keys, removeItem } from "../utils/LocalStorage";
import toast from "react-hot-toast";
import { Button } from "@chakra-ui/react";

type ButtonColor = {
  color?: string;
};

export const LogoutButton = memo((props: ButtonColor) => {
  const [getMemos, setGetMemos] = useRecoilState<Memo[]>(getMemosState);
  const history = useHistory();
  const onClick = () => {
    removeItem(Keys.access_token);
    const deleteMemos = [...getMemos];
    deleteMemos.length = 0;
    setGetMemos(deleteMemos);
    console.log(getMemos);
    history.push("/");
    toast.success("ログアウトしました！");
  };

  return (
    <Button
      colorScheme="red"
      size="sm"
      mx="10px"
      my="50px"
      onClick={onClick}
      style={{ color: props.color }}
    >
      ログアウトします
    </Button>
  );
});
