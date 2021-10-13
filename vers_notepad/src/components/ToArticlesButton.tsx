import { memo } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const ToArticlesButton = memo(() => {
  const history = useHistory();
  const onClickGet = () => {
    history.push("/notepad/pastarticles");
  };

  return (
    <div>
      <Button colorScheme="teal" size="sm" type="button" onClick={onClickGet}>
        今までの記事はこちら
      </Button>
    </div>
  );
});



