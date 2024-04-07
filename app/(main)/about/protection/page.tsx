import { MotionDiv } from "@components/motion/MotionDiv";
import { Box, Card, CardActionArea, CardContent, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Image from "next/image"
import { ReactNode } from "react";
import { BsDot } from "react-icons/bs";
import { MdChevronRight } from "react-icons/md";

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
        height: { xs: '300px', sm: '300px' }, 
        backgroundImage: `url(${"/asset/img/about/protection/hero.png"})`,
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
              <Typography variant="overline"  className="text-black me-2 text-lg">PPE PROTECTION</Typography>
            </Box>
          </Box>
          <Typography variant="h3" className="font-bold txt-mte mt-4 md:ms-16">PPE PROTECTION</Typography>
        </AnimUp>
      </Box>
      <Box  sx={{
          backgroundImage: `url(${"/asset/img/about/protection/bg.png"})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Container>
          <AnimUp>
          <Typography variant="h5" className="text-center mb-14">MTELEC PPE</Typography>
          <Box display="flex" justifyContent="center" className="mb-10" >
            <Image alt="mte-pbe" src="/asset/img/about/protection/body.png" width={800} height={800} />
          </Box>
          </AnimUp>

          <AnimUp>
          <Box display="flex" justifyContent="center" className="mb-4">
            <Card sx={{ width: '55vw', backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
              <CardActionArea>
                <CardContent className="m-1">
                  <Grid container spacing={5}>
                    <Grid md={2} container justifyContent="center" alignItems="center">
                      <Image alt="mte-icon" src="/asset/img/about/protection/icon_box.png" width={70} height={70} />
                    </Grid>
                    <Grid md={10}>
                      <Typography gutterBottom className="font-bold">
                        1. PROTECT THE HEAD
                      </Typography>
                      <Box display="flex">
                        <BsDot className="me-2"/>
                        <Typography variant="body2">
                          Welding protection helmets are mandatory when welding work begins.
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <BsDot className="me-2"/>
                        <Typography variant="body2">
                          They help avoid the effects of UV rays, infrared rays, melting slag rays on the eyes and face.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          </AnimUp>
          <AnimUp>
          <Box display="flex" justifyContent="center" className="mb-4">
            <Card sx={{ width: '55vw', backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
              <CardActionArea>
                <CardContent className="m-1">
                  <Grid container spacing={5}>
                    <Grid md={2} container justifyContent="center" alignItems="center">
                      <Image alt="mte-icon" src="/asset/img/about/protection/icon_box.png" width={70} height={70} />
                    </Grid>
                    <Grid md={10}>
                      <Typography gutterBottom className="font-bold">
                        2. PROTECTIVE CLOTHING
                      </Typography>
                      <Box display="flex">
                        <BsDot className="me-2"/>
                        <Typography variant="body2">
                          Protect the legs, arms and neck skin of the welding worker. 
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <BsDot className="me-2"/>
                        <Typography variant="body2">
                          Workers’ clothes are made of noncombustible materials. Leather is always a safe choice to prevent burn for workers. 
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <BsDot className="me-2"/>
                        <Typography variant="body2">
                          Provide gloves because the hand is the closest contact with welding sparks
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          </AnimUp>
          <AnimUp>
          <Box display="flex" justifyContent="center" className="mb-4">
            <Card sx={{ width: '55vw', backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
              <CardActionArea>
                <CardContent className="m-1">
                  <Grid container spacing={5}>
                    <Grid md={2} container justifyContent="center" alignItems="center">
                      <Image alt="mte-icon" src="/asset/img/about/protection/icon_box.png" width={70} height={70} />
                    </Grid>
                    <Grid md={10}>
                      <Typography gutterBottom className="font-bold">
                        3. LABOR PROTECTION
                      </Typography>
                      <Box display="flex">
                        <BsDot className="me-2"/>
                        <Typography variant="body2">
                          Provide safety equipment such as safety hats, gloves, cords, shoes, cutting face shield, ear plug... to ensure safety for workers
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          </AnimUp>
        </Container>
      </Box>
    </>
  )
}

export default page