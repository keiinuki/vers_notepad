import { memo } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getMemosState } from "../store/atom";
import { Memo } from "../type/Type";
import { Button } from "@chakra-ui/react";

type ButtonColor = {
  color?: string;
};

export const BackHomeButton = memo((props: ButtonColor) => {
  const [getMemos, setGetMemos] = useRecoilState<Memo[]>(getMemosState);
  const history = useHistory();
  const onClick = () => {
    const deleteMemos = [...getMemos];
    deleteMemos.length = 0;
    setGetMemos(deleteMemos);
    console.log(getMemos);
    history.push("/");
  };

  return (
    <Button
      colorScheme="green"
      size="sm"
      onClick={onClick}
      style={{ color: props.color }}
    >
      ＨＯＭＥに戻る
    </Button>
  );
});
