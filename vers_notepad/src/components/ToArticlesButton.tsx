import { memo } from "react";
import { useHistory } from "react-router-dom";
import { Button, Box } from "@chakra-ui/react";

export const ToArticlesButton = memo(() => {
  const history = useHistory();
  const onClickGet = () => {
    history.push("/notepad/pastarticles");
  };

  return (
    <Box>
      <Button
        colorScheme="teal"
        size="sm"
        m="10px"
        type="button"
        onClick={onClickGet}
      >
        今までの記事はこちら
      </Button>
    </Box>
  );
});



