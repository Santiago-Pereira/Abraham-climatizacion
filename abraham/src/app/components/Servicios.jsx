"use client";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import HandymanIcon from "@mui/icons-material/Handyman";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function Servicios() {
  const data = [
    {
      title: "Reparaciones",
      img: "https://res.cloudinary.com/ddfz8iwnf/image/upload/v1695865503/abraham/maintenance_yokri9.png",
      alt: "alt",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Ut vitae atque odio ipsam dicta qui accusantium,
         praesentium quasi explicabo magnam fugiat saepe architecto
          eius quis nulla deleniti delectus, inventore odit!`,
    },
    {
      title: "Mantenimiento",
      img: "https://res.cloudinary.com/ddfz8iwnf/image/upload/v1695861771/abraham/repair-icon_xo9ytv.png",
      alt: "alt",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Ut vitae atque odio ipsam dicta qui accusantium,
         praesentium quasi explicabo magnam fugiat saepe architecto
          eius quis nulla deleniti delectus, inventore odit!`,
    },
    {
      title: "Venta",
      img: "https://res.cloudinary.com/ddfz8iwnf/image/upload/v1695864331/abraham/cart_pzjnjc.png",
      alt: "alt",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Ut vitae atque odio ipsam dicta qui accusantium,
         praesentium quasi explicabo magnam fugiat saepe architecto
          eius quis nulla deleniti delectus, inventore odit!`,
    },
    {
      title: "Asesoramiento",
      img: "https://res.cloudinary.com/ddfz8iwnf/image/upload/v1695864441/abraham/operator_fjfue9.png",
      alt: "alt",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Ut vitae atque odio ipsam dicta qui accusantium,
      praesentium quasi explicabo magnam fugiat saepe architecto
       eius quis nulla deleniti delectus, inventore odit!`,
    },
  ];

  return (
    <Box>
      <section className="servicios-card" id="services">
        <Typography variant="h4" sx={{ textAlign: "center", mt: "3rem" }}>
          Nuestros Servicios
        </Typography>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 3, sm: 3, md: 2 }}
          sx={{ display: "flex", justifyContent: "center", mt: "3rem" }}
        >
          {data.map((element) => (
            <Grid item xs={12} sm={6} md={2} lg={2} key={element.title}>
              <Card sx={{ width: "100%" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ textAlign: "center" }}
                    >
                      {element.title}
                    </Typography>
                    <CardMedia
                      component="img"
                      image={element.img}
                      alt={element.alt}
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: "2rem" }}
                    >
                      {element.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </Box>
  );
}
