import {
  ListItem,
  UnorderedList,
  Box,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getMemosState } from "../store/atom";
import { Link } from "react-router-dom";
import { Memo } from "../type/Type";
import { Keys, getItem } from "../utils/LocalStorage";
import axios from "axios";
import { LogoutButton } from "../components/LogoutButton";
import { DeleteMemoButton } from "../components/DeleteMemoButton";
import { EditModalButton } from "../components/EditModalButton"
import { BackHomeButton } from "../components/BackHomeButton";
import toast from "react-hot-toast";


export const PastArticles = () => {
  const token = getItem(Keys.access_token);
  const [getMemos, setGetMemos] = useRecoilState<Memo[]>(getMemosState);
  useEffect(() => {
    axios
      .get<Memo[]>("https://raisetech-memo-api.herokuapp.com/api/memos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const newGetMemos = [...getMemos, ...response.data];
        setGetMemos(newGetMemos);
      })
      .catch((error) => {
        toast.error("ログインしてください！");
      });
      
  },[]);

  return (
    <Box m="auto" p={35} bg="gray.50">
      <Text fontSize={32} textAlign={["center"]}>
        今までの記事はこちら
      </Text>
      <Flex>
        <UnorderedList>
          {getMemos.map((getMemos: Memo, index: number) => (
            <Box m={5} p={15} w={300} bg="tomato" key={index}>
              <ListItem>
                {getMemos?.id}
                <br />
                {getMemos?.title}
                <br />
                {getMemos?.category}
                <br />
                {getMemos?.description}
                <br />
                {getMemos?.date}
                <br />
                {getMemos?.mark_div}
              </ListItem>
            </Box>
          ))}
          <Spacer />
        </UnorderedList>
      </Flex>
      <Box>
        <DeleteMemoButton />
        <EditModalButton />
      
        <LogoutButton color="white" />
        <BackHomeButton />
      </Box>
      <Text textAlign={["center"]} color="green">
        <Link to="/">HOMEはこちら</Link>
      </Text>
    </Box>
  );
};
