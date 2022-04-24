import React from "react";
import { Box } from "@chakra-ui/react";
import { Item } from "../../modules/playlist/entities";

type Props = {
  data: Item;
};

const ItemPlaylist = ({ data }: Props) => {
  return <Box color="white">{data.name}</Box>;
};

export default ItemPlaylist;
