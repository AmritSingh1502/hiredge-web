
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import useAxiosPrivate from "../../utils/axiosPrivate";

interface InterviewExperiencesProps {
    id: string
}

interface InterviewExperiences {
    interview_experiences: {
        experience: string;
    }
}

const InterviewExperiences: FC<InterviewExperiencesProps> = (props) => {

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["fetchInterviewExperiences", props.id],
        queryFn: (): Promise<InterviewExperiences[]> =>
            api.get("/alumni/experiences", {
                params: {
                    id: props.id
                }
            }).then(res => res.data)

    })

    return (<>
        <Typography> InterView Experiences{props.id}</Typography>

        {

            result.data?.map((val, index) => (
                <>{index} {val.interview_experiences.experience} </>
            ))

        }

    </>);
}

export default InterviewExperiences;