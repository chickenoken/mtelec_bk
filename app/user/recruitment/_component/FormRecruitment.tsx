"use client"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import Link from "next/link"
import { useEffect } from "react"
import { FaRegSave } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { getRecruitById, saveRecruit } from "../_server/FormRecruitmentAction"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import { useRouter } from "next-nprogress-bar"

const schema = z.object({
  deadline: z.date().nullable(),
  quantity: z.string().min(4),
  title: z.string().min(4),
  workingTime: z.string().min(4),
  gender: z.string().min(4),
  workingForm: z.string().min(4),
  education: z.string().min(4),
  workingPlace: z.string().min(4),
  experience: z.string().min(4),
  salary: z.string().min(4),
  jobDescription: z.string().min(4),
  requirement: z.string().min(4),
  benefit: z.string().min(4),
  document: z.string().min(4),
  contactInformation: z.string().min(4),
  language: z.string().min(2),
});

const FormRecruitment = ({ params }: { params: { id: string|null, lang: string|null } }) => {
  const { register, watch, control, trigger, getValues, setValue, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const router = useRouter();

  const getDataById = async (param : any) =>{
    console.log(params);
    setValue('language', param.lang ? param.lang : 'en');
    if(params.id) {
      let rs = await getRecruitById(param);
      if(rs){
        console.log(rs);
      }
    }
  }

  useEffect(() => {
    getDataById(params);
  }, []);


  const handleSave = async () => {
    let valid = await trigger();
    if(!valid){
      return toast.warn('Validate Failed', {
        closeOnClick: true,
        draggable: true,
        theme: "colored",
      });
    }
    Swal.fire({
      title: "Do you want to save the changes ?",
      color: "#716add",
      confirmButtonText: "Save",
      showCancelButton: true,
      backdrop: `
        rgba(0,0,123,0.4)
        url("/nyan-cat-nyan.gif")
        top
        no-repeat
      `
    }).then(async (result) => {
      if (result.isConfirmed) {
        let param = getValues();
        let re = await saveRecruit(param);
        if(re.status === 200){
          Swal.fire({
            icon: "success",
            title: "Your data has been saved",
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            router.push('/user/recruitment');
          });
        }else{
          toast.error('Save fail', {
            closeOnClick: true,
            draggable: true,
            theme: "colored",
          });
        }
      }
    });
  }

  const handleUpdate = async () => {
    trigger();


    console.log('update');
  }

  const handleLanguage = (event: React.MouseEvent<HTMLElement>, newLanguage: string | null) => {
    console.log(newLanguage);
  }


  const language = watch('language');

  useEffect(() => {
    console.log(language);
  }, [language]);




  return (
    <>
      <Box component="form">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Link href="/user/recruitment"><Button variant="outlined" color="secondary" startIcon={<FaArrowLeft />}>Back</Button></Link>
            {!params.id && <Button onClick={handleSave} variant="contained" className="bg-blue-600" startIcon={<FaRegSave />}>Save</Button>}
            {params.id && <Button onClick={handleUpdate} variant="contained" className="bg-blue-600" startIcon={<FaRegSave />}>Update</Button>}
          </Box>
          <Box className="text-end">
            <ToggleButtonGroup
              color="warning"
              value={language}
              exclusive
              aria-label="text alignment"
              {...register('language')}
            >
              <ToggleButton value="en" aria-label="left aligned">En</ToggleButton>
              <ToggleButton value="vi" aria-label="left aligned">Vi</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          <Box display="flex" gap="10px" className="mb-2">
            <Controller
                name="deadline"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    label="Complete Time"
                    className="w-44 mb-2"
                    slotProps={{ 
                      textField: { 
                        size: 'small',
                        error: Boolean(errors.deadline) 
                      } 
                    }}
                    value={value ? new Date(value) : null}
                    onChange={onChange}
                    />
                )}
              />
            <Box display="flex" flexDirection="column">
              <TextField error={Boolean(errors.quantity)} {...register('quantity')} label="quantity" variant="outlined" size="small"/>
              {/* @ts-ignore */}
              {errors.quantity && <Typography variant="caption" color={'red'}>{errors.quantity?.message}</Typography>}
            </Box>
          </Box>

          <Typography variant="h6" className="mb-2">Main Description</Typography>

          <Grid container spacing={2} className="mb-2">
            <Grid xs={5}>
              <TextField error={Boolean(errors.title)} {...register('title')} label="Occupation" variant="outlined" size="small" className="w-full"/>
              {/* @ts-ignore */}
              {errors.title && <Typography variant="caption" color={'red'}>{errors.title?.message}</Typography>}
            </Grid>
            <Grid xs={5}>
              <TextField error={Boolean(errors.workingTime)} {...register('workingTime')} label="Working time" variant="outlined" size="small" className="w-full"/>
              {/* @ts-ignore */}
              {errors.workingTime && <Typography variant="caption" color={'red'}>{errors.workingTime?.message}</Typography>}
            </Grid>
            <Grid xs={5}>
            <FormControl fullWidth size="small">
              <InputLabel id="gender">Gender</InputLabel>


              <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select 
                    {...field}
                    error={Boolean(errors.gender)}
                    labelId="gender" 
                    label="gender"
                  >
                    <MenuItem></MenuItem>
                    {language === 'en' && <MenuItem value='male'>male</MenuItem>}
                    {language === 'en' && <MenuItem value='female'>female</MenuItem>}
                    {language === 'vi' && <MenuItem value='male'>nam</MenuItem>}
                    {language === 'vi' && <MenuItem value='female'>nữ</MenuItem>}
                  </Select>
                )}
              />


              {/* <Select error={Boolean(errors.gender)} {...register('gender')} labelId="gender" label="gender">
                <MenuItem></MenuItem>
                {language === 'en' && <MenuItem value='male'>male</MenuItem>}
                {language === 'en' && <MenuItem value='female'>female</MenuItem>}
                {language === 'vi' && <MenuItem value='male'>nam</MenuItem>}
                {language === 'vi' && <MenuItem value='female'>nữ</MenuItem>}
              </Select> */}
              {/* @ts-ignore */}
              {errors.gender && <Typography variant="caption" color={'red'}>{errors.gender?.message}</Typography>}
            </FormControl>
            </Grid>
            <Grid xs={5}>
              <TextField error={Boolean(errors.workingForm)} {...register('workingForm')} label="Working form" variant="outlined" size="small" className="w-full"/>
              {/* @ts-ignore */}
              {errors.workingForm && <Typography variant="caption" color={'red'}>{errors.workingForm?.message}</Typography>}
            </Grid>
            <Grid xs={5}>
              <TextField error={Boolean(errors.education)} {...register('education')} label="Education" variant="outlined" size="small" className="w-full"/>
              {/* @ts-ignore */}
              {errors.education && <Typography variant="caption" color={'red'}>{errors.education?.message}</Typography>}
            </Grid>
            <Grid xs={5}>
              <TextField error={Boolean(errors.workingPlace)} {...register('workingPlace')} label="Working place" variant="outlined" size="small" className="w-full"/>
              {/* @ts-ignore */}
              {errors.workingPlace && <Typography variant="caption" color={'red'}>{errors.workingPlace?.message}</Typography>}
            </Grid>
            <Grid xs={5}>
              <TextField error={Boolean(errors.experience)} {...register('experience')} label="Experience" variant="outlined" size="small" className="w-full"/>
              {/* @ts-ignore */}
              {errors.experience && <Typography variant="caption" color={'red'}>{errors.experience?.message}</Typography>}
            </Grid>
            <Grid xs={5}>
              <TextField error={Boolean(errors.salary)} {...register('salary')} label="Salary" variant="outlined" size="small" className="w-full"/>
              {/* @ts-ignore */}
              {errors.salary && <Typography variant="caption" color={'red'}>{errors.salary?.message}</Typography>}
            </Grid>
          </Grid>

          <Typography variant="h6">Job description</Typography>
          <TextField error={Boolean(errors.jobDescription)} {...register('jobDescription')} label="Job description" variant="outlined" size="small" className="w-full" multiline />
          {/* @ts-ignore */}
          {errors.jobDescription && <Typography variant="caption" color={'red'}>{errors.jobDescription?.message}</Typography>}

          <Typography variant="h6">Requirement</Typography>
          <TextField error={Boolean(errors.requirement)} {...register('requirement')} label="Requirement" variant="outlined" size="small" className="w-full" multiline />
          {/* @ts-ignore */}
          {errors.requirement && <Typography variant="caption" color={'red'}>{errors.requirement?.message}</Typography>}

          <Typography variant="h6">Benefits</Typography>
          <TextField error={Boolean(errors.benefit)} {...register('benefit')} label="Benefits" variant="outlined" size="small" className="w-full" multiline />
          {/* @ts-ignore */}
          {errors.benefit && <Typography variant="caption" color={'red'}>{errors.benefit?.message}</Typography>}
          
          <Typography variant="h6">Documents</Typography>
          <TextField error={Boolean(errors.document)} {...register('document')} label="Documents" variant="outlined" size="small" className="w-full" multiline />
          {/* @ts-ignore */}
          {errors.document && <Typography variant="caption" color={'red'}>{errors.document?.message}</Typography>}

          <Typography variant="h6">Contact Information</Typography>
          <TextField error={Boolean(errors.contactInformation)} {...register('contactInformation')} label="Contact Information" variant="outlined" size="small" className="w-full" multiline />
          {/* @ts-ignore */}
          {errors.contactInformation && <Typography variant="caption" color={'red'}>{errors.contactInformation?.message}</Typography>}

        </LocalizationProvider>
      </Box>
    </>
  )
}

export default FormRecruitment