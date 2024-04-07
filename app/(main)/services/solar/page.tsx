import ContactUs from '@app/(main)/_component/Home/contactUs/ContactUs'
import ImgCarousel from '@app/(main)/_component/Home/imgCarousel/ImgCarousel'
import { MotionDiv } from '@components/motion/MotionDiv'
import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { MdChevronRight } from 'react-icons/md'
import ImageLinks from '../_component/ImageLinks'

const page = () => {
  const itemData = [
    { title: 'AC and PV Cable Installation inside Cable Trays', path: '/asset/img/service/solar/imgLink_1.png',},
    { title: 'AC and PV Cable Installation inside Cable Trays', path: '/asset/img/service/solar/imgLink_2.png',},
    { title: 'Cable Raceway Installation', path: '/asset/img/service/solar/imgLink_3.png',},
    { title: 'Cable Raceway Installation', path: '/asset/img/service/solar/imgLink_4.png',},
    { title: 'Inverter Installation', path: '/asset/img/service/solar/imgLink_5.png',},
    { title: 'MDB and Load Center Installation', path: '/asset/img/service/solar/imgLink_6.png',},
  ];

  const itemData1 = [
    { title: 'AUTOMATION DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_1.png',},
    { title: 'SOLAR SYSTEM', path: '/asset/img/home/carousel1/carousel_2.jpg',},
    { title: 'HVAC DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_3.jpg',},
    { title: 'ELV DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_4.jpg',},
    { title: 'ELECTRICAL SERVICE', path: '/asset/img/home/carousel1/carousel_5.png',},
    { title: 'ELECTRICAL DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_6.jpg',},
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
      <Box display="flex" alignItems="center">
        <Box display="flex" className="border-b-2 md:ms-16 my-2">
          <MdChevronRight size="2rem" className="me-2" color="gray"/>
          <Typography variant="overline" className="text-gray-300 me-2 text-lg">HOME PAGE</Typography>
          <MdChevronRight size="2rem" className="me-2" color="gray"/>
          <Typography variant="overline" className="text-gray-300 me-2 text-lg">SERVICE</Typography>
          <MdChevronRight size="2rem" className="me-2" color="black"/>
          <Typography variant="overline"  className="text-black me-2 text-lg">SOLAR SYSTEM</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="flex-end" sx={{
        height: { xs: '400px', sm: '700px' }, 
        backgroundImage: `url(${"/asset/img/service/solar/hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: '100% 100%', sm: '100% auto' },
      }}>
        <AnimUp>
          <Typography variant="h4" className="font-bold text-white md:ms-16">SOLAR SYSTEM</Typography>
        </AnimUp>
      </Box>
      <Container>
        <AnimUp>
        <Box className="mt-10 p-8" sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: 'cover'}}>
          <Typography variant="h5" className="font-bold trilong italic mb-4">Working Fields</Typography>
          <Grid container spacing={5}>
            <Grid md={6}>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>MDB Panel</Typography>
              </Box>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>AC and PV Cable Laying</Typography>
              </Box>
            </Grid>
            <Grid md={6}>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>Grid Protection System</Typography>
              </Box>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>Connection and Commissioning</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="flex justify-center mt-10 p-8">
          <Image className='mb-4' src="/asset/img/service/solar/img_1.png" alt="alt" width={800} height={800} />
        </Box>
        <Box className="mt-10">
          <ImageLinks itemData={itemData} grid={6} />
        </Box>
        <Box>
          <Button className="h-16 px-8 py-5 mte-grey text-black text-xl font-bold mt-2" fullWidth variant="text">Other Services</Button>
        </Box>
        </AnimUp>

        {/* PROJECTS */}
        <AnimUp>
        <Box className="my-20">
          <Container>
            <Typography className="trilong italic font-bold mb-2" variant="h3">Other Services</Typography>
            <ImgCarousel mode={itemData1}/>
            <Button className="h-16 px-8 py-5 mte-grey text-black text-xl font-bold mt-2" fullWidth variant="text">All Services</Button>
          </Container>
        </Box>
        </AnimUp>
        <AnimUp>
          <ContactUs />
        </AnimUp>
      </Container>
    </>
  )
}

export default page