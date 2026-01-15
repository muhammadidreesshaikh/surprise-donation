import React from "react";
import {
  Box,
  Card,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Container,
  Grid,
  CardContent,
  Chip,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";
import heartGray from "../../assets/icons/heart-gray.svg";
import shareIcon from "../../assets/icons/share-icon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import giftIcon1 from "../../assets/icons/gift-icon.svg";
import img3 from "../../assets/images/img3.png";
import houseImg from "../../assets/images/img4.png";
import CustomButton from "../../components/buttons";

const Donation = () => {
  return (
    <Box>
      <Card
        sx={{
          borderRadius: "12px",
          boxShadow: "none",
          marginTop: 7,
          border: "1px solid #e0e0e0",
          padding: 2,
        }}
      >
        <CardContent sx={{ pb: 1 }}>
          {/* Header Section */}
          <Box display={"flex"} justifyContent={"space-between"} mb={2}>
            <Box display={"flex"} gap={2}>
              <img src={img3} width={65} />
              <Box>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h5" fontWeight="bold">
                    Emma Rodriguez
                  </Typography>

                  <Box
                    component="span"
                    width={5}
                    height={5}
                    borderRadius={50}
                    bgcolor={"text.secondary"}
                  />

                  <Typography variant="body1" color="text.secondary">
                    Austin, TX
                  </Typography>
                </Stack>

                <Chip
                  label="Donation in need"
                  size="small"
                  variant="default"
                  sx={{ marginTop: 1 }}
                />
              </Box>
            </Box>
            <IconButton size="small">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Post Description */}
          <Typography
            fontSize={17}
            lineHeight={1.6}
            color="text.secondary"
            sx={{
              ml: { xs: 0, sm: 10 },
            }}
          >
            Hi everyone! I'm a single mom working two jobs to support my
            8-year-old daughter. After an unexpected car repair bill of $1,200,
            I'm struggling to make ends meet this month. Any help with groceries
            or utilities would mean the world to us. Thank you for taking the
            time to read our story!
          </Typography>
        </CardContent>

        {/* Footer Section */}
        <CardActions sx={{ justifyContent: "space-between", px: 3, mt: 1 }}>
          <Box display={"flex"} gap={2} sx={{ ml: { xs: 0, sm: 8 } }}>
            <Button
              sx={{ fontSize: "14px", color: "text.secondary" }}
              startIcon={<img src={heartGray} width={25} />}
            >
              Like
            </Button>
            <Button
              sx={{ fontSize: "14px", color: "text.secondary" }}
              startIcon={<img src={shareIcon} width={25} />}
            >
              Share
            </Button>
          </Box>

          <CustomButton
            variant="contained"
            width={"auto"}
            btnLabel="Donate Now"
            startIcon={
              <img src={giftIcon1} width={17} style={{ marginRight: 5 }} />
            }
          />
        </CardActions>
      </Card>

      {/* image */}
      <Box mt={1}>
        <img src={houseImg} width={"100%"} />
      </Box>

      <Card
        sx={{
          borderRadius: "12px",
          boxShadow: "none",
          border: "1px solid #e0e0e0",
          padding: 2,
        }}
      >
        <CardContent sx={{ pb: 1 }}>
          {/* Header Section */}
          <Box display={"flex"} justifyContent={"space-between"} mb={2}>
            <Box display={"flex"} gap={2}>
              <img src={img3} width={65} />
              <Box>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h5" fontWeight="bold">
                    Emma Rodriguez
                  </Typography>
                  <Box
                    component="span"
                    width={5}
                    height={5}
                    borderRadius={50}
                    bgcolor={"text.secondary"}
                  />
                  <Typography variant="body1" color="text.secondary">
                    Austin, TX
                  </Typography>
                </Stack>

                <Chip
                  label="Donation in need"
                  size="small"
                  variant="default"
                  sx={{ marginTop: 1 }}
                />
              </Box>
            </Box>
            <IconButton size="small">
              <MoreVertIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Post Description */}
          <Typography
            fontSize={17}
            lineHeight={1.6}
            color="text.secondary"
            sx={{
              ml: { xs: 0, sm: 10 },
            }}
          >
            Hi everyone! I'm a single mom working two jobs to support my
            8-year-old daughter. After an unexpected car repair bill of $1,200,
            I'm struggling to make ends meet this month. Any help with groceries
            or utilities would mean the world to us. Thank you for taking the
            time to read our story!
          </Typography>
        </CardContent>

        {/* Footer Section */}
        <CardActions sx={{ justifyContent: "space-between", px: 3, mt: 1 }}>
          <Box display={"flex"} gap={2} sx={{ ml: { xs: 0, sm: 8 } }}>
            <Button
              sx={{ fontSize: "14px", color: "text.secondary" }}
              startIcon={<img src={heartGray} width={25} />}
            >
              Like
            </Button>
            <Button
              sx={{ fontSize: "14px", color: "text.secondary" }}
              startIcon={<img src={shareIcon} width={25} />}
            >
              Share
            </Button>
          </Box>

          <CustomButton
            variant="contained"
            width={"auto"}
            btnLabel="Donate Now"
            startIcon={
              <img src={giftIcon1} width={17} style={{ marginRight: 5 }} />
            }
          />
        </CardActions>
      </Card>
    </Box>
  );
};

export default Donation;
