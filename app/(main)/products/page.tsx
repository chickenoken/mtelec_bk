import { MotionDiv } from '@components/motion/MotionDiv'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { MdChevronRight } from 'react-icons/md'
import ImgCarousel from '../_component/Home/imgCarousel/ImgCarousel'

const pages = () => {

  const itemData1 = [
    { title: 'ONLINE UPS', path: '/asset/img/products/carousel1/carousel_1.png',},
    { title: 'MESH CABLE TRAY', path: '/asset/img/products/carousel1/carousel_2.png',},
    { title: 'LEGRAND CIRCUIT BREAKER', path: '/asset/img/products/carousel1/carousel_3.png',},
    { title: 'LEGRAND ENCLOSURE AND CABINET', path: '/asset/img/products/carousel1/carousel_4.png',},
    { title: 'LEGRAND POP-UP FLOOR BOX', path: '/asset/img/products/carousel1/carousel_5.png',},
    { title: 'INDUSTRIAL SOCKET', path: '/asset/img/products/carousel1/carousel_6.png',},
    { title: 'SWITCHES ARTEOR', path: '/asset/img/products/carousel1/carousel_7.png',},
    { title: 'PLEXO BOX', path: '/asset/img/products/carousel1/carousel_8.png',},
    { title: 'PLEXO BOX', path: '/asset/img/products/carousel1/carousel_9.png',},
    { title: 'ROUND PLEXO BOX', path: '/asset/img/products/carousel1/carousel_10.png',},
    { title: 'MCB', path: '/asset/img/products/carousel1/carousel_11.png',},
    { title: 'MCB', path: '/asset/img/products/carousel1/carousel_12.png',},
    { title: 'RCD', path: '/asset/img/products/carousel1/carousel_13.png',},
  ];

  const itemData2 = [
    { title: 'INVERTER', path: '/asset/img/products/carousel2/carousel_1.png',},
    { title: 'ONLINE UPS', path: '/asset/img/products/carousel2/carousel_2.png',},
    { title: 'SOFT STARTER', path: '/asset/img/products/carousel2/carousel_3.png',},
    { title: 'DIN RAIL MODULAR DEVICES', path: '/asset/img/products/carousel2/carousel_4.png',},
    { title: 'SWITCHES, SOCKETS & BOXES', path: '/asset/img/products/carousel2/carousel_5.png',},
    { title: 'POWER CIRCUIT BREAKER AND SWITCHES', path: '/asset/img/products/carousel2/carousel_6.png',},
    { title: 'PUSHBUTTONS, SWITCHES, PILOT LIGHTS AND JOYSTICKS', path: '/asset/img/products/carousel2/carousel_7.png',},
    { title: 'MOTION & DRIVES', path: '/asset/img/products/carousel2/carousel_8.png',},
    { title: 'MOTOR STARTERS', path: '/asset/img/products/carousel2/carousel_9.png',},
    { title: 'CONTACTORS & PROTECTION RELAYS', path: '/asset/img/products/carousel2/carousel_10.png',},
    { title: 'POWER METTER', path: '/asset/img/products/carousel2/carousel_11.png',},
  ];

  const itemData3 = [
    { title: 'INVERTER', path: '/asset/img/products/carousel3/carousel_1.png',},
    { title: 'SOFT STARTER', path: '/asset/img/products/carousel3/carousel_2.png',},
    { title: 'ONLINE UPS', path: '/asset/img/products/carousel3/carousel_3.png',},
    { title: 'CIRCUIT BREAKER', path: '/asset/img/products/carousel3/carousel_4.png',},
    { title: 'CONTACTOR', path: '/asset/img/products/carousel3/carousel_5.png',},
    { title: 'ETHERNET CARD', path: '/asset/img/products/carousel3/carousel_6.png',},
    { title: 'PROTECTION CIRCUIT BREAKER', path: '/asset/img/products/carousel3/carousel_7.png',},
    { title: 'AUXILIARY CONTACTS', path: '/asset/img/products/carousel3/carousel_8.png',},
    { title: 'AUXILIARY CONTACTS BLOCK', path: '/asset/img/products/carousel3/carousel_9.png',},
  ];

  const itemData4 = [
    { title: 'SITOP UPS', path: '/asset/img/products/carousel4/carousel_1.png',},
    { title: 'PROFINET IO-DEVICE', path: '/asset/img/products/carousel4/carousel_2.png',},
    { title: 'FRONT CONNECTOR', path: '/asset/img/products/carousel4/carousel_3.png',},
    { title: 'ANALOG INPUT MODULE', path: '/asset/img/products/carousel4/carousel_4.png',},
    { title: 'DIGITAL INPUT MODULE', path: '/asset/img/products/carousel4/carousel_5.png',},
    { title: 'MOUNTING RAIL', path: '/asset/img/products/carousel4/carousel_6.png',},
    { title: 'BASE UNIT', path: '/asset/img/products/carousel4/carousel_7.png',},
    { title: 'RELAY MODULE', path: '/asset/img/products/carousel4/carousel_8.png',},
    { title: 'PROFINET INTERFACE MODULE', path: '/asset/img/products/carousel4/carousel_9.png',},
    { title: 'CPU 1515-2 PN', path: '/asset/img/products/carousel4/carousel_10.png',},

  ];

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

  return (
    <>
      <Box display="flex" alignItems="center" sx={{
        height: { xs: '300px', sm: '500px' }, 
        backgroundImage: `url(${"/asset/img/products/hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}>
        <AnimUp>
          <Box display="flex" alignItems="center">
            <Box display="flex" className="border-b-2 border-white md:ms-16">
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">HOME PAGE</Typography>
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">PRODUCTS</Typography>
            </Box>
          </Box>
          <Typography variant="h3" className="italic trilong text-white mt-4 md:ms-16">Our</Typography>
          <Typography variant="h3" className="font-bold text-white mt-4 md:ms-16">PRODUCTS</Typography>
        </AnimUp>
      </Box>

      <Container>
        <AnimUp>
        <Box className="px-36 mb-8">
          <Typography className='font-bold txt-mte mb-2'>MTELEC is also a distributor of high-quality Electrical Equipment for all projects about Electrical System Installation and Automation. </Typography>
          <Typography className='font-bold txt-mte'>We have been supplying and installing the most reputable brands like ABB, LEGRAND, SIEMENS and SCHNEIDER for our projects.</Typography>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="mb-10">
          <Image src="/asset/img/products/sub1.png" alt="hero" width={300} height={300} />
          <Box >
              <ImgCarousel mode={itemData1}/>
          </Box>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="mb-10">
          <Image src="/asset/img/products/sub2.png" alt="hero" width={300} height={300} />
          <Box >
              <ImgCarousel mode={itemData2}/>
          </Box>
        </Box>
        </AnimUp>3
        <AnimUp>
        <Box className="mb-10">
          <Image src="/asset/img/products/sub3.png" alt="hero" width={300} height={300} />
          <Box >
              <ImgCarousel mode={itemData3}/>
          </Box>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="mb-10">
          <Image src="/asset/img/products/sub4.png" alt="hero" width={300} height={300} />
          <Box >
              <ImgCarousel mode={itemData4}/>
          </Box>
        </Box>
        </AnimUp>
      </Container>
    </>
  )
}

export default pages