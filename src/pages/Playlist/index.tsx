import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ItemPlaylist from "../../components/ItemPlaylist";
import Layout from "../../components/Layout";
import { useAppSelector } from "../../hooks";

const Playlist = () => {
  const { dataMyPlaylist } = useAppSelector((state) => state.playlist);

  return (
    <Layout>
      <Box px={{ base: "20px", lg: "48px" }} pb="48px">
        <Heading fontSize="lg" color="whiteAlpha.900" mt="4px" mb="12px">
          My Playlist
        </Heading>
        <SimpleGrid columns={4} gap="14px">
          {dataMyPlaylist?.items.map((item) => (
            <GridItem key={item.id}>
              <ItemPlaylist data={item} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Playlist;
