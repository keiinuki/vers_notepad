import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  Text,
  Flex
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getMemosState } from "../store/atom";
import { Link, useLocation } from "react-router-dom";
import { Memo } from "../type/Type";
import { LogoutButton } from "../components/LogoutButton";
import { DeleteMemoButton } from "../components/DeleteMemoButton";

export const PastArticles = () => {
  const { state } =
    useLocation<{ getMemos: Memo[] }>();
  const [getMemos, setGetMemos] = useRecoilState(getMemosState);
  useEffect(() => {
    if (state.getMemos) {
      setGetMemos(state.getMemos);
    }
  }, [state]);

  return (
    <Box m="auto" p={35} bg="gray.50">
      <Text fontSize={32} textAlign={["center"]}>
        今までの記事はこちら
      </Text>

      <UnorderedList>
        {getMemos.map((getMemos, i) => (
          <Flex m={5} p={15} w={300} bg="tomato">
            <ListItem key={i}>
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
          </Flex>
        ))}
      </UnorderedList>
      <Box>
        <DeleteMemoButton/>
        <LogoutButton color="white" />
      </Box>
      <Text textAlign={["center"]} color="green">
        <Link to="/">HOMEはこちら</Link>
      </Text>
    </Box>
  );
};
