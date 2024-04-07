"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MotionDiv } from "@components/motion/MotionDiv";
import { useMediaQuery } from "@mui/material";

const ImageChange = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const aboutImg = [
    { name: 'img_1.jpg', path: '/asset/img/home/about/img_1.jpg'},
    { name: 'img_1.jpg', path: '/asset/img/home/about/img_2.jpg'}
  ];

  const [curImg, setCurImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurImg((prevIndex) => (prevIndex + 1) % aboutImg.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [aboutImg.length]); 

  return (
    <>
      <MotionDiv initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2.3 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}>
      <Image className="" key={aboutImg[curImg].name} src={aboutImg[curImg].path} alt="alt" width={692} height={450} 
        style={isMobile ? {} : { zIndex: 1, boxShadow: '2rem -2rem black'}}/>
      </MotionDiv>
    </>
  );
};

export default ImageChange;
