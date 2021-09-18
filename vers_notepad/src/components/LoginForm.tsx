import { memo } from "react";
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Keys, setItem } from "../utils/LocalStorage";
import toast, { Toaster } from "react-hot-toast";
import { chakra } from "@chakra-ui/react";

export const LoginForm = memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [redirect, setRedirect] = useState<boolean>(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    await axios
      .post("https://raisetech-memo-api.herokuapp.com/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.access_token);
        setItem(Keys.access_token, response.data.access_token);
        toast.success("ログインしました！");
      })
      .then(() => {
        setRedirect(true);
      })
      .catch(() => {
        toast.error("ログインに失敗しました．．．");
      });
  };

  if (redirect) {
    return <Redirect to={"/notepad"} />;
  }

  return (
    <div>
      <h2>メールアドレスとパスワードを入力してください</h2>
      <form>
        <input
          type="email"
          onChange={(e) => onChangeEmail(e)}
          placeholder="e-mailを入力"
        />
        <br />
        <input
          type="password"
          onChange={(e) => onChangePassword(e)}
          placeholder="パスワードを入力"
        />
        <br />
        <button type="button" onClick={onClickLogin} >
          ログインする
        </button>
      </form>
      <Toaster />
    </div>
  );
});
