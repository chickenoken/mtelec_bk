import { MotionDiv } from "@components/motion/MotionDiv";
import { Box, Container, Typography } from "@mui/material"
import { ReactNode } from "react";
import { MdChevronRight } from "react-icons/md";
import NewForm from "./_component/NewForm";

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
        backgroundImage: `url(${"/asset/img/news/hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}>
        <AnimUp>
          <Box display="flex" alignItems="center">
            <Box display="flex" className="border-b-2 border-white md:ms-16">
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">HOME PAGE</Typography>
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">NEWS</Typography>
            </Box>
          </Box>
          <Typography variant="h3" className="italic trilong text-white mt-4 md:ms-16">Internal</Typography>
          <Typography variant="h3" className="font-bold text-white mt-4 md:ms-16">NEWS</Typography>
        </AnimUp>
      </Box>
      <Container>
        <AnimUp>
          <NewForm />
        </AnimUp>
      </Container>
    </>
  )
}

export default page