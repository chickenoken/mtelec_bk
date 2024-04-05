"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { login } from './LoginAction';

const schema = z.object({
  username: z.string().min(4),
  password: z.string().min(4),
});
const FormLogin = () => {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const subLogin = async (data: any) => {
    const result = await login(data);
  }

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(subLogin)} noValidate sx={{ mt: 1 }}>
        <TextField margin="normal" required fullWidth label="User Name" autoFocus {...register('username')}/>
        {/* @ts-ignore */}
        {errors.username && <Typography variant="caption" color={'red'}>{errors.username?.message}</Typography>}
        <TextField margin="normal" required fullWidth label="Password" type="password" id="password" autoComplete="current-password" {...register('password')} />
        {/* @ts-ignore */}
        {errors.password && <Typography variant="caption" color={'red'}>{errors.password.message}</Typography>}
        <Button type="submit" fullWidth color="secondary" variant="outlined" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
      </Box>
    </>
  )
}

export default FormLogin