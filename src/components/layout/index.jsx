import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

import Header from "../layout/header";
import Footer from "../layout/footer";

const MainLayout = ({ children }) => {
  return (
    <Box width="100%">
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
