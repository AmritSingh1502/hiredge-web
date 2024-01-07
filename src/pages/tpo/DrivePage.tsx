

import { Box, Grid, Typography, Button } from '@mui/material';

import { useQuery } from '@tanstack/react-query';

import useAxiosPrivate from '../../utils/axiosPrivate';
import { useSearchParams } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';


const DrivePage = () => {

    const [searchParams, _] = useSearchParams();
    const api = useAxiosPrivate();
    const result = useQuery({
        queryKey: ['fetchDrive'],
        queryFn: async (): Promise<DriveData> => (
            api.get('/tpo/drive', {
                params: {
                    id: searchParams.get('id')
                }
            }).then(res => res.data)
        )
    })


    if (result.isLoading)
        return (<>Loading....</>)

    return (

        <Box width={"100%"} height={'100vh'}>

            <Box width={'100%'} height={'100vh'}>

                <Grid container sx={{
                    border: '1px solid black',
                    width: '100%',
                    height: '80vh'
                }}>
                    <Grid item xs={6} sx={{
                        padding: '2px',
                        border: '1px solid black'
                    }}>
                        <Typography >Company Name: {result.data?.company_details.company_name}</Typography>
                        <Typography>Company Website:<a href={result.data?.company_details.company_website} target='_blank' rel='noreferrer'> {result.data?.company_details.company_website}</a></Typography>

                        <Typography variant='h4'>Job Title: {result.data?.job_title}</Typography>
                        <Typography>CTC: {result.data?.job_ctc}</Typography>

                        <Typography variant='h6'>Job Description</Typography>

                        <Typography>{
                            result.data?.job_description
                        }</Typography>
                        <Typography>Job-Locations: {result.data?.job_location.join(', ')}</Typography>

                        <Button variant='outlined'
                            startIcon={<EditIcon />}
                            sx={{
                                marginTop: 6
                            }}
                            href={`./drive/managedrive?id=${result.data?._id}`}
                        >Manage Drive</Button>

                        <Button
                            variant='outlined'
                            href={`./drive/students?id=${result.data?._id}`}
                        >Student</Button>
                    </Grid>
                    <Grid item xs={6} sx={{
                    }}>
                        <iframe src="https://drive.google.com/file/d/1iwaEr4nGdzG-I1SwOsKU84lnw8er0Q99/preview" width="640" height="480" allow="autoplay" title='job-descrption'></iframe>                        </Grid>
                </Grid>

            </Box>

        </Box>

    )
}


export default DrivePage;