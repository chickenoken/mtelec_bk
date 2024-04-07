"use client"
import { Box, Container, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { ReactNode, useEffect, useState } from "react";
import { FaRegClock, FaRegUser } from "react-icons/fa";
import { format } from "date-fns";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { BsDot } from "react-icons/bs";
import { MotionDiv } from "@components/motion/MotionDiv";
import { MdChevronRight } from "react-icons/md";
import { getRecruitById } from "@app/user/recruitment/_server/FormRecruitmentAction";
import FormApplyRecruit from "../../../_component/FormApplyRecruit";

const page = ({ params }: { params: { id: string, lang: string } }) => {
  const [lang, setLang] = useState<string>(params.lang);
  const [recruitment, setRecruitment] = useState<any>();
  const [mode, setMode] = useState<number>(0);
  const [title, setTitle] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [education, setEducation] = useState<string>();
  const [experience, setExperience] = useState<string>();
  const [workTime, setWorkTime] = useState<string>();
  const [workForm, setWorkForm] = useState<string>();
  const [workPlace, setWorkPlace] = useState<string>();
  const [salary, setSalary] = useState<string>();
  const [jobDescription, setJobDescription] = useState<string[] | undefined>();
  const [requirement, setRequirement] = useState<string[] | undefined>();
  const [benefit, setBenefit] = useState<string[] | undefined>();
  const [document, seDocument] = useState<string[] | undefined>();
  const [contact, setContact] = useState<string[] | undefined>();

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

  function formatArea(txt: string): string[] {
    return txt.split('\n').map((line: string) => line.replace(/<p>|<\/p>/g, ''));
  }

  const init = async () => {
    let data = {
      id: params.id
    }
    let rs = await getRecruitById(data);
    if(rs){
      if(rs.length < 2) rs = rs.concat(rs);
      setRecruitment(data);
      let mode = params.lang == 'en' ? 0 : 1;
      setMode(mode);
      setTitle(rs[mode].title);
      setGender(rs[mode].gender);
      setEducation(rs[mode].education);
      setExperience(rs[mode].experience);
      setWorkTime(rs[mode].work_time);
      setWorkForm(rs[mode].work_form);
      setWorkPlace(rs[mode].work_place);
      setSalary(rs[mode].salary);
      setJobDescription(formatArea(rs[mode].job_description));
      setRequirement(formatArea(rs[mode].requirement));
      setBenefit(formatArea(rs[mode].benefit));
      seDocument(formatArea(rs[mode].document));
      setContact(formatArea(rs[mode].contact));
    }
  }

  const handleLanguage = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null,) => {
    if (newAlignment === null) return;
    setLang(newAlignment);
    let mode = newAlignment == 'en' ? 0 : 1;
    setMode(mode);
    setTitle(recruitment[mode].title);
    setGender(recruitment[mode].gender);
    setEducation(recruitment[mode].education);
    setExperience(recruitment[mode].experience);
    setWorkTime(recruitment[mode].work_time);
    setWorkForm(recruitment[mode].work_form);
    setWorkPlace(recruitment[mode].work_place);
    setSalary(recruitment[mode].salary);
    setJobDescription(formatArea(recruitment[mode].job_description));
    setRequirement(formatArea(recruitment[mode].requirement));
    setBenefit(formatArea(recruitment[mode].benefit));
    seDocument(formatArea(recruitment[mode].document));
    setContact(formatArea(recruitment[mode].contact));
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <>
      <Box display="flex" alignItems="center" sx={{
        height: { xs: '400px', sm: '400px' }, 
        backgroundImage: `url(${"/asset/img/about/recruitment/detail/hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}>
        <AnimUp>
          <Box display="flex" alignItems="center">
            <Box display="flex" className="border-b-2 md:ms-16">
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">HOME PAGE</Typography>
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">ABOUT US</Typography>
              <MdChevronRight size="2rem" className="me-2" color="white"/>
              <Typography variant="overline"  className="text-white me-2 text-lg">RECRUITMENT</Typography>
            </Box>
          </Box>
          <Typography variant="h3" className="trilong text-white mt-4 md:ms-16">Recruiting Position</Typography>
          <Typography variant="h3" className="font-bold text-white mt-4 md:ms-16">QUẢN LÝ DỰ ÁN/</Typography>
          <Typography variant="h3" className="font-bold text-white mt-4 md:ms-16">PROJECT MANAGER</Typography>
        
        </AnimUp>
      </Box>
      <Container>
        <AnimUp>
        <Box display="flex" alignItems="center" justifyContent="space-between" className="mt-10">
          <Typography variant="h5" component="div" className="txt-mte font-bold">
            Job Description
          </Typography>
          <Box className="text-end">
            <ToggleButtonGroup
              value={lang}
              exclusive
              onChange={handleLanguage}
              aria-label="text alignment"
            >
              <ToggleButton value="en" aria-label="left aligned" className={lang === 'en' ? 'bg2-mte font-bold' : ''} style={lang === 'en' ? { color: 'white' } : {}}>English</ToggleButton>
              <ToggleButton value="vi" aria-label="left aligned" className={lang === 'vi' ? 'bg2-mte font-bold' : ''} style={lang === 'vi' ? { color: 'white' } : {}}>Tiếng Việt</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" className="my-2">
          <Box display="flex" alignItems="center">
            <FaRegClock style={{ color: '#33AF4A' }} />
            <Typography variant="body2" className="ms-2 font-bold">
              {mode == 0 ? 'Application Deadline:' : 'Hạn Nộp Hồ Sơ:'}
            </Typography>
            <Typography variant="body2" className="ms-2">
              {recruitment?.[mode]?.deadline && !isNaN(new Date(recruitment[mode].deadline).getTime()) ? format(recruitment[mode].deadline, 'yyyy/MM/dd') : 'N/A'}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" className="ms-16">
            <FaRegUser style={{ color: '#33AF4A' }} />
            <Typography variant="body2" className="ms-2 font-bold">
              {mode == 0 ? 'Quantity:' : 'Số Lượng:'}
            </Typography>
            <Typography variant="body2" className="ms-2">
              {recruitment?.[mode]?.quantity}
            </Typography>
          </Box>
        </Box>
        </AnimUp>
        <AnimUp>
        <Box className="mt-10 p-4" sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: 'cover'}}>
          <Grid container spacing={5}>
            <Grid md={6}>
              <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0'}}>
                <Box sx={{ flexBasis: '30%' }}>
                  <ListItemText className="txt-mte"
                    primary={<Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {mode == 0 ? 'Occupation:' : 'Ngành nghề:'}
                    </Typography>}/>
                </Box>
                <ListItemText primary={title} />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0'}}>
                <Box sx={{ flexBasis: '30%' }}>
                  <ListItemText className="txt-mte"
                    primary={<Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {mode == 0 ? 'Gender:' : 'Giới tính:'}
                      </Typography>}/>
                </Box>
                <ListItemText primary={gender} />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0'}}>
                <Box sx={{ flexBasis: '30%' }}>
                  <ListItemText className="txt-mte"
                    primary={<Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {mode == 0 ? 'Education:' : 'Trình độ:'}
                      </Typography>}/>
                </Box>
                <ListItemText primary={education} />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0'}}>
                <Box sx={{ flexBasis: '30%' }}>
                  <ListItemText className="txt-mte"
                    primary={<Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {mode == 0 ? 'Experience:' : 'Kinh nghiệm:'}
                      </Typography>}/>
                </Box>
                <ListItemText primary={experience} />
              </ListItem>
            </Grid>
            <Grid md={6}>
              <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0'}}>
                <Box sx={{ flexBasis: '30%' }}>
                  <ListItemText className="txt-mte"
                    primary={<Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {mode == 0 ? 'Working time:' : 'Tính chất công việc:'}
                      </Typography>}/>
                </Box>
                <ListItemText primary={workTime} />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0'}}>
                <Box sx={{ flexBasis: '30%' }}>
                  <ListItemText className="txt-mte"
                    primary={<Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {mode == 0 ? 'Working form:' : 'Hình thức làm việc:'}
                      </Typography>}/>
                </Box>
                <ListItemText primary={workForm} />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0'}}>
                <Box sx={{ width: '30%' }}>
                  <ListItemText className="txt-mte"
                    primary={<Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {mode == 0 ? 'Working place:' : 'Địa điểm làm việc:'}
                      </Typography>}/>
                </Box>
                <ListItemText primary={workPlace} />
              </ListItem>
              <ListItem alignItems="flex-start" sx={{ padding: '0', margin: '0'}}>
                <Box sx={{ flexBasis: '30%' }}>
                  <ListItemText className="txt-mte"
                    primary={<Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {mode == 0 ? 'Salary:' : 'Mức lương:'}
                      </Typography>}/>
                </Box>
                <ListItemText primary={salary} />
              </ListItem>
            </Grid>
          </Grid>
        </Box>
        </AnimUp>
        <AnimUp>
        <TableContainer sx={{ border: '2px solid #33AF4A' }} className="mt-10">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="txt-mte font-bold text-lg" sx={{width: '20%', borderRight: '2px solid #33AF4A'}} component="th" scope="row">
                  {mode == 0 ? 'Job description:' : 'Mô Tả Công Việc:'}
                  </TableCell>
                <TableCell sx={{width: '80%'}} align="right">
                  {jobDescription ? jobDescription.map((val: any, ind: number) => (
                    <ListItem alignItems="flex-start" key={ind} sx={{ padding: '0', margin: '0' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <BsDot />
                      </ListItemIcon>
                      <ListItemText primary={val} />
                    </ListItem>
                  )) : null}
                </TableCell>
              </TableRow>
              <TableRow sx={{width: '20%', borderTop: '2px solid #33AF4A'}}>
                <TableCell className="txt-mte font-bold text-lg" sx={{width: '20%', borderRight: '2px solid #33AF4A'}} component="th" scope="row">
                  {mode == 0 ? 'Requirement:' : 'Yêu cầu:'}
                  </TableCell>
                <TableCell sx={{width: '80%'}} align="right">
                  {requirement ? requirement.map((val: any, ind: number) => (
                    <ListItem alignItems="flex-start" key={ind} sx={{ padding: '0', margin: '0' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <BsDot />
                      </ListItemIcon>
                      <ListItemText primary={val} />
                    </ListItem>
                  )) : null}
                </TableCell>
              </TableRow>
              <TableRow sx={{width: '20%', borderTop: '2px solid #33AF4A'}}>
                <TableCell className="txt-mte font-bold text-lg" sx={{width: '20%', borderRight: '2px solid #33AF4A'}} component="th" scope="row">
                  {mode == 0 ? 'Benefits:' : 'Quyền Lợi:'}
                  </TableCell>
                <TableCell sx={{width: '80%'}} align="right">
                  {benefit ? benefit.map((val: any, ind: number) => (
                    <ListItem alignItems="flex-start" key={ind} sx={{ padding: '0', margin: '0' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <BsDot />
                      </ListItemIcon>
                      <ListItemText primary={val} />
                    </ListItem>
                  )) : null}
                </TableCell>
              </TableRow>
              <TableRow sx={{width: '20%', borderTop: '2px solid #33AF4A'}}>
                <TableCell className="txt-mte font-bold text-lg" sx={{width: '20%', borderRight: '2px solid #33AF4A'}} component="th" scope="row">
                  {mode == 0 ? 'Documents:' : 'Hồ Sơ:'}
                </TableCell>
                <TableCell sx={{width: '80%'}} align="right">
                  {document ? document.map((val: any, ind: number) => (
                    <ListItem alignItems="flex-start" key={ind} sx={{ padding: '0', margin: '0' }}>
                      <ListItemIcon sx={{ minWidth: '30px' }}>
                        <BsDot />
                      </ListItemIcon>
                      <ListItemText primary={val} />
                    </ListItem>
                  )) : null}
                </TableCell>
              </TableRow>
              <TableRow sx={{width: '20%', borderTop: '2px solid #33AF4A'}}>
                <TableCell className="txt-mte font-bold text-lg" sx={{width: '20%', borderRight: '2px solid #33AF4A'}} component="th" scope="row">
                  {mode == 0 ? 'Contact Information:' : 'Thông Tin Liên Hệ:'}
                </TableCell>
                <TableCell sx={{width: '80%'}}>
                  {contact ? contact.map((val: any, ind: number) => (
                    <Typography variant="body2" key={ind} className="font-bold">
                      {val}
                    </Typography>
                  )) : null}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </AnimUp>
        <AnimUp>
          <Box className="mt-5">
            <FormApplyRecruit />
          </Box>
        </AnimUp>
      </Container>
    </>
  )
}

export default page