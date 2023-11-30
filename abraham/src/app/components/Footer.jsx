import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { BorderTop } from "@mui/icons-material";

export default function Footer() {
  return (
    <section className="footer">
      <Box
        sx={{
          backgroundColor: "#B73932",
          color: "white",
          fontSize: "1.5rem",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 2 }}>
          <Grid item xs={12} md={8}>
            <ul>
              <li>
                <a href="tel:+542494155" target="_blank">
                  <PhoneAndroidIcon /> Tel: 15245215
                </a>
              </li>
              <li>
                <a href="mailto: sdfsdfj@gmail.com">
                  <EmailIcon /> sdfsdfj@gmail.com
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/abraham.climatizacion/">
                  <InstagramIcon /> Instagram
                </a>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                lineHeight: "0.4rem",
                padding: "0 0 0 40px",
                mt: "0.5rem",
                borderTop: { xs: "1px solid white", md: "none" },
                borderTopWidth: { xs: "100%" },
              }}
            >
              <p>Horarios de atención</p>
              <p>Lunes a viernes: 8:30-12:30</p>
              <p>y de: 13:30-17:30</p>
              <p>Sábado y Domingo: cerrado</p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
