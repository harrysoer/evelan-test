import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto/500.css";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/500.css";

const theme = extendTheme({
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Rubik",
  },
  colors: {
    radioColor: {
      500: "#424D79",
    },
  },
});

export default theme;
