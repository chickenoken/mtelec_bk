import { MotionDiv } from "@components/motion/MotionDiv"
import { Box, Container, Typography } from "@mui/material"
import { ReactNode } from "react"
import { MdChevronRight } from "react-icons/md"
import ContactUs from "../_component/Home/contactUs/ContactUs"
import ProjectList from "./_component/ProjectList"
import Category from "./_component/Category"

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
        backgroundImage: `url(${"/asset/img/projects/hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}>
        <AnimUp>
          <Box display="flex" alignItems="center">
            <Box display="flex" className="border-b-2 border-white md:ms-16">
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">HOME PAGE</Typography>
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">ABOUT US</Typography>
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">ABOUT COMPANY</Typography>
            </Box>
          </Box>
          <Typography variant="h3" className="font-bold text-white mt-4 md:ms-16">Company Information</Typography>
        </AnimUp>
      </Box>
      <Container className="p-10" maxWidth={false} >
        <AnimUp>
          <ProjectList />
        </AnimUp>
        <AnimUp>
          <Category />
        </AnimUp>
        <AnimUp>
          <ContactUs />
        </AnimUp>
      </Container>
    </>
  )
}

export default page