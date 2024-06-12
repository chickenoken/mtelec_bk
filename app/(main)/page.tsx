"use client"
import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { ReactNode, useEffect } from "react";
import { MotionDiv } from "@components/motion/MotionDiv";
import Link from "next/link";
import ImageChange from "./_component/Home/ImgChange/ImageChange";
import ImgCarousel from "./_component/Home/imgCarousel/ImgCarousel";
import LogoCarousel from "./_component/Home/logoCarousel/LogoCarousel";
import ContactUs from "./_component/Home/contactUs/ContactUs";
import { getPIndex } from "@app/user/pages/index/_server/FormIndexAction";

export default function Home() {
  const itemData1 = [
    { title: 'AUTOMATION DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_1.png',},
    { title: 'SOLAR SYSTEM', path: '/asset/img/home/carousel1/carousel_2.jpg',},
    { title: 'HVAC DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_3.jpg',},
    { title: 'ELV DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_4.jpg',},
    { title: 'ELECTRICAL SERVICE', path: '/asset/img/home/carousel1/carousel_5.png',},
    { title: 'ELECTRICAL DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_6.jpg',},
  ];

  const itemData2 = [
    { title: 'BAO LONG FACTORY', path: '/asset/img/home/carousel2/carousel_1.jpg',},
    { title: 'FRAMAS NHON TRACH FACTORY', path: '/asset/img/home/carousel2/carousel_2.jpg',},
    { title: 'CARGILL FACTORY', path: '/asset/img/home/carousel2/carousel_3.jpg',},
    { title: 'ADM HOA MAC FACTORY', path: '/asset/img/home/carousel2/carousel_4.jpg',},
    { title: 'CP BANGLADESH BOGRA FACTORY', path: '/asset/img/home/carousel2/carousel_5.jpg',},
    { title: 'CP HAI DUONG FACTORY', path: '/asset/img/home/carousel2/carousel_6.jpg',},
  ];

  const FadeInWhenVisible = ({ children }: { children: ReactNode }) => {
    return (
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        {children}
      </MotionDiv>
    );
  };

  const RightToLeft = ({ children }: { children: ReactNode }) => {
    return (
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 } 
        }}
      >
        {children}
      </MotionDiv>
    );
  };

  const LeftToRight = ({ children }: { children: ReactNode }) => {
    return (
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 } 
        }}
      >
        {children}
      </MotionDiv>
    );
  };

  const AnimUp = ({ children }: { children: ReactNode }) => {
    return (
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.3 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 } 
        }}
      >
        {children}
      </MotionDiv>
    );
  };

  interface PIndex {
    about1: string;
    about2: String;
    concept: String;
    image1: string;
    image2: string;
  }

  const [data, setData] = React.useState<PIndex>();

  const getData = async () => {
    let rs = await getPIndex();
    setData(rs);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box>
        <CardMedia component='video' image={"/asset/video/h_hero.mp4"} autoPlay loop muted/>
      </Box>
      {/* About */}
    <Container className='mt-10'>
      <Grid container spacing={10}>
        <Grid md={6}>
          <LeftToRight>
            <Box>
              <Typography className="trilong italic font-bold" variant="h5" gutterBottom>About</Typography>
              <Typography variant="h3" className='font-bold txt-mte' gutterBottom>MTELEC</Typography>
              <Typography align="justify" gutterBottom> {data?.about1}
              </Typography>
              <Box className="px-2.5 py-6 my-6 bg-gradient-to-l from-stone-300 via-neutral-100 to-stone-300">
                <Typography variant="h4" align="center" className='font-bold txt-mte'>
                {data?.concept}
                </Typography>
              </Box>
              <Typography align="justify" gutterBottom>
                {data?.about2}
              </Typography>
              <Box className="mb-4 mt-6">
                <Button className="bg2-mte pl-5  text-white text-left p-0 h-12" style={{ textTransform: 'none' }}>
                  <Link href="/about/company"><Typography className="mr-2 font-semibold">Our Company</Typography></Link>
                  <Box className="p-0 text-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="65" viewBox="0 0 32 65" fill="none">
                      <path d="M0 0.277344H32V32.2773L0 0.277344Z" fill="white"/>
                      <path d="M0 64.2773H32V32.2773L0 64.2773Z" fill="white"/>
                    </svg>
                  </Box>
                </Button>
              </Box>
              <Box>
              <Button className="bg2-mte pl-5 text-white text-left p-0 h-12" style={{ textTransform: 'none' }}>
                <Link href="/about/teams"><Typography className="mr-11 font-semibold">Our Team</Typography></Link>
                <Box className="text-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="65" viewBox="0 0 32 65" fill="none">
                    <path d="M0 0.277344H32V32.2773L0 0.277344Z" fill="white"/>
                    <path d="M0 64.2773H32V32.2773L0 64.2773Z" fill="white"/>
                  </svg>
                </Box>
              </Button>
              </Box>
            </Box>
          </LeftToRight>
        </Grid>
        <Grid md={6}>
          <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
            <ImageChange/>
          </Box>
        </Grid>
      </Grid>
    </Container>

    {/* Service */}
    <Box className="mt-20" sx={{ backgroundImage: `url('/asset/img/bg_1.png')`, backgroundSize: 'cover'}}>
      <Container>
        <LeftToRight>
          <Typography className="trilong italic font-bold mb-2" variant="h5">Our</Typography>
          <Typography variant="h3" letterSpacing={1} className="txt-mte font-bold mb-4">SERVICE</Typography>
        </LeftToRight>
        <RightToLeft>
          <ImgCarousel mode={itemData1}/>
        </RightToLeft>
        <FadeInWhenVisible>
          <Link href="/services">
            <Button className="h-16 px-8 py-5 mte-grey text-black text-xl font-bold mt-2" fullWidth variant="text">All Services</Button>
          </Link>
        </FadeInWhenVisible>
      </Container>
    </Box>

    {/* PROJECTS */}
    <Box className="mt-20">
      <Container>
        <LeftToRight>
          <Typography className="trilong italic font-bold mb-2" variant="h5">Typical</Typography>
          <Typography variant="h3" letterSpacing={1} className="txt-mte font-bold mb-4">PROJECTS</Typography>
        </LeftToRight>
        <RightToLeft>
          <ImgCarousel mode={itemData2}/>
        </RightToLeft>
        <FadeInWhenVisible>
          <Link href="/projects">
            <Button className="h-16 px-8 py-5 mte-grey text-black text-xl font-bold mt-2" fullWidth variant="text">All Projects</Button>
          </Link>
        </FadeInWhenVisible>
      </Container>
    </Box>

      {/* PROJECTS */}
      <Box className="mt-20" sx={{ backgroundImage: `url('/asset/img/bg_1.png')`, backgroundSize: 'cover'}}>
        <Container>
          <FadeInWhenVisible>
            <Typography className="trilong italic font-bold mb-2" variant="h5">Valuable</Typography>
            <Typography variant="h3" letterSpacing={1} className="txt-mte font-bold mb-4">CUSTOMERS</Typography>
            
            <Box className="my-2">
              <LogoCarousel />
            </Box>
          </FadeInWhenVisible>
          <LeftToRight>
            <Typography variant="caption" display="block" gutterBottom>MTELEC is continually striving to enhance our services, to
              better develop and meet the needs of our valued customers. Your
              feedback and suggestions have been improving our services, and we
              are committed to delivering the best quality solutions to all of you.
            </Typography>
          </LeftToRight>
          <LeftToRight>
            <Typography variant="caption" display="block" gutterBottom>
              WE gratefully appreciate your loyalty and trust in MTELEC.
              We would like to take a moment to express our thankful gratitude
              to your coorperation in the past and we are looking forward to
              cooperating with all the customers and partners in the future.</Typography>
          </LeftToRight>
          <AnimUp>
            <Box className="py-4">
              <ContactUs />
            </Box>
          </AnimUp>
        </Container>
      </Box>
    </>
  )
}