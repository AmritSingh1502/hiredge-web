import Appbar from "../../common/Appbar";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../utils/axiosPrivate";
import { useQuery } from "@tanstack/react-query";

type StudentProfileType = {
    user_id: string;
    branch: string;
    email: string;
    mobile: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    dob: string;
    tenth_percentage: string;
    twelfth_percentage: string;
    ug_cgpa: string;
}

const Profile = () => {

    const api = useAxiosPrivate();

    const result = useQuery({
        queryKey: ["fetchStudentProfile"],
        queryFn: (): Promise<StudentProfileType> => (
            api.get('/student/profile').then(res => res.data)
        )
    })

    return (
        <>
            {result.isSuccess &&
                <ProfileCard
                USN={result.data?.user_id}
                Name={`${result.data?.first_name} ${result.data.middle_name} ${result.data.last_name}`}
                Branch={result.data.branch}
                CGPA={result.data.ug_cgpa}
                SSE={result.data.twelfth_percentage}
                SE={result.data.tenth_percentage}
                Mail={result.data.email}
                Phone={result.data.mobile}
                />
            }


        </>
    )
}


export default Profile;