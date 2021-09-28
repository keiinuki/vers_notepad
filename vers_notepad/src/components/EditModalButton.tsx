import "./components.css";
import { useState } from "react";
import { memo } from "react";
import { EditModal } from "./EditModal";
import { useRecoilState } from "recoil";
import { addIdState } from "../store/atom";
import { Box, Button, FormControl, Input } from "@chakra-ui/react";

export const EditModalButton = memo(() => {
  const [show, setShow] = useState<boolean>(false);
  const [addId, setAddId] = useRecoilState<string>(addIdState);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    const newAddId = value.toString();
    setAddId(newAddId);
    console.log(addId);
  };
  const openModal = () => {
    setShow(true);
  };
  return (
    <Box>
      <FormControl>
        <Input type="number" onChange={onChangeId} placeholder="idを入力" />
        <Button colorScheme="teal" size="sm" onClick={openModal}>
          記事を編集する
        </Button>
      </FormControl>
      <EditModal show={show} setShow={setShow} />
    </Box>
  );
});