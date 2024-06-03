"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogService } from '@lib/DialogService';
import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaRegSave } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { z } from 'zod';

const FormAbout = () => {
  const fileImage = Array.from({ length: 14 }, () => useRef<HTMLInputElement>(null));
  const [imageSrc, setImageSrc] = useState<Array<string | null>>(Array.from({ length: 14 }, () => null));

  const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    type: z.string().min(1, 'Type is required'),
  });
  const { register, getValues, trigger, setValue, watch, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const handleSave = async () => {
    let valid = await trigger();
    if(!valid) return toast.warn('Validate Failed');

    DialogService.save("Do you want to save the changes ?", async () => {
      // let param = getValues();
      // let re = await savePCompanyInfo(param);
      // if(re.status === 200){
      //   DialogService.success('Your data has been saved', () => {});
      // }
    });
  }



  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: 2 }}>
        <Button onClick={handleSave} variant="contained" className="bg-blue-600" startIcon={<FaRegSave />}>Save</Button>
      </Box>
      <Typography  variant="h6" className='mb-2'>Our Company</Typography>

      <Box className="w-1/2 mb-2">
        <TextField error={Boolean(errors.title)} InputLabelProps={{ shrink: !!watch('title') }} required fullWidth variant="outlined" size="small" label="title" autoFocus {...register('title')}/>
        {/* @ts-ignore */}
        {errors.title && <Typography variant="caption" color={'red'}>{errors.title.message}</Typography>}
      </Box>
      <Box className="w-1/2 mb-2">
        <TextField error={Boolean(errors.content)} InputLabelProps={{ shrink: !!watch('content') }} required fullWidth multiline variant="outlined" size="small" label="content" autoFocus {...register('content')}/>
        {/* @ts-ignore */}
        {errors.content && <Typography variant="caption" color={'red'}>{errors.content.message}</Typography>}
      </Box>
      <Box className="w-1/2 mb-2">
        <TextField error={Boolean(errors.desc)} InputLabelProps={{ shrink: !!watch('desc') }} required fullWidth multiline variant="outlined" size="small" label="desc" autoFocus {...register('desc')}/>
        {/* @ts-ignore */}
        {errors.desc && <Typography variant="caption" color={'red'}>{errors.desc.message}</Typography>}
      </Box>

      <Grid container spacing={10}>
        <Grid md={6}>
         
        </Grid>
        <Grid md={6}>
          
        </Grid>
      </Grid>

    </>
  )
}

export default FormAbout