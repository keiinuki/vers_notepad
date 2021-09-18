import { memo } from "react";
import { useHistory } from "react-router-dom";
import { Keys, removeItem } from "../utils/LocalStorage";
import toast from "react-hot-toast";

type ButtonColor = {
  color?: string;
};

export const LogoutButton = memo((props: ButtonColor) => {
  const history = useHistory();
  const onClick = () => {
    removeItem(Keys.access_token);
    history.push("/");
    toast.success("ログアウトしました！");
  };

  return (
    <button onClick={onClick} style={{ color: props.color }}>
      ログアウトします
    </button>
  );
});
