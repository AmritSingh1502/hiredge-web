
import { Box, Card, Typography, CardContent, Stack, CardActions, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../utils/axiosPrivate";
import PrevYearCompanies from "../../common/PrevYearCompanies/PrevYearCompanies";


const StudentDashboard = () => {

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ['studentDashboard'],
        queryFn: async (): Promise<StudentDashboardType> => (
            api.get('/student/home').then((res) => (res.data))
        )
    })

    return (<>

        {/* <Typography> DashBoard</Typography> */}

        {result.isSuccess
            ? (
                <Box sx={{
                    // border: '2px solid black',
                    width: "100%",
                    height: '100vh',
                    boxSizing: 'border-box',
                    display: 'grid',
                    gridTemplateColumns: "20% 60% 20%",
                    gridTemplateRows: "repeat(10, 10%)",
                    padding: "4px"
                }}>
                    <Card variant="outlined" sx={{
                        // border: '2px solid black',
                        gridRow: "1 / 3",
                        gridColumn: "1 / 2",
                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        borderRadius: 8
                    }}>
                        <CardContent>
                            <Typography variant="h5" fontFamily={'sans-serif'} sx={{
                                // border: '2px solid black',
                            }}>Previous Year Placement</Typography>
                            <Typography textAlign={'center'} fontSize={40}>{result.data?.prevYearOffers.total}</Typography>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={{
                        // border: '2px solid black',
                        gridRow: "1 / 3",
                        gridColumn: "3 / 4",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: 8
                    }}>
                        <CardContent>
                            <Typography variant="h5" sx={{
                                // border: '2px solid black',
                            }}>No of Offers Till Now</Typography>
                            <Typography textAlign={'center'} fontSize={40}>{result.data.currYearOffers.total}</Typography>
                        </CardContent>
                    </Card>

                    <Box>
                        <Typography textAlign={'center'}>Ongoing Drives</Typography>
                        <Stack direction={'row'} flex={1} height={150} columnGap={2} marginX={2}>

                            {
                                result.data.currentStatus.map((drive, index) => (
                                    <Card sx={{
                                        minWidth: '250px',
                                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                                        borderRadius: 2
                                    }}>
                                        <CardContent>
                                            <Typography>{drive.companyDetails.company_name}</Typography>
                                            <Typography>{drive.job_title}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="outlined"> Learn More</Button>
                                        </CardActions>
                                    </Card>
                                ))
                            }
                        </Stack>
                    </Box>

                    <Box
                        sx={{
                            gridRow: '3 / 9',

                            border: '1px solid black'
                        }}>
                        <PrevYearCompanies />
                    </Box>

                    <Box sx={{
                        gridRow: '3 / 9',
                        gridColumn: '3 / 4',
                        border: '1px solid black'
                    }}></Box>

                </Box>) : (<></>)}
    </>);
}

export default StudentDashboard;