import { createTheme } from "@mui/material/styles";
import { border } from "@mui/system";
import { color } from "framer-motion";

const APP_THEME = createTheme({
  palette: {
    primary: {
      main: "#4EC0E5",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#000",
      secondary: "#757575",
      blue: "#4EC0E5",
      white: "#ffffff",
      dark: "#151515",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // textTransform: "none",
          borderRadius: 12,
          // fontWeight: 400,
          // fontFamily: '"Poppins", sans-serif',
        },
      },

      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#4EC0E5",
            color: "#ffffff",
            fontSize: "17px",
            padding: "10px 35px",
            boxShadow: "none",
            "&:hover": {
              background: "#4EC0E5",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "#ffff",
            color: "#4EC0E5",
            fontSize: "17px",
            padding: "10px 35px",
            boxShadow: "none",
            "&:hover": {
              background: "#f0fbff",
              border: "none",
              color: "#4EC0E5",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            },
          },
        },
      ],
    },
    MuiChip: {
      // styleOverrides: {
      variants: [
        {
          props: { variant: "success" },
          style: {
            fontSize: 16,
            fontWeight: 500,
            padding: "15px 15px",
            backgroundColor: "#C9FED9",
            color: "#0da757ff",
            fontFamily: '"Poppins", sans-serif',
            lineHeight: "normal",
          },
        },
        {
          props: { variant: "default" },
          style: {
            fontSize: 16,
            fontWeight: 500,
            padding: "15px 15px",
            backgroundColor: "#D6F2FB",
            color: "#4EC0E5",
            fontFamily: '"Poppins", sans-serif',
            lineHeight: "normal",
          },
        },
        {
          props: { variant: "warning" },
          style: {
            fontSize: 16,
            fontWeight: 500,
            padding: "15px 15px",
            backgroundColor: "#FFF7D4",
            color: "#FFCE00",
            fontFamily: '"Poppins", sans-serif',
            lineHeight: "normal",
          },
        },
        {
          props: { variant: "error" },
          style: {
            fontSize: 16,
            fontWeight: 500,
            padding: "15px 15px",
            backgroundColor: "#FF00001A",
            color: "#ff0808ff",
            fontFamily: '"Poppins", sans-serif',
            lineHeight: "normal",
          },
        },
      ],
      // },
    },
  },
});

export default APP_THEME;
