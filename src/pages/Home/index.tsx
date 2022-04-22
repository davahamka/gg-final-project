import React from "react";
import {
  Box,
  Button,
  GridItem,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Spinner,
  Text,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import Main from "./Main";
import { useAppDispatch, useAppSelector } from "../../hooks";
import ItemTrack from "../../components/ItemTrack";
import { FiMusic } from "react-icons/fi";
import { useForm } from "react-hook-form";
import {
  createPlaylist,
  getMyPlaylist,
  insertTrackToPlaylist,
} from "../../modules/playlist/playlistSlice";
import {
  removeSelectedTracks,
  resetSelectedTracks,
  setSelectedTracks,
} from "../../modules/tracks/trackSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Home = () => {
  const dispatch = useAppDispatch();
  const { token, dataProfile } = useAppSelector((state) => state.auth);
  const { searchData, selectedTracks, searchStatus } = useAppSelector(
    (state) => state.track
  );
  const { statusCreatePlaylist } = useAppSelector((state) => state.playlist);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ title: string; description: string }>();

  const onSubmit = (data: { title: string; description: string }) => {
    console.log("first");
    dispatch(
      createPlaylist({
        description: data.description,
        name: data.title,
        token: token as string,
        userId: dataProfile?.id as string,
      })
    )
      .unwrap()
      .then((data) => {
        const urisSelectedTracks = selectedTracks
          .map((item) => item.uri)
          .join(",");
        dispatch(
          insertTrackToPlaylist({
            playlistId: data.id,
            token: token as string,
            uris: urisSelectedTracks,
          })
        )
          .unwrap()
          .then(() => {
            reset();
            dispatch(resetSelectedTracks());
            dispatch(getMyPlaylist(token as string));
          });
      });
  };

  return (
    <Layout>
      <Box px={{ base: "12px", lg: "48px" }} pb="48px">
        {selectedTracks.length > 0 ? (
          <>
            <Text color="#fff">New Playlist</Text>
            <Box height="380px" bg="#1F1F22" mb="24px">
              <SimpleGrid columns={8}>
                <GridItem colSpan={2} p="3">
                  <Box
                    color="#fff"
                    height="240px"
                    bg="blackAlpha.400"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FiMusic size="3em" />
                  </Box>
                  <Box overflowY="scroll" height="100px" mt="14px">
                    {selectedTracks.map((item) => (
                      <Box
                        key={item.id}
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Text color="#fff">
                          {item.name.length > 10 ? (
                            <Tooltip label={item.name}>
                              <Text>{item.name.slice(0, 10) + "..."}</Text>
                            </Tooltip>
                          ) : (
                            item.name
                          )}
                        </Text>
                        <AiOutlineCloseCircle
                          color="#fff"
                          cursor="pointer"
                          onClick={() => {
                            dispatch(removeSelectedTracks(item));
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </GridItem>
                <GridItem colSpan={6} px="14px" pos="relative" height="full">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                      mt="8px"
                      display="flex"
                      flexDir="column"
                      experimental_spaceY="6px"
                      height="full"
                    >
                      <Box>
                        <Box as="label" fontSize="sm" color="#fff">
                          Title
                        </Box>
                        <Input
                          placeholder="Insert playlist title"
                          mt="4px"
                          color="white"
                          borderColor="rgba(235, 235, 255,0.05)"
                          isInvalid={!!errors.title}
                          {...register("title", { required: true })}
                        />
                      </Box>
                      <Box>
                        <Box as="label" fontSize="sm" color="#fff">
                          Description
                        </Box>
                        <Textarea
                          mt="4px"
                          placeholder="Insert playlist description"
                          rows={4}
                          color="white"
                          borderColor="rgba(235, 235, 255,0.05)"
                          isInvalid={!!errors.description}
                          {...register("description", {
                            required: true,
                            minLength: 10,
                          })}
                        />
                        {!!errors.description && (
                          <Text color="red.500" mt="4px" fontSize="xs">
                            Check your input. Minimum length 10
                          </Text>
                        )}
                      </Box>
                      <Box>
                        <Button
                          isLoading={statusCreatePlaylist === "pending"}
                          type="submit"
                          mt="60px"
                          width="full"
                        >
                          Add Playlist
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </GridItem>
              </SimpleGrid>
            </Box>
          </>
        ) : (
          ""
        )}
        <Heading fontSize="lg" color="whiteAlpha.900" mt="4px" mb="12px">
          Pencarian
        </Heading>
        <Box display="flex" flexDir="column" experimental_spaceY="12px">
          {searchStatus === "pending" ? (
            <Box display="flex" justifyContent={"center"} height="100px">
              <Spinner color="white" />
            </Box>
          ) : (
            searchData?.tracks.items.map((item) => (
              <ItemTrack data={item} key={item.id} />
            ))
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
