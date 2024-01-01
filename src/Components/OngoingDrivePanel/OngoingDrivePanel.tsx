
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from '../../utils/axiosPrivate';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useNavigate } from 'react-router-dom';

const OngoingDrivePanel = () => {

    const api = useAxiosPrivate();
    const navigate = useNavigate();
    const result = useQuery({
        queryKey: ["fetchOngoingDrives"],
        queryFn: (): Promise<DriveData[]> => (
            api.get('/getdrives').then((res) => res.data)
        )
    })

    if (result.isLoading)
        return (<>
            Loading...
        </>)
    return (<>
        Ongoing Drives
        <Stack>
            {

                result.isSuccess && result.data?.map((drive, index) => (
                    <Card sx={{
                        minWidth: '250px',
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: 2
                    }} key={index}>
                        <CardContent>
                            <Typography>{drive.company_name}</Typography>
                            <Typography>{drive.job_title}</Typography>
                            <Typography>{drive.job_ctc}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" onClick={() => {
                                navigate(`drive?id=${drive._id}`)
                            }}> Learn More</Button>
                        </CardActions>
                    </Card>
                ))


            }


        </Stack>


    </>);
}

export default OngoingDrivePanel;