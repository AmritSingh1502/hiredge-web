import { Box, Typography, Button } from "@mui/material"
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import useAxiosPrivate from "../../../utils/axiosPrivate";

const Drive = () => {

    const [searchParams, _] = useSearchParams();
    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ['fetchDrive', searchParams.get('id')],
        queryFn: async (): Promise<DriveData> => (
            api.get('/student/drive', {
                params: {
                    id: searchParams.get('id'),
                }
            }).then(res => res.data)
        )
    })





    return (
        <Box>
            {
                result.isSuccess && (
                    <Box>
                        <Typography>{result.data.company_details.company_name}</Typography>
                        <Typography>{result.data.company_details.company_website}</Typography>
                        <Typography>{result.data.job_title}</Typography>
                        <Typography>{result.data.job_location}</Typography>
                        <Typography>{result.data.job_description}</Typography>
                        <Typography>{result.data.branch.map((value, index) => (<Typography>{value}</Typography>))}</Typography>
                        <Typography>{result.data.tenth_cutoff}</Typography>
                        <Typography>{result.data.twelfth_cutoff}</Typography>
                        <Typography>{result.data.ug_cutoff}</Typography>
                        {
                            result.data.rounds.map((round, index) => (<Typography>
                                {round.round_no}- {round.round_name}- {round.date.toString()}
                            </Typography>))
                        }

                    </Box>
                )
            }

            <Button onClick={() => {
                api.get('/student/apply', {
                    params: {
                        drive_id: searchParams.get('id')
                    }
                })
            }}></Button>

        </Box>
    )
}

export default Drive;