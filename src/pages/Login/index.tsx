import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { RiGithubFill, RiSpotifyFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setToken } from "../../modules/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token, history]);

  const handleLogin = () => {
    window.location.replace(
      `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=user-read-email playlist-modify-private playlist-read-private`
    );
  };

  const accessTokenFromUrl = window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split("&")[0]
    .split("=")[1];

  if (accessTokenFromUrl) {
    dispatch(setToken({ accessToken: accessTokenFromUrl }));
    history.push({
      pathname: "/",
    });
  }

  return (
    <Box position="relative">
      <Box display="flex" width="100vw" height="100vh">
        <Box
          width="70%"
          display={{ base: "none", lg: "flex" }}
          flexDir="column"
          justifyContent="center"
          bg="#171719"
          pl="40px"
        >
          <Text color="fg.default" fontSize="xl">
            Play music with
          </Text>
          <Heading fontSize="4xl" color="white" fontWeight="bold">
            Limbo{"'"}s App
          </Heading>
          <Text fontSize="sm" color="white" mt="8px">
            Generasi Gigih 2.0 Project
          </Text>
        </Box>
        <Box alignSelf="center" mx="auto">
          <Button
            leftIcon={<RiSpotifyFill size={"1.2em"} />}
            bg="#1db954"
            _hover={{
              backgroundColor: "#1db954",
            }}
            _active={{
              backgroundColor: "#1db954",
            }}
            onClick={() => {
              handleLogin();
            }}
            rounded="2xl"
            width="260px"
          >
            Login with Spotify
          </Button>
          <Box
            textAlign="center"
            mt="14px"
            alignItems="center"
            display="flex"
            flexDir="column"
          >
            <Text fontSize="xs">Link github for this project</Text>
            <Box cursor="pointer" _hover={{ textColor: "#1db954" }}>
              <RiGithubFill
                onClick={() => {
                  window.open("", "_blank");
                }}
                fontSize="1.6em"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
