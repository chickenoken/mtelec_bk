import { Box, Grid, Paper } from "@mui/material"
import { Suspense } from "react"
import FormAutomation from "./_component/FormAutomation"

const page = () => {
  return (
    <>
      <Grid item xs={12} md={4} lg={3}>
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
          <Suspense>
            <Box className="mb-2">
              <FormAutomation />
            </Box>
          </Suspense>
        </Paper>
      </Grid>
    </>
  )
}

export default page