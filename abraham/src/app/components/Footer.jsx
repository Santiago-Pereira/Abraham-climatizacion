import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export default function Footer() {
  return (
    <section>
      <Box
        sx={{
          backgroundColor: "#B73932",
          color: "white",
          textDecoration: "none",
          fontSize: "1.5rem",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 3, sm: 3, md: 2 }}
          /*  sx={{ display: "flex", justifyContent: "center", mt: "3rem" }} */
        >
          <Grid item md={8}>
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
          <Grid item md={4}>
            <Box
              sx={{ lineHeight: "0.4rem", padding: "0 0 0 40px", mt: "2rem" }}
            >
              <p>Horarios de atención</p>
              <p>Lunes a viernes: 9am-16pm</p>
              <p>Sábado: 9am-13pm</p>
              <p>Domingo: cerrado</p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
