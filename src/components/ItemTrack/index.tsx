import React from "react";
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { Item } from "../../modules/tracks/entities";
import { formatToMinutesSecond } from "../../utils/formatToMinuteSeconds";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  removeSelectedTracks,
  setSelectedTracks,
} from "../../modules/tracks/trackSlice";

type Props = {
  data: Item;
};

const ItemTrack = ({ data }: Props) => {
  const { selectedTracks } = useAppSelector((state) => state.track);
  const dispatch = useAppDispatch();
  return (
    <Box
      bg="#1F1F22"
      display="flex"
      rounded="md"
      cursor="pointer"
      transition="all 500ms"
      _hover={{
        bg: "bg.hover",
      }}
      justifyContent="space-between"
    >
      <Box display="flex">
        <Box>
          <Image src={data.album.images[0].url} width="120px" minW="120px" />
        </Box>
        <Box px="12px" py="8px">
          <Text color="whiteAlpha.900" fontSize="xl" fontWeight="bold">
            {data.name}
          </Text>
          <HStack>
            <Text
              bg="blackAlpha.600"
              px="4px"
              rounded="md"
              color="whiteAlpha.800"
              fontSize="xs"
            >
              ARTIST
            </Text>
            <Text color="white" fontSize="sm">
              {data.artists[0].name}
            </Text>
          </HStack>
          <Text color="white">{formatToMinutesSecond(data.duration_ms)}</Text>
        </Box>
      </Box>
      <Box alignSelf="end" mx="14px" mb="12px">
        {selectedTracks.some((item) => item.uri === data.uri) ? (
          <Button
            onClick={() => {
              dispatch(removeSelectedTracks(data));
            }}
          >
            Deselect
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(setSelectedTracks(data));
            }}
          >
            Select
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ItemTrack;
