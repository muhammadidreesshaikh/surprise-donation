import React, { useState } from "react";
import { Box, Divider, Stack, Container, Toolbar, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CustomButton from "../../components/buttons";
import logoIcon from "../../assets/icons/logo.svg";
import downIcon from "../../assets/icons/down-arrow.svg";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 15,
    minWidth: 200,
    border: "1px solid #f3f3f3",
    padding: theme.spacing(0, 1),
    "& .MuiMenuItem-root:active": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity
      ),
    },
  },
}));

const menuItems = [
  {
    id: 1,
    label: "HOW IT WORKS",
    value: "how_works",
  },
  {
    id: 2,
    label: "FAQ",
    value: "faq",
  },
  {
    id: 3,
    label: "Safety is a must",
    value: "safety_must",
  },
  {
    id: 4,
    label: "Sending optional Tips",
    value: "sending_tips",
  },
  {
    id: 5,
    label: "Post Your Videos",
    value: "post_videos",
  },
  {
    id: 6,
    label: "State, City or Town",
    value: "state_city",
  },
  {
    id: 7,
    label: "Donate or request free items",
    value: "donate_request",
  },
  {
    id: 8,
    label: "Celebrity Video",
    value: "celebrity_video",
  },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box paddingTop={2}>
      <Container maxWidth={"xl"} disableGutters>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box>
            <img src={logoIcon} width={100} alt="logo" />
          </Box>

          {/* Dropdown */}
          <Box>
            <CustomButton
              onClick={handleClick}
              variant="contained"
              width={"auto"}
              btnLabel="What's On Your Mind"
              endIcon={<img src={downIcon} width={13} alt="icon" />}
            />

            <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
              {menuItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <MenuItem
                    onClick={() => {
                      console.log(item.value); // yahan value milegi
                      handleClose();
                    }}
                  >
                    {item.label}
                  </MenuItem>

                  {index !== menuItems.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </StyledMenu>
          </Box>

          {/* Actions */}
          <Stack direction="row" spacing={4}>
            <CustomButton
              variant="contained"
              width={"auto"}
              btnLabel="Log In"
            />

            <CustomButton
              variant="outlined"
              width={"auto"}
              btnLabel="Sign Up"
            />
          </Stack>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Header;
