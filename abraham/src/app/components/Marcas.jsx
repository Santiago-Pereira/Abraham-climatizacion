"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Marcas() {
  return (
    <section className="carousel-marcas">
      <Box sx={{ width: "100%", mt: "3rem" }}>
        <Typography
          component={"h4"}
          variant={"h3"}
          sx={{ mb: "3rem", display: "flex", justifyContent: "center" }}
        >
          Algunas de las marcas que trabajamos
        </Typography>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={false}
          arrows={false}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1200}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <img
            src="https://res.cloudinary.com/ddfz8iwnf/image/upload/v1696540409/abraham/hitachi-logo_xja3rp.png"
            width={360}
          ></img>
          <img
            src="https://res.cloudinary.com/ddfz8iwnf/image/upload/v1696540409/abraham/lg-logo_q9fuyq.jpg"
            width={360}
          ></img>
          <img
            src="https://res.cloudinary.com/ddfz8iwnf/image/upload/v1696540408/abraham/BGH-LOGO_bbymfr.jpg"
            width={360}
          ></img>
          <img
            src="https://res.cloudinary.com/ddfz8iwnf/image/upload/v1696540409/abraham/hitachi-logo_xja3rp.png"
            width={360}
          ></img>
        </Carousel>
      </Box>
    </section>
  );
}
