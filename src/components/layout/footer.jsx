import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Button,
  IconButton,
  Divider,
  Container,
} from "@mui/material";
import logoIcon from "../../assets/icons/logo.svg";
import fbIcon from "../../assets/icons/fb-icon.svg";
import twitterIcon from "../../assets/icons/twitter-icon.svg";
import instaIcon from "../../assets/icons/instagram-icon.svg";
import CustomButton from "../../components/buttons";
import giftIcon from "../../assets/icons/gift-icon.svg";

const Footer = () => {
  const quickLinks = [
    { id: 1, label: "Home", value: "home" },
    { id: 2, label: "How It Works", value: "how_it_works" },
    { id: 3, label: "Success Stories", value: "success_stories" },
    { id: 4, label: "Contact", value: "contact" },
    { id: 5, label: "Privacy Policy", value: "privacy_policy" },
    { id: 6, label: "Terms of services", value: "terms_of_services" },
    { id: 7, label: "Surprise Donations Ads", value: "surprise_donations_ads" },
  ];

  return (
    <Box component="footer" sx={{ width: "100%", bgcolor: "secondary.main" }}>
      {/* ===== MAIN FOOTER (FULL WIDTH BACKGROUND) ===== */}
      <Box sx={{ width: "100%", py: 8 }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* COLUMN 1 */}
            <Grid item size={{ xs: 12, md: 5 }}>
              <img src={logoIcon} width={150} alt="logo" />

              <Typography
                fontSize={17}
                lineHeight={1.7}
                maxWidth={340}
                color="text.secondary"
              >
                A social media place for fun surprise free giveaways, people in
                need and for people who love making others happy.
              </Typography>

              <Box mt={3} display="flex" gap={3}>
                <img src={fbIcon} width={40} alt="logo" />
                <img src={twitterIcon} width={40} alt="logo" />
                <img src={instaIcon} width={40} alt="logo" />
              </Box>
            </Grid>

            {/* COLUMN 2 */}
            <Grid item size={{ xs: 12, md: 4 }}>
              <Typography
                variant="h6"
                color="text.blue"
                fontWeight={600}
                mb={3}
              >
                Quick Links
              </Typography>

              <Box display="flex" flexDirection="column" gap={1.5}>
                {quickLinks.map((item) => (
                  <Link
                    key={item.id}
                    href={`/${item.value}`}
                    underline="none"
                    color="text.secondary"
                    fontSize={17}
                    sx={{
                      "&:hover": { color: "text.blue" },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* COLUMN 3 */}
            <Grid item size={{ xs: 12, md: 3 }}>
              <Typography
                variant="h6"
                color="text.blue"
                fontWeight={600}
                mb={2}
              >
                Support
              </Typography>

              <Typography mb={3} color="text.secondary" fontSize={17}>
                Help us keep this platform running by leaving a tip to our team.
              </Typography>

              <CustomButton
                variant="contained"
                width={"auto"}
                btnLabel="Tip Suprise Donation"
                startIcon={
                  <img src={giftIcon} width={17} style={{ marginRight: 5 }} />
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ===== BOTTOM BAR ===== */}
      <Divider color="#D6F2FB" sx={{ width: "90%", mx: "auto" }} />

      <Box sx={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Typography
            py={3}
            align="center"
            color="text.blue"
            fontWeight={500}
            fontSize={17}
          >
            © {new Date().getFullYear()} Surprise Donation. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
