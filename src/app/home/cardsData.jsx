import React from "react";
import {
  Box,
  Card,
  Typography,
  Stack,
  CardContent,
  Chip,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import CustomButton from "../../components/buttons";

import heartGray from "../../assets/icons/heart-gray.svg";
import shareIcon from "../../assets/icons/share-icon.svg";
import giftIcon1 from "../../assets/icons/gift-icon.svg";
import img10 from "../../assets/images/img10.png";
import img9 from "../../assets/images/img9.png";
import img14 from "../../assets/images/img14.png";
import img3 from "../../assets/images/img3.png";
import img5 from "../../assets/images/img5.png";
import img12 from "../../assets/images/img12.png";
import img11 from "../../assets/images/img11.png";
import img13 from "../../assets/images/img13.png";
import img15 from "../../assets/images/img15.png";

export const cardsData = [
  {
    id: 1,
    name: "Sara Haris",
    location: "Austin, TX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    userImg: img9,
    postImg: img10,

    showPostImg: true,
    showChip: false,
    showDonateBtn: false,
    chipVariant: "success",
    chipLabel: "Free item giveaway",
    donateBtnVariant: "outlined",
    donateBtnLabel: "Donate Now",
  },
  {
    id: 2,
    name: "Zack Daniel",
    location: "Austin, TX",
    description: "I’m in need of a surprise donation.",
    userImg: img14,
    postImg: img10,

    showPostImg: false,
    showChip: true,
    showDonateBtn: true,
    chipVariant: "warning",
    chipLabel: "Surprise Donation",
    donateBtnVariant: "contained",
    donateBtnLabel: "Donate Now",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Austin, TX",
    description: "I want to giveaway a free shirt.",
    userImg: img3,
    postImg: img5,

    showPostImg: true,
    showChip: true,
    showDonateBtn: true,
    chipVariant: "success",
    chipLabel: "Free item giveaway",
    donateBtnVariant: "outlined",
    donateBtnLabel: "Request Free Item",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    location: "Austin, TX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    userImg: img12,
    postImg: img11,

    showPostImg: true,
    showChip: false,
    showDonateBtn: false,
    chipVariant: "default",
    chipLabel: "Family Support",
    donateBtnVariant: "contained",
    donateBtnLabel: "Donate Now",
  },
  {
    id: 5,
    name: "Nadija Pavlovic",
    location: "Austin, TX",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    userImg: img15,
    postImg: img13,

    showPostImg: true,
    showChip: false,
    showDonateBtn: false,
    chipVariant: "default",
    chipLabel: "Family Support",
    donateBtnVariant: "contained",
    donateBtnLabel: "Donate Now",
  },
];

const CardsData = () => {
  return (
    <Box>
      {cardsData.map((item) => {
        const isContained = item.donateBtnVariant !== "outlined";

        return (
          <Card
            key={item.id}
            sx={{
              borderRadius: "12px",
              boxShadow: "none",
              mt: 2,
              border: "1px solid #e0e0e0",
              p: 2,
            }}
          >
            <CardContent sx={{ pb: 1 }}>
              {/* HEADER */}
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Box display="flex" gap={2}>
                  <img
                    src={item.userImg}
                    width={65}
                    style={{ borderRadius: "50%" }}
                  />

                  <Box>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Typography variant="h5" fontWeight="bold">
                        {item.name}
                      </Typography>

                      {/* DOT */}
                      <Box
                        component="span"
                        width={5}
                        height={5}
                        borderRadius={50}
                        bgcolor={"text.secondary"}
                        
                      />

                      <Typography color="text.secondary">
                        {item.location}
                      </Typography>
                    </Stack>

                    {/* CHIP */}
                    {item.showChip && (
                      <Chip
                        sx={{ marginTop: 1 }}
                        label={item.chipLabel}
                        variant={item.chipVariant || "default"}
                        size="small"
                      />
                    )}
                  </Box>
                </Box>

                <IconButton size="small">
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* DESCRIPTION */}
              <Typography
                fontSize={16}
                lineHeight={1.6}
                color="text.secondary"
                sx={{
                  ml: { xs: 0, sm: 10 },
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.description}

                {/* POST IMAGE */}
                {item.showPostImg && (
                  <Box
                    component="img"
                    src={item.postImg}
                    width="100%"
                    height={400}
                    mt={2}
                    sx={{
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </Typography>
            </CardContent>

            {/* FOOTER */}
            <CardActions sx={{ justifyContent: "space-between", px: 3, mt: 1 }}>
              <Box display="flex" gap={2} sx={{ ml: { xs: 0, sm: 8 } }}>
                <Button
                  sx={{ fontSize: "14px", color: "text.secondary" }}
                  startIcon={<img src={heartGray} width={22} />}
                >
                  Like
                </Button>

                <Button
                  sx={{ fontSize: "14px", color: "text.secondary" }}
                  startIcon={<img src={shareIcon} width={22} />}
                >
                  Share
                </Button>
              </Box>

              {/* DONATE BUTTON */}
              {item.showDonateBtn && (
                <CustomButton
                  variant={item.donateBtnVariant || "contained"}
                  btnLabel="Donate Now"
                  startIcon={
                    isContained ? (
                      <img
                        src={giftIcon1}
                        width={15}
                        style={{ marginRight: 6 }}
                      />
                    ) : undefined
                  }
                />
              )}
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default CardsData;
