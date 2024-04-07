import { MotionDiv } from '@components/motion/MotionDiv'
import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { MdChevronRight } from 'react-icons/md'
import ImageLinks from '../_component/ImageLinks'
import ContactUs from '@app/(main)/_component/Home/contactUs/ContactUs'
import ImgCarousel from '@app/(main)/_component/Home/imgCarousel/ImgCarousel'

const page = () => {
  const itemData = [
    { title: 'Cable Ladder and Conduit Installation', path: '/asset/img/service/design/imgLink_1.png',},
    { title: 'MCC Panel Installation', path: '/asset/img/service/design/imgLink_2.png',},
    { title: 'Metallic Conduit Installation', path: '/asset/img/service/design/imgLink_3.png',},
    { title: 'Lighting Installation', path: '/asset/img/service/design/imgLink_4.png',},
    { title: 'Metallic Conduit Installation for Cable Wiring to Equipment', path: '/asset/img/service/design/imgLink_5.png',},
    { title: 'Terminal Panel Installation', path: '/asset/img/service/design/imgLink_6.png',},
    { title: 'Transformer Station Installation', path: '/asset/img/service/design/imgLink_7.png',},
    { title: 'Vertical Cable Arrangement', path: '/asset/img/service/design/imgLink_8.png',},
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
          <Typography variant="overline"  className="text-black me-2 text-lg">ELECTRICAL DESIGN AND INSTALLATION </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="flex-end" sx={{
        height: { xs: '400px', sm: '700px' }, 
        backgroundImage: `url(${"/asset/img/service/design/hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: '100% 100%', sm: '100% auto' },
      }}>
        <AnimUp>
          <Typography variant="h4" className="font-bold text-white md:ms-16">ELECTRICAL DESIGN AND INSTALLATION</Typography>
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
                <Typography className='text-sm font-bold'>Power Station (High Voltage Protection,Transformer, Genset…)</Typography>
              </Box>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>MDB, MSB, DB Panels</Typography>
              </Box>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>MCC Panels</Typography>
              </Box>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>Cable Trays, Cable Ladders, Mesh Cable Trays…</Typography>
              </Box>
            </Grid>
            <Grid md={6}>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>Metallic and Plastic Conduits</Typography>
              </Box>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>Cable Laying and Connector</Typography>
              </Box>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>Electrical Equipment (Lightings, Emergency and Exit Lighting, Sockets)</Typography>
              </Box>
              <Box className="flex justify-start mb-2">
                <Image className='me-2' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                <Typography className='text-sm font-bold'>Earthing and Lightning System</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="mt-10 p-8">
          <Grid container spacing={5}>
            <Grid md={4}>
              <Image className='mb-4' src="/asset/img/service/design/img_1.png" alt="alt" width={500} height={500} />
              <Typography className="text-center font-bold mt-2">MDB Panel</Typography>
            </Grid>
            <Grid md={4}>
              <Image className='mb-4' src="/asset/img/service/design/img_2.png" alt="alt" width={500} height={500} />
              <Typography className="text-center font-bold mt-2">Blockset Panel Form 3</Typography>
            </Grid>
            <Grid md={4}>
              <Image className='mb-4' src="/asset/img/service/design/img_3.png" alt="alt" width={500} height={500} />
              <Typography className="text-center font-bold mt-2">MCC Panel Form 1</Typography>
            </Grid>
          </Grid>
        </Box>
        </AnimUp>

        <Box className="my-10">
          <AnimUp>
          <ImageLinks itemData={itemData} grid={6} />
          </AnimUp>
        </Box>
        <Box>
          <Button className="h-16 px-8 py-5 mte-grey text-black text-xl font-bold mt-2" fullWidth variant="text">Other Services</Button>
        </Box>

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