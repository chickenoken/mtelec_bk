"use client"
import { Box, ImageListItem } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

const LogoCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    waitForAnimate: false,
    pauseOnFocus: false, 
    pauseOnHover: false,
    pauseOnClick: false,
    arrows: false
  };

  const itemData = Array.from({ length: 28 }, (_, index) => ({
    id: (index + 1).toString(),
    path: `/asset/img/home/logo/logo_${index + 1}.png`,
  }));

  return (
    <Box>
      <Slider {...settings}>
        {itemData.map((item) => (
          <Box key={item.id} >
            <ImageListItem className="mx-2">
              <Image  src={`${item.path}`} alt={item.id} loading="lazy" width={75} height={75} />
            </ImageListItem>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default LogoCarousel