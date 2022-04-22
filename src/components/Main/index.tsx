import React from "react";
import { Box, Text } from "@chakra-ui/react";
import MainHeader from "./MainHeader";

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <Box bg="canvas.index0" width="full" minHeight="100vh">
      <MainHeader />
      {children}
    </Box>
  );
};

export default Main;
