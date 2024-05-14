import { MotionDiv } from '@components/motion/MotionDiv'
import { Box, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { MdChevronRight } from 'react-icons/md'

const page = () => {
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
    <Box sx={{
      backgroundImage: `url(${"/asset/img/bg_2.png"})`,
      backgroundSize: 'cover',
      }}>
      <Box display="flex" alignItems="center" sx={{
        height: { xs: '300px', sm: '300px' }, 
        backgroundImage: `url(${"/asset/img/about/company/banner.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}>
        <AnimUp>
          <Box display="flex" alignItems="center">
            <Box display="flex" className="border-b-2 border-black md:ms-16">
              <MdChevronRight size="2rem" className="me-2" color="black"/>
              <Typography variant="overline"  className="text-black me-2 text-lg">HOME PAGE</Typography>
              <MdChevronRight size="2rem" className="me-2" color="black"/>
              <Typography variant="overline"  className="text-black me-2 text-lg">ABOUT US</Typography>
              <MdChevronRight size="2rem" className="me-2" color="black"/>
              <Typography variant="overline"  className="text-black me-2 text-lg">ABOUT COMPANY</Typography>
            </Box>
          </Box>
          <Typography variant="h3" className="font-bold txt-mte mt-4 md:ms-16">Company Information</Typography>
        </AnimUp>
      </Box>
      <Container>
      <AnimUp>
        <Box className="text-center">
          <Typography variant='h4' className='trilong font-bold italic mt-14'>General Details</Typography>
        </Box>
        <Box className="mt-8 text-left" display="flex" justifyContent="center">
          <Grid container justifyContent="center">
            <Grid xs={3}>
              <Typography className='txt-mte font-bold'>Name Of Contractor</Typography>
            </Grid>
            <Grid xs={8}>
              <Typography className=''>MINH THANH ELEC COMPANY LIMITED</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className='txt-mte font-bold'>Type Of Company</Typography>
            </Grid>
            <Grid xs={8}>
              <Typography className=''>Owned Limited</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className='txt-mte font-bold'>Tax Number</Typography>
            </Grid>
            <Grid xs={8}>
              <Typography className=''>0312887080</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className='txt-mte font-bold'>Adress Of Office & Workshop</Typography>
            </Grid>
            <Grid xs={8}>
              <Typography className=''>No 22, Street No 6, KP6, Binh Hung Hoa B Ward, Binh Tan District, Ho Chi Minh City, Viet Nam</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className='txt-mte font-bold'>Telephone Number</Typography>
            </Grid>
            <Grid xs={8}>
              <Typography className=''>(84-28) 37 655 273- 37 655 274</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className='txt-mte font-bold'>Email</Typography>
            </Grid>
            <Grid xs={8}>
              <Typography className=''>mtelec@mtelec.vn</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className='txt-mte font-bold'>Website</Typography>
            </Grid>
            <Grid xs={8}>
              <Typography className=''>https://www.mtelec.vn/</Typography>
            </Grid>
          </Grid>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="text-center my-10">
          <Typography variant='h4' className='trilong font-bold italic'>Certificates</Typography>
        </Box>
        </AnimUp>
        <Box className="mt-8 text-center mb-4" justifyContent="center">
          <AnimUp>
          <Grid container justifyContent="center" alignItems="center">
            <Grid md={6}>
              <Typography variant='h5' className='trilong italic font-bold'>Distributor Of Legrand Group</Typography>
            </Grid>
            <Grid md={6} className="flex items-center justify-center">
              <Image src="/asset/img/about/company/img_1.png" alt="leg" width={420} height={420} />
            </Grid>
          </Grid>
          </AnimUp>
          <AnimUp>
          <Grid className="mb-4" container justifyContent="center" alignItems="center">
            <Grid md={6}>
              <Typography variant='h5' className='trilong italic font-bold'>Schneider Electric Certification</Typography>
            </Grid>
            <Grid md={6} className="flex items-center justify-center">
              <Image src="/asset/img/about/company/img_2.png" alt="leg" width={420} height={420} />
            </Grid>
          </Grid>
          </AnimUp>
          <AnimUp>
          <Grid className="mb-4" container justifyContent="center" alignItems="center">
            <Grid md={6}>
              <Typography variant='h5' className='trilong italic font-bold'>Safe Man-hours - Cargill - Provimi</Typography>
            </Grid>
            <Grid md={6} className="flex items-center justify-center">
              <Image src="/asset/img/about/company/img_3.png" alt="leg" width={420} height={420} />
            </Grid>
          </Grid>
          </AnimUp>
          <AnimUp>
          <Grid className="mb-4" container justifyContent="center" alignItems="center">
            <Grid md={6}>
              <Typography variant='h5' className='trilong italic font-bold'>Cargill - Provimi Appreciation Letter</Typography>
            </Grid>
            <Grid md={6} className="flex items-center justify-center">
              <Image src="/asset/img/about/company/img_4.png" alt="leg" width={420} height={420} />
            </Grid>
          </Grid>
          </AnimUp>
          <AnimUp>
          <Grid className="mb-4" container justifyContent="center" alignItems="center">
            <Grid md={6}>
              <Typography variant='h5' className='trilong italic font-bold'>Most Meritorious Supplier Award</Typography>
            </Grid>
            <Grid md={6} className="flex items-center justify-center">
              <Image src="/asset/img/about/company/img_5.png" alt="leg" width={420} height={420} />
            </Grid>
          </Grid>
          </AnimUp>
        </Box>
      </Container>
    </Box>
  )
}

export default page