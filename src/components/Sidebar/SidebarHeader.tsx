import React, { useEffect } from "react";
import { Avatar, Box, Image, Text } from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getProfileAuth } from "../../modules/auth/authSlice";

const SidebarHeader = () => {
  const dispatch = useAppDispatch();
  const { statusProfile, token, dataProfile } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (token) {
      dispatch(getProfileAuth(token));
    }
  }, [token]);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      pt="30px"
    >
      <Image
        rounded="full"
        fallbackSrc=""
        width="42px"
        height="42px"
        src={`${dataProfile?.images[0].url}`}
      />
      <AiOutlineEllipsis color="#fff" fontSize="1.5em" />
    </Box>
  );
};

export default SidebarHeader;
