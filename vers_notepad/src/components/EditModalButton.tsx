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
    setAddId(e.target.value);
    console.log(addId);
  };
  const openModal = () => {
    setShow(true);    
  };
  return (
    <Box>
      <FormControl>
        <Input
          type="number"
          w="100px"
          onChange={onChangeId}
          placeholder="idを入力"
        />
        <Button colorScheme="teal" size="sm" m="10px" onClick={openModal}>
          記事を編集する
        </Button>
      </FormControl>
      <EditModal show={show} setShow={setShow} />      
    </Box>
  );
});
