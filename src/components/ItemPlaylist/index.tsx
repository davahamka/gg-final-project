import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Item } from "../../modules/playlist/entities";
import { FiChevronRight, FiMusic } from "react-icons/fi";
import { useHistory } from "react-router-dom";

type Props = {
  data: Item;
};

const ItemPlaylist = ({ data }: Props) => {
  const history = useHistory();
  return (
    <Box bg="canvas.index1" color="white">
      {data.images[0]?.url ? (
        <Image src={data.images[0]?.url} width="260px" height="260px" />
      ) : (
        <Box
          bg="blackAlpha.500"
          width="260px"
          height="260px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FiMusic size="3em" />
        </Box>
      )}
      <Box height="120px" px="6px" pos="relative">
        <Box
          pos="absolute"
          bg="black"
          right="4"
          width="48px"
          height="48px"
          rounded="full"
          top="0"
          mt="-6"
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            history.push(`/playlist/${data.id}`);
          }}
        >
          <FiChevronRight fontWeight="bold" fontSize="1.6em" />
        </Box>
        <Heading fontSize="xl" mt="4px">
          {data.name}
        </Heading>
        <Text fontSize="sm" color="whiteAlpha.500">
          {data.description}
        </Text>
      </Box>
    </Box>
  );
};

export default ItemPlaylist;
