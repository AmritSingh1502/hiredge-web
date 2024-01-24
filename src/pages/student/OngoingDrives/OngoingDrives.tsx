
import { Box, Card, CardContent, Typography, CardActions, Button, Pagination } from '@mui/material';

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
// import useAutocomplete from '@mui/material';
import useAxiosPrivate from '../../../utils/axiosPrivate';



const OngoingDrive = () => {
    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ['fetchOngoingDrives'],
        queryFn: (): Promise<DriveCardData[]> =>
            api.get('/student/getdrives').then(res => res.data).catch(e => { console.log(e) })
    })



    return (
        <>  {result.isSuccess &&
            (<><Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                rowGap: 2,
                columnGap: 2
            }}>
                {
                    result.data.map((driveData) => (
                        <Card sx={{ maxWidth: 345, minWidth: 140, backgroundColor: "lightblue" }} id={driveData._id} key={`${driveData._id}`}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
                                    {driveData.company_name || ""}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    <Link to={driveData.company_website} target='_blank'>Visit Company Website</Link>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={{
                                    pathname: './../drive',
                                    search: `?id=${driveData._id}`,
                                }} >
                                    <Button sx={{}} variant='outlined'>
                                        Learn More
                                    </Button>

                                </Link>
                            </CardActions>
                        </Card>
                    ))
                }
            </Box>
                <Pagination count={Math.floor(result.data?.length / 10) + 1} page={1} />
            </>
            )
        }
        </>
    );
}


export default OngoingDrive;