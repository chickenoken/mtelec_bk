"use client"
import ContactUs from "@app/(main)/_component/Home/contactUs/ContactUs"
import ImgCarousel from "@app/(main)/_component/Home/imgCarousel/ImgCarousel"
import { IProduct } from "@app/(main)/products/page"
import { getPElectricService } from "@app/user/pages/electricService/_server/FormElectricServiceAction"
import { MotionDiv } from "@components/motion/MotionDiv"
import { Box, Button, Card, CardContent, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Image from "next/image"
import React, { ReactNode, useEffect } from "react"
import { LuDot } from "react-icons/lu"
import { MdChevronRight } from "react-icons/md"

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

interface IElectricService {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  wk1: string;
  wk2: string;
  wk3: string;
  wk4: string;
  wk5: string;
}

const page = () => {
  const [data, setData] = React.useState<IElectricService>();

  const getData = async () => {
    let rs = await getPElectricService();
    setData(rs);
  }

  useEffect(() => {
    getData();
  }, []);

  const itemData1 : IProduct[]  = [
    { _id: '1', company: '', title: 'AUTOMATION DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_1.png',},
    { _id: '1', company: '', title: 'SOLAR SYSTEM', path: '/asset/img/home/carousel1/carousel_2.jpg',},
    { _id: '1', company: '', title: 'HVAC DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_3.jpg',},
    { _id: '1', company: '', title: 'ELV DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_4.jpg',},
    { _id: '1', company: '', title: 'ELECTRICAL SERVICE', path: '/asset/img/home/carousel1/carousel_5.png',},
    { _id: '1', company: '', title: 'ELECTRICAL DESIGN AND INSTALLATION', path: '/asset/img/home/carousel1/carousel_6.jpg',},
  ];
  
  return (
    <>
      <Box display="flex" alignItems="center">
        <Box display="flex" className="border-b-2 md:ms-16 my-2">
          <MdChevronRight size="2rem" className="me-2" color="gray"/>
          <Typography variant="overline" className="text-gray-300 me-2 text-lg">HOME PAGE</Typography>
          <MdChevronRight size="2rem" className="me-2" color="gray"/>
          <Typography variant="overline" className="text-gray-300 me-2 text-lg">SERVICE</Typography>
          <MdChevronRight size="2rem" className="me-2" color="black"/>
          <Typography variant="overline"  className="text-black me-2 text-lg">ELECTRICAL SERVICES </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="flex-end" sx={{
        height: { xs: '400px', sm: '700px' }, 
        backgroundImage: `url(${"/asset/img/service/electrical/hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: '100% 100%', sm: '100% auto' },
      }}>
        <AnimUp>
          <Typography variant="h4" className="font-bold text-white md:ms-16">ELECTRICAL SERVICES </Typography>
        </AnimUp>
      </Box>
      <Container className="my-4">
        <AnimUp>
        <Box className="mt-10 p-8" sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: 'cover'}}>
          <Typography variant="h5" className="font-bold trilong italic mb-4">Electrical Study Report</Typography>
          <Grid container spacing={5}>
            <Grid md={6}>
              {data?.wk1 ? data.wk1.split('\n').map((val: string, ind: number) => (
                <Box>
                {val.endsWith(':') ? 
                  <Box className="flex items-start justify-start mb-2">
                    <Image className='me-2 my-[2px]' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                    <Typography className='text-sm font-bold'>{val.slice(0, -1)}</Typography>
                  </Box>
                : 
                  <Box className="flex items-center justify-start mb-2 ps-6">
                    <LuDot />
                    <Typography className='text-sm'>{val}</Typography>
                  </Box>
                }
                </Box>
              )) : null}
            </Grid>
            <Grid md={6}>
              {data?.wk2 ? data.wk2.split('\n').map((val: string, ind: number) => (
                <Box>
                {val.endsWith(':') ? 
                  <Box className="flex items-start justify-start mb-2">
                    <Image className='me-2 my-[2px]' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                    <Typography className='text-sm font-bold'>{val.slice(0, -1)}</Typography>
                  </Box>
                : 
                  <Box className="flex items-center justify-start mb-2 ps-6">
                    <LuDot />
                    <Typography className='text-sm'>{val}</Typography>
                  </Box>
                }
                </Box>
              )) : null}
            </Grid>
          </Grid>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="mt-10 p-8">
          <Grid container>
            <Grid md={6}>
              <Image className='me-2' src={data?.image1 ?? ""} alt="alt" width={700} height={700} />
            </Grid>
            <Grid md={6}>
              <Box className="flex items-center justify-center mb-4">
                <Card className="shadow-lg" sx={{ width: 190, height: 150 }}>
                  <CardContent className="p-2">
                    <Image className='' src={data?.image2 ?? ""} alt="alt" width={170} height={170} />
                  </CardContent>
                </Card>
                <Card className="shadow-lg mx-auto" sx={{ width: 190, height: 150 }}>
                  <CardContent className="p-2">
                    <Image className='' src={data?.image3 ?? ""} alt="alt" width={170} height={170} />
                  </CardContent>
                </Card>
              </Box>
              <Box className="flex items-center justify-center">
                <Card className="shadow-lg" sx={{ width: 300, height: 250 }}>
                  <CardContent className="p-2">
                    <Image className='' src={data?.image4 ?? ""} alt="alt" width={300} height={200} />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="mt-10 p-8" sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: 'cover'}}>
        <Typography variant="h5" className="font-bold trilong italic mb-4">Thermal Camera</Typography>
          {data?.wk3 ? data.wk3.split('\n').map((val: string, ind: number) => (
            <Box className="flex items-start justify-start mb-2">
              <Image className='me-2 my-[2px]' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
              <Typography className='text-sm font-bold'>{val.split(':')[0]}</Typography>
              <Typography className='text-sm'>: {val.split(':')[1]}</Typography>
            </Box>
          )) : null}
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="mt-10 p-8">
          <Grid container>
            <Grid md={5}>
              <Box display="flex" alignItems="center" justifyContent="center" sx={{height: '100%'}}>
                <Image className='me-2' src={data?.image5 ?? ""} alt="alt" width={340} height={340} />
              </Box>
            </Grid>
            <Grid md={7}>
              <Box display="flex" alignItems="center" justifyContent="center" sx={{height: '100%'}}>
                <Image className='me-2' src={data?.image6 ?? ""} alt="alt" width={900} height={900} />
              </Box>
            </Grid>
          </Grid>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="mt-10 p-8" sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: 'cover'}}>
          <Typography variant="h5" className="font-bold trilong italic mb-4">{data?.wk5}</Typography>
        </Box>
        <Box>
          <Image className='me-2 w-full h-full' src={data?.image7 ?? ""} alt="alt" quality={100} width={1920} height={1800} /> 
        </Box>
        <Box className="mt-10 p-8" sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: 'cover'}}>
          <Typography variant="h5" className="font-bold trilong italic mb-4">M&E Maintenaince Service</Typography>
            {data?.wk5 ? data.wk5.split('\n').map((val: string, ind: number) => (
              <Box>
              {val.endsWith(':') ? 
                <Box className="flex items-start justify-start mb-2">
                  <Image className='me-2 my-[2px]' src="/asset/svg/icon.svg" alt="alt" width={15} height={15} />
                  <Typography className='text-sm font-bold'>{val.slice(0, -1)}</Typography>
                </Box>
              : 
                <Box className="flex items-center justify-start mb-2 ps-6">
                  <LuDot />
                  <Typography className='text-sm'>{val}</Typography>
                </Box>
              }
              </Box>
            )) : null}
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