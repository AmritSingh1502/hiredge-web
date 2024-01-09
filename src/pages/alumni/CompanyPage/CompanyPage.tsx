import { Box, Typography, Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useQueries, useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../utils/axiosPrivate";

import Add from "@mui/icons-material/Add";
import { useState } from "react";
import PostExperience from "../PostExperience/PostExperience";
import InterviewExperiences from "../../../Components/InterviewExperiences/InterviewExperiences";



const CompanyPage = () => {
    const api = useAxiosPrivate();

    const [params, _] = useSearchParams();

    const id = params.get('id');

    const result = useQuery({
        queryKey: ["fetchCompanyDetails", id],
        queryFn: (): Promise<CompanyData> => (
            api.get('/alumni/company', {
                params: {
                    id: id
                }
            }).then(res => res.data)
        ),
        staleTime: 10000
    })

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box>
                <Typography>Company Name:  {result.data?.company_name}</Typography>
            </Box>
            <Button color="success" variant="outlined"
                startIcon={<Add />}
                onClick={handleOpen}
                sx={{
                    alignSelf: 'end',
                    width: '300px',
                    marginRight: '20px'
                }}
            >
                Share Your Experience
            </Button>
            <Typography variant="h3">Interview Experiences</Typography>

            {id && <InterviewExperiences id={id} />}

            <PostExperience open={open} handleClose={handleClose} />

        </Box>
    );
}

export default CompanyPage;