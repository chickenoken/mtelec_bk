import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { BiSolidRightArrow } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { ReactNode } from "react";
import { MotionDiv } from '@components/motion/MotionDiv'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { GoDownload } from "react-icons/go";
import Link from 'next/link'

const Footer = () => {
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

  return (
    <>
    <Box sx={{ backgroundImage: `url('/asset/img/footer.png')`, backgroundSize: 'cover',}}>
      <Grid container className="pt-28 pb-10" >
        <Grid lg={4}>
          <Box className="md:ml-6">
            <LeftToRight>
            <Box className='md:ml-11 mb-2'>
              <Image className="ml-2" src="/asset/img/logo_white.png" width={120} height={150} alt="f_logo" />
              <Typography className="text-white mt-2">MTELEC Co., LTD</Typography>
              <Box className='flex mb-1 mt-4'>
                <FiMapPin className="text-white" size={20} />
                <Typography className='text-white ml-2 text-sm'>No 22, Street No 6, KP6, Binh Hung Hoa B Ward, Binh Tan District, Ho Chi Minh City, Viet Nam</Typography>
              </Box>
              <Box className='flex items-center mb-2'>
                <Box className='flex items-center'>
                  <BsTelephone className="text-white" size={15} />
                  <Typography className='text-white ml-2 text-sm'>(84-28) 37655273 - 37655274</Typography>
                </Box>
                <Box className='flex items-center ml-4'>
                  <FiMail className="text-white" size={15} />
                  <Typography className='text-white ml-2 text-sm'>mtelec@mtelec.vn</Typography>
                </Box>
              </Box>
            </Box>
            </LeftToRight>
          </Box>
        </Grid>
        <Grid lg={5} className="my-2">
          <Grid container className="md:space-x-14 space-x-4">
            <Grid xs={4}>
              <Box className='flex items-center justify-center'>
                <Link href="/about"><Typography className='font-bold'>About Us</Typography></Link>
                <BiSolidRightArrow className="ml-2" size={15}/>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box className='flex items-center justify-center'>
                <Link href="/services"><Typography className='font-bold'>Service</Typography></Link>
                <BiSolidRightArrow className="ml-2" size={15}/>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box className='flex items-center justify-center'>
                <Link href="/projects"><Typography className='font-bold'>Typical Projects</Typography></Link>
                <BiSolidRightArrow className="ml-2" size={15}/>
              </Box>
            </Grid>
          </Grid>
          <Grid container className="md:mt-8 md:space-x-14 space-x-4">
            <Grid xs={4}>
              <Box className='flex items-center justify-center'>
                <Link href="/products"><Typography className='font-bold'>Product</Typography></Link>
                <BiSolidRightArrow className="ml-2" size={15}/>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box className='flex items-center justify-center'>
                <Link href="/about/recruitment"><Typography className='font-bold'>Recruitment</Typography></Link>
                <BiSolidRightArrow className="ml-2" size={15}/>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box className='flex items-center justify-center'>
                <Link href="/contact"><Typography className='font-bold'>Contact Us</Typography></Link>
                <BiSolidRightArrow className="ml-2" size={15}/>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container lg={3} alignItems="flex-end" justifyContent="flex-start my-4">
          <a href="/asset/mte-pdf.pdf" download style={{ display: 'flex', alignItems: 'center' }}>
            <Typography className='font-bold text-white'>Download Company Profile (PDF)</Typography>
            <GoDownload color='white' size="1.3rem" />
          </a>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default Footer