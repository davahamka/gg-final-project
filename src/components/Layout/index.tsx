import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import Main from "../Main";
import Sidebar from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box w="full" ml="18%">
        <Main>{children}</Main>
      </Box>
    </Box>
  );
};

export default Layout;
