import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { BiSolidRightArrow } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { ReactNode } from "react";
import { MotionDiv } from '@components/motion/MotionDiv'

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
      <Box className="grid grid-cols-3 pt-28 pb-10">
        <Box className="ml-6">
          <LeftToRight>
          <Box className='ml-11 mb-2'>
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
        <Box className="grid grid-cols-3 gap-2 items-start ml-6 h-24">
          <Box className='flex items-center justify-center'>
            <Typography className='font-bold'>About Us</Typography>
            <BiSolidRightArrow className="ml-2" size={15}/>
          </Box>
          <Box className='flex items-center justify-center'>
            <Typography className='font-bold'>Service</Typography>
            <BiSolidRightArrow className="ml-2" size={15}/>
          </Box>
          <Box className='flex items-center justify-center'>
            <Typography className='font-bold'>Typical Projects</Typography>
            <BiSolidRightArrow className="ml-2" size={15}/>
          </Box>
          <Box className='flex items-center justify-center'>
            <Typography className='font-bold'>Product</Typography>
            <BiSolidRightArrow className="ml-2" size={15}/>
          </Box>
          <Box className='flex items-center justify-center'>
            <Typography className='font-bold'>Recruitment</Typography>
            <BiSolidRightArrow className="ml-2" size={15}/>
          </Box>
          <Box className='flex items-center justify-center'>
            <Typography className='font-bold'>Contact Us</Typography>
            <BiSolidRightArrow className="ml-2" size={15}/>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default Footer