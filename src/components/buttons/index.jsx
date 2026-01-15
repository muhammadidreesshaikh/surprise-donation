import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ btnLabel, sx, ...props }) => {
  return (
    <Button sx={{ ...sx }} {...props}>
      {btnLabel}
    </Button>
  );
};

export default CustomButton;
