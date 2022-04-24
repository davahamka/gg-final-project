import { Box, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { Item } from "../../modules/playlist/entities";

type Props = {
  title: string;
  data: Item[] | undefined;
};

const SidebarMenu = ({ title, data }: Props) => {
  const { statusMyPlaylist } = useAppSelector((state) => state.playlist);
  const history = useHistory();

  return (
    <Box mt="32px">
      <Text fontSize="xs" fontWeight="bold" color="#fff" mb="6px">
        {title}
      </Text>
      <Box display="flex" flexDir="column" experimental_spaceY="10px">
        {statusMyPlaylist === "pending"
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Skeleton key={item} height="12px" />
            ))
          : statusMyPlaylist === "succeded"
          ? data?.map((item) => (
              <Box
                key={item.id}
                textColor="white"
                onClick={() => {
                  history.push(`/playlist/${item.id}`);
                }}
                cursor="pointer"
              >
                {item.name}
              </Box>
            ))
          : statusMyPlaylist === "idle"
          ? ""
          : ""}
      </Box>
    </Box>
  );
};

export default SidebarMenu;
