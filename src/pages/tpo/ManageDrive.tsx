
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import useAxiosPrivate from '../../utils/axiosPrivate';
import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

type DriveData = {
    _id: string;
    company_id: string;
    company_name: string;
    company_website: string;
    job_title: string;
    job_ctc: string;
}

const ManageDrive = () => {
    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["getDrives"], queryFn: async (): Promise<DriveData[]> =>
            api.get('/tpo/getdrives').then(res => res.data).catch(e => { console.log(e) })
    })

    if (result.isLoading) return (<>Loading...</>)
    return (
        <Box>
            <Typography textAlign={'center'}>Ongoing Drives</Typography>

            <Box sx={{
                boxSizing: 'border-box',
                display: 'flex',
                columnGap: '5px',
                flexDirection: 'row',
                flexWrap: 'wrap'

            }}>
                {

                    // result.isSuccess && JSON.stringify(result.data)
                    result.isSuccess && result.data.map((driveData) => {
                        return (
                            <Card sx={{ maxWidth: 345, minWidth: 140, backgroundColor: "lightblue" }} id={driveData._id} key={`${driveData._id}`}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
                                        {driveData.company_name}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        <Link to={driveData.company_website} target='_blank'>Visit Company Website</Link>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={'./drive'}>
                                        <Button sx={{}} variant='outlined'>

                                        </Button>

                                    </Link>
                                </CardActions>
                            </Card>
                        )
                    })
                }
            </Box>

        </Box>
    )
}

export default ManageDrive;