import React, { useRef, useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Container,
  Grid,
  Button,
  Link,
} from "@mui/material";
import CustomButton from "../../components/buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import leftIcon from "../../assets/icons/left-arrow-icon.svg";
import rightIcon from "../../assets/icons/right-arrow-icon.svg";
import videoImg from "../../assets/images/video-img.png";
import heartIcon from "../../assets/icons/heart-icon.svg";
import playIcon from "../../assets/icons/play-icon.svg";
import cameraIcon from "../../assets/icons/camera-icon.svg";
import giftIcon from "../../assets/icons/gift-color.svg";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import galleryIcon from "../../assets/icons/gallery-icon.svg";
import Donation from "../../app/home/donation";
import CardsData from "../../app/home/cardsData";
import Giveaway from "../../app/home/giveaway";
import houseImg from "../../assets/images/img8.png";

const videoCards = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  // Mock data for Recent Success
  const successes = [
    {
      id: 1,
      name: "Sarah M.",
      desc: "Raised $2,500 for medical bills",
      img: img1,
    },
    {
      id: 2,
      name: "Mike R.",
      desc: "Got help with rent payment",
      img: img2,
    },
  ];

  const cardStyle = {
    borderRadius: "16px",
    border: "1px solid #E0E0E0",
    boxShadow: "none",
    p: 3,
  };

  return (
    <Box paddingY={10}>
      <Container maxWidth={"xl"}>
        {/* MAIN ROW */}
        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT: VIDEO FEED */}
          <Grid item size={{ xs: 12, md: 7 }}>
            <Typography variant="h3" fontWeight={700} mb={2}>
              World Community Feed
            </Typography>

            <Typography
              mb={4}
              maxWidth={600}
              color="text.secondary"
              fontSize={17}
            >
              Stories from our social media community members looking to list
              and donate free items and receiving direct surprise donations.
            </Typography>

            {/* VIDEO SLIDER ROW */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* LEFT ARROW */}
              <Box
                ref={prevRef}
                sx={{
                  width: 36,
                  height: 36,
                  minWidth: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <img src={leftIcon} width={18} alt="left" />
              </Box>

              {/* CAROUSEL */}
              <Box sx={{ flex: 1, overflow: "hidden" }}>
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={5}
                  slidesPerGroup={1}
                  spaceBetween={16}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1, slidesPerGroup: 1 },
                    600: { slidesPerView: 4, slidesPerGroup: 1 },
                    900: { slidesPerView: 5, slidesPerGroup: 1 },
                  }}
                >
                  {videoCards.map((_, index) => (
                    <SwiperSlide key={index}>
                      <Card
                        sx={{
                          height: 190,
                          borderRadius: 4,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: index === 0 ? "#ccc" : "#f8f9fa",
                          backgroundImage:
                            index === 0 ? `url(${videoImg})` : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          boxShadow: "none",
                          border: index !== 0 ? "1px solid #eee" : "none",
                        }}
                      >
                        {index === 0 ? (
                          <img src={playIcon} width={30} alt="play" />
                        ) : (
                          <img src={cameraIcon} width={100} alt="camera" />
                        )}
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>

              {/* RIGHT ARROW */}
              <Box
                ref={nextRef}
                sx={{
                  width: 36,
                  height: 36,
                  minWidth: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <img src={rightIcon} width={18} alt="right" />
              </Box>
            </Box>

            {/* Cards */}
            <Donation />

            <Giveaway />

            <Box mt={1}>
              <img src={houseImg} width={"100%"} />
            </Box>
            <CardsData />

            <Box mt={15} textAlign={"center"}>
              <Typography color="text.secondary" fontSize={20} fontWeight={500}>
                You've reached the end of the feed
              </Typography>

              <Link
                href="/login"
                underline="none"
                color="text.blue"
                fontSize={20}
                fontWeight={500}
                sx={{
                  "&:hover": {
                    opacity: 0.8,
                    cursor: "pointer",
                  },
                }}
              >
                Login for more post
              </Link>
            </Box>
          </Grid>

          {/* RIGHT: SUPPORT PLATFORM */}
          <Grid item size={{ xs: 12, md: 5 }}>
            <Box
              width={"100"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              textAlign={"center"}
              borderRadius={4}
              marginTop={3}
            >
              <Box mb={4}>
                <img src={heartIcon} width={100} alt="logo" />
              </Box>

              <Typography variant="h4" fontWeight={600} mb={2}>
                Support Our Platform
              </Typography>

              <Typography color="text.secondary" mb={5} fontSize={17}>
                Help keep exciting surprise donations flowing by leaving a tip
                for our members and team.
              </Typography>

              <CustomButton
                variant="outlined"
                width={"auto"}
                btnLabel="Surprise Donation Tips"
                startIcon={
                  <img src={giftIcon} width={17} style={{ marginRight: 5 }} />
                }
              />
            </Box>

            {/* 1. Sponsored Card */}
            <Card sx={{ ...cardStyle, mt: 5 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Sponsored
              </Typography>

              <Box
                width={"100%"}
                height={180}
                bgcolor={"#F8F9FA"}
                borderRadius={5}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img src={galleryIcon} width={200} />
              </Box>
            </Card>

            {/* 2. Recent Success Card */}
            <Card sx={{ ...cardStyle, mt: 3 }}>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Recent Success
              </Typography>

              <List sx={{ p: 0 }}>
                {successes.map((item) => (
                  <ListItem key={item.id} sx={{ px: 0, py: 1.5 }}>
                    <ListItemAvatar>
                      <img
                        src={item.img}
                        width={55}
                        style={{ borderRadius: 30 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          fontWeight="bold"
                          variant="h6"
                          paddingLeft={2}
                        >
                          {item.name}
                        </Typography>
                      }
                      secondary={
                        <Typography color="text.secondary" paddingLeft={2}>
                          {item.desc}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
