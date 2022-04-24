import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../modules/auth/authSlice";
import { getMyPlaylist } from "../../modules/playlist/playlistSlice";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { dataMyPlaylist } = useAppSelector((state) => state.playlist);
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMyPlaylist(token as string));
  }, []);

  return (
    <Box
      display={{ base: "none", lg: "block" }}
      width="18%"
      bg="#212124"
      height="100vh"
      overflowY="scroll"
      pos="fixed"
      px="6"
    >
      <SidebarHeader />

      <Box pt="40px" display="flex" flexDir="column" experimental_spaceY="12px">
        <Box
          color="#fff"
          cursor="pointer"
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </Box>
        <Box color="whiteAlpha.200" cursor="pointer">
          Explore
        </Box>
        <Box
          color="#fff"
          cursor="pointer"
          onClick={() => {
            history.push("/playlist");
          }}
        >
          Playlist
        </Box>
        <Box
          cursor="pointer"
          color="#fff"
          onClick={() => {
            dispatch(logout());
            history.push("/login");
          }}
        >
          Logout
        </Box>
      </Box>

      <Box pb="16px">
        <SidebarMenu title="MY PLAYLISTS" data={dataMyPlaylist?.items} />
      </Box>
    </Box>
  );
};

export default Sidebar;
