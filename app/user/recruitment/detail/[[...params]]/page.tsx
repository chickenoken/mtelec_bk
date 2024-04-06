import { Grid, Paper } from "@mui/material"
import { Suspense } from "react"
import FormRecruitment from "../../_component/FormRecruitment"

const page = ({ params }: { params: { id: string|null, lang: string|null } }) => {

  return (
    <>
      <Grid item xs={12} md={4} lg={3}>
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
          <Suspense>
            <FormRecruitment params={{ id: params.id, lang: params.lang }} />
          </Suspense>
        </Paper>
      </Grid>
    </>
  )
}

export default page