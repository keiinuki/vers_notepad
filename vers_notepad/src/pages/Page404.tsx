import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

export const Page404 = () => {  
  return (
    <Box>
      <Text fontSize={32} textAlign={["center"]}>ページが見つかりません</Text>
      <br />
      <Link to="/">HOMEはこちら</Link>
    </Box>
  )
};