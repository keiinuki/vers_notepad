import {
  ListItem,
  UnorderedList,
  Box,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getMemosState } from "../store/atom";
import { Link, useLocation } from "react-router-dom";
import { Memo } from "../type/Type";
import { LogoutButton } from "../components/LogoutButton";
import { DeleteMemoButton } from "../components/DeleteMemoButton";
import { EditModalButton } from "../components/EditModalButton"
import { BackHomeButton } from "../components/BackHomeButton";


export const PastArticles = () => {
  const { state } =
    useLocation<{ getMemos: Memo[] }>();
  const [getMemos, setGetMemos] = useRecoilState(getMemosState);
  useEffect(() => {
    if (state.getMemos) {
      setGetMemos(state.getMemos);
    } 
    }, [state.getMemos, setGetMemos]);
  

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
      </Box>
      <Box>
        <BackHomeButton />
      </Box>
      <Text textAlign={["center"]} color="green">
        <Link to="/">HOMEはこちら</Link>
      </Text>
    </Box>
  );
};
