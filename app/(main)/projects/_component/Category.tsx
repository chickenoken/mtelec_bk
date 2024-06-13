"use client"
import { getAllCateProj } from "@app/user/categories/_server/FormCateProjectAction";
import { getAllCate } from "@app/user/categories/_server/TableCategoriesAction";
import { Box, Button, Card, CardActionArea, CardContent, Divider, ImageListItem, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import Slider from "react-slick";
import { getAllCateProjNoId } from "../_server/Category.Action";
import React from 'react';

const settings = {
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props : any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '500px', 
        background: 'var(--Green-Gradient, linear-gradient(266deg, #00B6D7 -6.05%, #4ABEA6 26.45%, #33AF4A 80.61%))', 
        width: '45px', 
        height: '45px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <svg fill="white" width="20" height="24" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}>
        <path d="M0 12l24-12v24z"/>
      </svg>
    </div>
  );
}

function SamplePrevArrow(props : any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '500px', 
        background: 'var(--Green-Gradient, linear-gradient(266deg, #00B6D7 -6.05%, #4ABEA6 26.45%, #33AF4A 80.61%))', 
        width: '45px', 
        height: '45px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <svg fill="white" width="20" height="24" viewBox="0 0 24 24">
        <path d="M0 12l24-12v24z"/>
      </svg>
    </div>
    
  );
}

const Category = () => {
  const [cate, setCate] = useState<any[]>([]);
  const [catePrj, setCatePrj] = useState<any[]>([]);
  const [cateAll, setCateAll] = useState<any[]>([]);
  
  const init = async () => {
    const cate = await getAllCate();
    setCate(cate);
    getAllCateDetail();
  }

  const handleChangeCate = async (item: any) => {
    let data = {cate_id: item}
    let rs = await getAllCateProj(data);
    if(rs){
      rs.forEach((element: any) => {
        element.detail = element.detail.split('\n').filter((field: string) => field.trim() !== '');
      });
      setCatePrj(rs);
    }
  }

  const getAllCateDetail = async () => {
    let rs = await getAllCateProjNoId();
    if(rs){
      rs.forEach((element: any) => {
        element.detail = element.detail.split('\n').filter((field: string) => field.trim() !== '');
      });
      setCateAll(rs);
      setCatePrj(rs);
    }
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <>
      <Box sx={{
        height: "82vh", 
        backgroundImage: `url(${"/asset/img/projects/catotegry_hero.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '40px'
      }}></Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: 4 }}>
        <Slider {...settings}>
          <Card className=" h-50" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardActionArea sx={{ flexGrow: 1, height: '250px' }} onClick={() => {getAllCateDetail()}}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h6" className="text-center font-bold my-2">ALL CATEGORIES</Typography>
                <Image className="my-2" src="/asset/img/projects/catotegry_all.png" alt="catotegry_all.png" width={100} height={100} />
                <Typography variant="body2" className="text-center txt-mte my-2">{cateAll.length} projects</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {cate.map((item) => (
            <Card className=" h-50" key={item._id} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardActionArea sx={{ flexGrow: 1, height: '250px' }} onClick={() => {handleChangeCate(item._id)}}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h6" className="text-center font-bold my-2">{item.cate_name}</Typography>
                  {item.image && <Image className="my-2" src={item.image} alt={item.cate_name} width={100} height={100} />}
                  <Typography variant="body2" className="text-center txt-mte my-2">{item.project_detail_num} projects</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </Box>
      <Box>
        <Button className="h-16 px-8 py-5 bg-mte text-white text-xl font-bold my-4" fullWidth variant="text">All Projects</Button>
      </Box>
      <Box className="max-h-[600px] overflow-y-auto overflow-x-hidden">
        <Grid container spacing={5} className="mt-4">
          {catePrj.map((item, index) => (
            <Box className="w-1/2 mb-10">
              <Box className="h-full" display="flex">
              <Box className="w-1/3 ms-6">
                <Button className="bg-mte text-white px-5" variant="text">{item.cate_title}</Button>
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{justifyContent: 'center'}}>
                      <MdOutlineLocationOn size="1.5rem" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant="body1" sx={{ fontWeight: 700 }}>{item.location}</Typography>}/>
                  </ListItem>
                </List>
                <Typography variant="h6" className="ms-2 txt-mte flex items-center">{item.cate_pro_name}</Typography>
              </Box>
              <Box className="w-2/3" >
                {item.detail.map((item: any, index: number) => (
                  <ListItem alignItems="flex-start" key={index} sx={{ padding: '0', margin: '0' }}>
                    <ListItemIcon sx={{ minWidth: '30px', ml: item.endsWith(':') ? 0 : 2  }}>
                      {item.endsWith(':') ? '' : <BsDot />}
                    </ListItemIcon>
                    <ListItemText primary={item.endsWith(':') ? item.slice(0, -1) : item} 
                        primaryTypographyProps={{ fontWeight: item.endsWith(':') ? 'bold' : 'normal' }} />
                  </ListItem>
                ))}
              </Box>
              </Box>
              {index < catePrj.length - 1 && <Divider className="bg-mte mt-5" />}
            </Box>
          ))}
        </Grid>
      </Box>

    </>
  )
}

export default Category