import { MotionDiv } from "@components/motion/MotionDiv"
import { Box, Container, Button, Typography, Card, ImageListItemBar, ImageListItem, CardActionArea } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import { MdChevronRight } from "react-icons/md"

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
    <>
      <Box display="flex" alignItems="center" sx={{
        height: { xs: '300px', sm: '500px' }, 
        backgroundImage: `url(${"/asset/img/about/hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: { xs: '100% 100%', sm: '100% auto' },
      }}>
        <AnimUp>
          <Box display="flex" alignItems="center">
            <Box display="flex" className="border-b-2 ms-16">
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">HOME PAGE</Typography>
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">ABOUT US</Typography>
            </Box>
          </Box>
          <Typography variant="h3" className="trilong italic text-white ms-16">About</Typography>
          <Typography variant="h3" className="font-bold text-white ms-16">MTELEC Co., LTD</Typography>
        </AnimUp>
      </Box>
      <Container>
        <AnimUp>
        <Grid className="mb-8" container spacing={10}>
          <Grid md={6}>
            <Box>
              <Typography className="trilong italic font-bold" variant="h5" gutterBottom>Our Company</Typography>
              <Typography variant="h3" className='font-bold txt-mte' gutterBottom>Powering Your World with Innovative Electrical Solutions</Typography>
              <Typography align="justify" gutterBottom>
                Our basic business is Electrical Engineering – Design, Industrial Installation, Energy Efficiency, Preventive Maintenance and Electrical Safety. MTELEC brings global electrical solutions to all professionals and people who are mindful of concept:
              </Typography>
              <Box className="px-2.5 py-6 my-6 bg-gradient-to-l from-stone-300 via-neutral-100 to-stone-300">
                <Typography variant="h4" align="center" className='font-bold txt-mte'>
                  Reliability, Quality, and Safety
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid md={6} >
            <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
              <Image key={1} src="/asset/img/home/about/img_1.jpg" alt="alt" width={500} height={450} style={{ zIndex: 1, boxShadow: '2rem -2rem black'}}/>
            </Box>
          </Grid>
        </Grid>
        </AnimUp>

        <AnimUp>
        <Box className="mb-8" sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: 'cover'}}>
          <Grid container spacing={5}>
            <Grid md={4}>
              <Box className="flex justify-center" sx={{ alignItems: 'center' }}>
                <Image src="/asset/img/about/shield.svg" alt="alt" width={70} height={70} />
                <Box className="ml-2">
                  <Typography variant="h4" className="font-bold txt-mte">20+</Typography>
                  <Typography>years of experience</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid md={4}>
              <Box className="flex justify-center" sx={{ alignItems: 'center' }}>
                  <Image src="/asset/img/about/shield.svg" alt="alt" width={70} height={70} />
                  <Box className="ml-2">
                    <Typography variant="h4" className="font-bold txt-mte">100+</Typography>
                    <Typography>successful projects</Typography>
                  </Box>
                </Box>
            </Grid>
            <Grid md={4}>
              <Box className="flex justify-center" sx={{ alignItems: 'center' }}>
                <Image src="/asset/img/about/shield.svg" alt="alt" width={70} height={70} />
                <Box className="ml-2">
                  <Typography variant="h4" className="font-bold txt-mte">90%</Typography>
                  <Typography>satisfied customers</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Button className="mb-8 mt-16 h-16 px-8 py-5 mte-grey text-black text-xl font-bold" fullWidth variant="text">Company Information</Button>
        </AnimUp>
      </Container>

      <Box className="mb-8 pt-12 py-16" sx={{ backgroundImage: `url('/asset/img/about/bg_2.png')`, backgroundSize: '100% 100%'}}>
        <Container>
        <AnimUp>
        <Typography className="font-bold text-white text-center" variant="h4" gutterBottom>Our Values</Typography>
        <Grid container spacing={5}>
          <Grid md={3}>
            <Typography variant="h5" className="font-bold italic underline text-white text-center">Vision</Typography>
          </Grid>
          <Grid md={9}>
            <Typography align="justify" className="text-white">Our vision is to be a highly successful Company in an electrical energy sector and delivering best service and best products with most competitive price to our customers.</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid md={3}>
            <Typography variant="h5" className="font-bold italic underline text-white text-center">Mission</Typography>
          </Grid>
          <Grid container md={9}>
            <Grid md={4}>
              <Card className="bg-transparent border-slate-50 p-2 h-full" variant="outlined">
                <Image src="/asset/img/about/icon1.svg" alt="alt" width={70} height={70} />
                <Typography className="font-bold text-white">Top-Quality Services</Typography>
                <Typography align="justify" className="text-xs text-white">Our mission is to provide top-quality electrical engineering services to our clients, delivering innovative solutions for Design, Industrial Installation, Energy Efficiency, Preventive Maintenance, Electrical Safety.</Typography>
              </Card>
            </Grid>
            <Grid md={4}>
              <Card className="bg-transparent border-slate-50 p-2 h-full" variant="outlined">
                <Image src="/asset/img/about/icon2.svg" alt="alt" width={70} height={70} />
                <Typography className="font-bold text-white">Exceptional Value</Typography>
                <Typography align="justify" className="text-xs text-white">We are committed to delivering exceptional value to our customers, ensuring their operations run smoothly, safely, and efficiently. </Typography>
              </Card>
            </Grid>
            <Grid md={4}>
              <Card className="bg-transparent border-slate-50 p-2 h-full" variant="outlined">
                <Image src="/asset/img/about/icon3.svg" alt="alt" width={70} height={70} />
                <Typography className="font-bold text-white">Long-lasting Commitments</Typography>
                <Typography align="justify" className="text-xs text-white">We prioritize the safety and well-being of our employees, customers, and partners, and are dedicated to building long-lasting relationships with our customers based on trust, reliability, and excellence.</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid md={3}>
            <Typography variant="h5" className="font-bold italic underline text-white text-center">Mission</Typography>
          </Grid>
          <Grid container md={9}>
            <Grid md={6}>
              <Card className="bg-transparent border-slate-50 p-2 h-full" variant="outlined">
                <Box className="flex justify-center" sx={{ alignItems: 'center' }}>
                  <Image src="/asset/img/about/icon4.svg" alt="alt" width={70} height={70} />
                  <Box className="ml-2">
                    <Typography className="font-bold text-white">Customer Focus:</Typography>
                    <Typography align="justify" className="text-xs text-white">Our goal is to have a good relationship with customers and get to know them well to ensure that we deliver exactly the service they require</Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid md={6}>
              <Card className="bg-transparent border-slate-50 p-2 h-full" variant="outlined">
                <Box className="flex justify-center" sx={{ alignItems: 'center' }}>
                  <Image src="/asset/img/about/icon5.svg" alt="alt" width={70} height={70} />
                  <Box className="ml-2">
                    <Typography className="font-bold text-white">Quality:</Typography>
                    <Typography align="justify" className="text-xs text-white">We provide high standards for our service and products is a representation of who we are.</Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid md={6}>
              <Card className="bg-transparent border-slate-50 p-2 h-full" variant="outlined">
                <Box className="flex justify-center" sx={{ alignItems: 'center' }}>
                  <Image src="/asset/img/about/icon6.svg" alt="alt" width={70} height={70} />
                  <Box className="ml-2">
                    <Typography className="font-bold text-white">Safety</Typography>
                    <Typography align="justify" className="text-xs text-white">We will always put safety first–for our People, Contractors, Customers and Communities. Safety comes before everything at MTELEC. We measure our success by how safely we achieve our goals.</Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid md={6}>
              <Card className="bg-transparent border-slate-50 p-2 h-full" variant="outlined">
                <Box className="flex justify-center" sx={{ alignItems: 'center' }}>
                  <Image src="/asset/img/about/icon7.svg" alt="alt" width={70} height={70} />
                  <Box className="ml-2">
                    <Typography className="font-bold text-white">Integrity:</Typography>
                    <Typography align="justify" className="text-xs text-white">We are honest, trustworthy and dependable. Integrity is at the core of all we do – how we conduct ourselves and interact with all of our Customers.</Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        </AnimUp>
        </Container>
      </Box>
      <Container>
        <AnimUp>
        <Grid className="mb-8" container spacing={10}>
          <Grid md={6}>
            <Box>
              <Typography className="trilong italic font-bold" variant="h5" gutterBottom>Our Team</Typography>
              <Typography variant="h3" className='font-bold txt-mte' gutterBottom>Best Team Of Professional Experts</Typography>
              <Typography align="justify" gutterBottom>
                Apart from providing electrical services and products, MTELEC is proud of having a team of highly experienced staffs with an excellent customer care. This team has helped to improve the standard of electrical works in Viet Nam and to ensure electrical safety.
              </Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '100%' }}>
              <Image key={1} src="/asset/img/about/img_1.png" alt="alt" width={500} height={450} style={{ zIndex: 1, boxShadow: '2rem -2rem black'}}/>
            </Box>
          </Grid>
        </Grid>
        <Button className="mb-8 h-16 px-8 py-5 mte-grey text-black text-xl font-bold" fullWidth variant="text">Organization Chart</Button>
        </AnimUp>
        <AnimUp>
        <Box>
          <Grid container spacing={10}>
            <Grid md={6}>
              <Box sx={{ height: 400, width: '100%', position: 'relative' }}>
              <ImageListItem className="mx-2">
                <Image className="h-96 w-full" src="/asset/img/about/img_2.png" alt="" loading="lazy" width={500} height={200} />
                <Link href="/about/protection"> 
                  <CardActionArea>
                    <ImageListItemBar className="text-center m-2 mte-grey" title="PPE PROTECTION"  sx={{"& .MuiImageListItemBar-title": { color: "black" }}}  />
                  </CardActionArea>
                </Link>
              </ImageListItem>
              </Box>
            </Grid>
            <Grid md={6}>
              <Box sx={{ height: 400, width: '100%', position: 'relative' }}>
              <ImageListItem className="mx-2">
                <Image className="h-96 w-full" src="/asset/img/about/img_3.png" alt="" loading="lazy" width={500} height={200} />
                <Link href="/about/recruitment"> 
                  <CardActionArea>
                    <ImageListItemBar className="text-center m-2 mte-grey" title="RECRUITMENT"  sx={{"& .MuiImageListItemBar-title": { color: "black" }}}  />
                  </CardActionArea>
                </Link>
              </ImageListItem>
              </Box>
            </Grid>
          </Grid>
        </Box>
        </AnimUp>
      </Container>
    </>
  )
}

export default page