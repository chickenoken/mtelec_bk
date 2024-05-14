import { MotionDiv } from '@components/motion/MotionDiv'
import { Box, Card, CardContent, Container, Typography } from '@mui/material'
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
        backgroundImage: `url(${"/asset/img/about/teams/banner.png"})`,
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
              <Typography variant="overline"  className="text-black me-2 text-lg">ABOUT OUR TEAM</Typography>
            </Box>
          </Box>
          <Typography variant="h3" className="font-bold txt-mte mt-4 md:ms-16">Our Team</Typography>
        </AnimUp>
      </Box>
      <Container>
        <AnimUp>
        <Box className="px-36 mb-8">
          <Typography className='mb-2'>Our team with the strong Leader is a group of skilled and dedicated individuals who share a common goal of delivering high-quality work and exceptional results. Each team member brings a unique set of skills, knowledge, and experience to the table, which allows us to tackle projects from different angles and find innovative solutions. </Typography>
          <Typography className=''>We prioritize collaboration, communication, and mutual respect, which fosters a supportive and productive work environment. We committed to staying up-to-date with the latest industry trends and technologies, and we continuously seek opportunities for growth and improvement.</Typography>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="text-center my-10">
          <Typography variant='h4' className='trilong font-bold italic'>Best Team Of</Typography>
          <Typography variant='h4' className='trilong font-bold italic'>Professional Experts</Typography>
        </Box>
        <Box className="mt-8 text-center mb-4" justifyContent="center">
          <Grid container justifyContent="center" alignItems="center">
            <Grid md={6} className="flex flex-col items-center justify-end pe-10">
              <Image src="/asset/img/about/teams/person_1.png" alt="leg" width={380} height={380} />
              <Card className='w-96 max-w-96'>
                <CardContent className='px-2'>
                  <Typography className='text-start txt-mte font-bold text-lg'>
                    Mrs. NGUYEN THI BICH THUY
                  </Typography>
                  <Typography className='text-start font-bold italic trilong' variant='subtitle1'>
                    General Director
                  </Typography>
                  <Typography className='text-start font-bold text-sm' variant='subtitle2'>
                    Management – Contracting – Control Executive
                  </Typography>
                  <Typography className='text-start text-xs' >
                    Prestige, Integrity, and Respect are the three key factors that have contributed to our success of a company
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid md={6} className="flex flex-col items-center justify-start ps-10">
              <Image src="/asset/img/about/teams/person_2.png" alt="leg" width={380} height={380} />
              <Card className='w-96 max-w-96'>
                <CardContent>
                  <Typography className='text-start txt-mte font-bold text-lg'>
                    Mr. GUY GAUTHIER
                  </Typography>
                  <Typography className='text-start font-bold italic trilong' variant='subtitle1'>
                    Technical Director
                  </Typography>
                  <Typography className='text-start font-bold text-sm' variant='subtitle2'>
                    Technical Management – Control
                  </Typography>
                  <Typography className='text-start text-xs' >
                    Adaptability – Safety – Effectiveness are the criteria that we aim for the quality of our service.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="text-center mt-20 mb-10">
          <Typography variant='h4' className='trilong font-bold italic'>Core Managers</Typography>
        </Box>
        </AnimUp>

        <Box className="mx-auto mb-4">
          <AnimUp>
          <Grid container justifyContent="center" alignItems="center" className="mb-10">
            <Grid md={6} className="flex flex-col items-center">
              <Image src="/asset/img/about/teams/p_1.png" alt="leg" width={250} height={250} />
              <Typography className='text-center'>
                Executive Assistance
              </Typography>
              <Typography className='text-center font-bold' variant='subtitle1'>
                Tran Thi Thu Trang
              </Typography>
              <Typography className='text-center font-bold italic trilong text-sm' variant='subtitle2'>
                7+ years of experience
              </Typography>
            </Grid>
            <Grid md={6} className="flex flex-col items-center">
              <Image src="/asset/img/about/teams/p_2.png" alt="leg" width={250} height={250} />
              <Typography className='text-center'>
              Chief of Accounting
              </Typography>
              <Typography className='text-center font-bold' variant='subtitle1'>
              On Le My Phuong
              </Typography>
              <Typography className='text-center font-bold italic trilong text-sm' variant='subtitle2'>
              10+ years of experience
              </Typography>
            </Grid>
          </Grid>
          </AnimUp>

          <AnimUp>
          <Grid container justifyContent="center" alignItems="center" className="mb-10">
            <Grid md={6} className="flex flex-col items-center">
              <Image src="/asset/img/about/teams/p_3.png" alt="leg" width={250} height={250} />
              <Typography className='text-center'>
                Project Manager
              </Typography>
              <Typography className='text-center font-bold' variant='subtitle1'>
                Nguyen Van Mong
              </Typography>
              <Typography className='text-center font-bold italic trilong text-sm' variant='subtitle2'>
                15+ years of experience
              </Typography>
            </Grid>
            <Grid md={6} className="flex flex-col items-center">
              <Image src="/asset/img/about/teams/p_4.png" alt="leg" width={250} height={250} />
              <Typography className='text-center'>
              Project Manager
              </Typography>
              <Typography className='text-center font-bold' variant='subtitle1'>
              Nguyen Ngoc Thanh
              </Typography>
              <Typography className='text-center font-bold italic trilong text-sm' variant='subtitle2'>
              13+ years of experience
              </Typography>
            </Grid>
          </Grid>
          </AnimUp>

          <AnimUp>
          <Grid container justifyContent="center" alignItems="center" className="mb-10">
            <Grid md={3} className="flex flex-col items-center">
              <Image src="/asset/img/about/teams/p_5.png" alt="leg" width={200} height={200} />
              <Typography className='text-center'>
              Site Manager
              </Typography>
              <Typography className='text-center font-bold' variant='subtitle1'>
              Ngo Nhat Anh
              </Typography>
              <Typography className='text-center font-bold italic trilong text-sm' variant='subtitle2'>
              7+ years of experience
              </Typography>
            </Grid>
            <Grid md={3} className="flex flex-col items-center">
              <Image src="/asset/img/about/teams/p_6.png" alt="leg" width={200} height={200} />
              <Typography className='text-center'>
              Site Manager
              </Typography>
              <Typography className='text-center font-bold' variant='subtitle1'>
              Le Van Thuan
              </Typography>
              <Typography className='text-center font-bold italic trilong text-sm' variant='subtitle2'>
              12+ years of experience
              </Typography>
            </Grid>
            <Grid md={3} className="flex flex-col items-center">
              <Image src="/asset/img/about/teams/p_7.png" alt="leg" width={200} height={200} />
              <Typography className='text-center'>
              Site Manager
              </Typography>
              <Typography className='text-center font-bold' variant='subtitle1'>
              Nguyen Van Tra
              </Typography>
              <Typography className='text-center font-bold italic trilong text-sm' variant='subtitle2'>
              4+ years of experience
              </Typography>
            </Grid>
            <Grid md={3} className="flex flex-col items-center">
              <Image src="/asset/img/about/teams/p_8.png" alt="leg" width={200} height={200} />
              <Typography className='text-center'>
              Site Manager
              </Typography>
              <Typography className='text-center font-bold' variant='subtitle1'>
              Ha Gia Bao
              </Typography>
              <Typography className='text-center font-bold italic trilong text-sm' variant='subtitle2'>
              3+ years of experience
              </Typography>
            </Grid>
          </Grid>
          </AnimUp>
        </Box>
      </Container>
    </Box>
  )
}

export default page