import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getProfileAuth } from "../../modules/auth/authSlice";
import { useHistory } from "react-router-dom";

const SidebarHeader = () => {
  const dispatch = useAppDispatch();

  const history = useHistory();

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
      <Menu>
        <MenuButton as={Box} cursor="pointer">
          <Box cursor="pointer">
            <AiOutlineEllipsis color="#fff" fontSize="1.5em" />
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              history.push("/profile");
            }}
          >
            Profile
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SidebarHeader;
