import { Box, ImageListItem, ImageListItemBar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Image from 'next/image'
import React from 'react'

interface Mode {
  title: string;
  path: string;
}

interface Props {
  itemData: Mode[];
  grid: number;
}

const ImageLinks = ({ itemData, grid }: Props) => {
  return (
    <Box>
      <Grid container spacing={5}>
        {itemData.map((item, index) => (
          <Grid md={grid} key={index}>
            <ImageListItem key={item.title} sx={{height : '100% !important', width : '100% !important'}}>
              <Image className="w-full h-full object-cover" src={item.path} alt={item.title} loading="lazy" width={400} height={400}/>
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ImageLinks