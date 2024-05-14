"use client"
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ReactNode, useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { format } from "date-fns";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import { MotionDiv } from "@components/motion/MotionDiv";
import { getNewById } from "@app/user/news/_server/FormNewsAction";
import { getAllNewFile } from "@app/user/news/_server/FormNewFileAction";
import { getNewOtherDetail } from "../../_server/NewsAction";

interface MainNew {
  file: string;
  type: string;
  title: string;
  dateUp: string;
  content: string;
}

const page = ({ params }: { params: { id: string } }) => {
  const [news, setNews] = useState<MainNew | null>(null);
  const [newFile, setNewFile] = useState<any[] | null>(null);
  const [other, setOther] = useState<any[] | null>([]);
  const [itemsToShow, setItemsToShow] = useState(3);

  const handleViewMore = () => {
    setItemsToShow(itemsToShow + 3);
  };

  const init = async () => {
    const ne = await getNewById(params.id);
    if(ne) setNews(ne);

    const nf = await getAllNewFile({id_news: params.id});
    if(nf) setNewFile(nf);

    const no = await getNewOtherDetail({id: params.id});
    if(no) setOther(no);
  }

  useEffect(() => {
    init();
  }, [])

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
        backgroundImage: `url(${"/asset/img/news/detail/hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}>
        <Box display="flex" alignItems="center">
          <Box display="flex" className="border-b-2 border-black md:ms-16">
            <MdChevronRight size="2rem" className="me-2" color="black"/>
            <Typography variant="overline"  className="text-black me-2 text-lg">HOME PAGE</Typography>
            <MdChevronRight size="2rem" className="me-2" color="black"/>
            <Typography variant="overline"  className="text-black me-2 text-lg">NEWS</Typography>
          </Box>
        </Box>
        <Typography variant="h3" className="font-bold txt-mte mt-4 md:ms-16">{news?.title}</Typography>
      </Box>
      <Container maxWidth={false}>
        <Grid container spacing={5} className="mt-4">
          <Grid md={9}>
            <Box className="p-8" sx={{ backgroundImage: `url('/asset/img/about/bg_1.png')`, backgroundSize: 'cover'}}>
              <Typography variant="h6" className="font-bold mb-2">{news?.content}</Typography>
            </Box>
            <Box className="mt-4">
              {newFile?.map((item, index) => (
                <Card className="mb-4" key={index}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="20"
                      sx={{ objectFit: 'contain', width: '100%', height: '100%' }}
                      image={item.file}
                      alt="green iguana"
                      />
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Grid>
          <Grid md={3}>
            <Typography variant="h6" className="font-bold mb-2 txt-mte">All News</Typography>
              {other && other.slice(0, itemsToShow).map((n: any) => (
                <Card elevation={10} key={n._id} className="mb-4">
                  <Link href={`/news/detail/${n._id}`}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={n.file}
                        alt="green iguana"
                      />
                      <CardContent>
                      <Typography variant="body2" className="bg-mte text-white" 
                          sx={{ 
                            display: 'inline-block',
                            backgroundColor: 'lightgray',
                            padding: '10px 20px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            '&:hover': {
                              backgroundColor: 'darkgray',
                            },
                            marginBottom: '20px',
                          }}>
                          {n.type}
                        </Typography>
                        <Typography variant="h4" className="txt-mte font-bold mb-2">{n.title}</Typography>
                        <Box display="flex">
                          <FaRegCalendar />
                          <Typography variant="body2" className="ms-2">{n.dateUp && format(new Date(n.dateUp), 'yyyy/MM/dd')}</Typography>
                        </Box>
                        <Divider className='my-2'/>
                        <Typography variant="body2" className="mb-4 truncate-3">{n.content}</Typography>
                        <Typography variant="body2" className="txt-mte">View Details</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              ))}
            {other && itemsToShow < other.length && 
              <Box className="my-10">
                <Button onClick={handleViewMore} className="h-16 px-8 py-5 mte-grey text-black text-xl font-bold mt-2" fullWidth variant="text">View More</Button>
              </Box>
            }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default page