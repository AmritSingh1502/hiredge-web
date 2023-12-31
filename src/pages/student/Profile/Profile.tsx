import Appbar from "../../common/Appbar";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../utils/axiosPrivate";

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

    const axiosPrivate = useAxiosPrivate();

    const [studentProfile, setStudentProfile] = useState<StudentProfileType | null>(null)

    useEffect(() => {

        const fetchData = () => {

            axiosPrivate.get('/student/profile').then((res) => {
                console.log(res.data);
                setStudentProfile(res.data);
            }).catch((e) => {
                console.log(e);
            })
        }

        fetchData();

    }, [])

    return (
        <>
            {studentProfile
                &&
                <ProfileCard
                    USN={studentProfile?.user_id}
                    Name={`${studentProfile?.first_name} ${studentProfile.middle_name} ${studentProfile.last_name}`}
                    Branch={studentProfile.branch}
                    CGPA={studentProfile.ug_cgpa}
                    SSE={studentProfile.twelfth_percentage}
                    SE={studentProfile.tenth_percentage}
                    Mail={studentProfile.email}
                    Phone={studentProfile.mobile}
                />
            }


        </>
    )
}


export default Profile;