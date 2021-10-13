import { memo } from "react";
import { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Keys, setItem } from "../utils/LocalStorage";
import toast, { Toaster } from "react-hot-toast";
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";

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
    try {
      const response = await axios
        .post("https://raisetech-memo-api.herokuapp.com/api/login", {
          email: email,
          password: password,
        })
      console.log(response.data.access_token);
      setItem(Keys.access_token, response.data.access_token);
      toast.success("ログインしました！");      
      setRedirect(true);
    }
    catch(error) {
      toast.error("ログインに失敗しました．．．");
    };
  };

  if (redirect) {
    return <Redirect to={"/notepad"} />;
  }

  return (
    <Box>
      <Text fontSize={24} textAlign={["center"]}>
        メールアドレスとパスワードを入力してください
      </Text>
      <FormControl>
        <Input
          type="email"
          onChange={(e) => onChangeEmail(e)}
          placeholder="e-mailを入力"
          w="500px"
          m="10px"
        />
        <br />
        <Input
          type="password"
          onChange={(e) => onChangePassword(e)}
          placeholder="パスワードを入力"
          w="500px"
          m="10px"
        />
        <br />
        <Button
          colorScheme="blue"
          size="sm"
          m="10px"
          type="button"
          onClick={onClickLogin}
        >
          ログイン
        </Button>
      </FormControl>
      <Toaster />
    </Box>
  );
  });
