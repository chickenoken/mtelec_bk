"use client"
import { Box, ImageListItem, ImageListItemBar, useMediaQuery} from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import Slider from 'react-slick';
import { MotionDiv } from '@components/motion/MotionDiv';

function SampleNextArrow(props : any) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '500px', 
        background: 'var(--Green-Gradient, linear-gradient(266deg, #00B6D7 -6.05%, #4ABEA6 26.45%, #33AF4A 80.61%))', 
        width: '45px', 
        height: '45px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <svg fill="white" width="20" height="24" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}>
        <path d="M0 12l24-12v24z"/>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props : any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '500px', 
        background: 'var(--Green-Gradient, linear-gradient(266deg, #00B6D7 -6.05%, #4ABEA6 26.45%, #33AF4A 80.61%))', 
        width: '45px', 
        height: '45px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <svg fill="white" width="20" height="24" viewBox="0 0 24 24">
        <path d="M0 12l24-12v24z"/>
      </svg>
    </div>
    
  );
}

interface Mode {
  title: string;
  path: string;
}

interface Props {
  mode: Mode[];
}

const ImgCarousel = ({ mode }: Props) => {
  const isMobile = useMediaQuery('(max-width:769px)');
  const isExtraSmall = useMediaQuery('(max-width:370px)');

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isExtraSmall ? 1 : (isMobile ? 2 : 3),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <Box>
      <Slider {...settings}>
        {mode.map((item) => (
          <MotionDiv 
            key={item.title}
            whileHover={{ scale: 1.05 }} 
            onHoverStart={() => setHoveredId(item.title)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <ImageListItem className="mx-2">
              <MotionDiv 
                animate={{ filter: hoveredId === item.title ? "none" : hoveredId === null ? "none" : "blur(3px)" }}
                transition={{ duration: 0.5 }}
              >
                <Image className="h-96" src={`${item.path}`} alt={item.title} width={500} height={200} />
                <ImageListItemBar title={item.title} />
              </MotionDiv>
            </ImageListItem>
          </MotionDiv>
        ))}
      </Slider>
    </Box>
  )
}

export default ImgCarousel