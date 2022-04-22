import { extendTheme } from "@chakra-ui/react";

const colors = {
  canvas: {
    index0: "#171719",
    index1: "#212124",
    index2: "#1F1F22",
  },
  fg: {
    default: "#FCFCFC",
    default065: "#FCFCFCa6",
    subtle: "#9898A6",
  },
  highlight: {
    fg: "#00FFFF",
  },
  bg: {
    hover: "#4C4E54",
  },
  action: {
    border: "#EBEBFFd",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "SF Pro Bold, sans-serif",
    body: "SF Pro Regular, sans-serif",
  },
});

export default theme;
