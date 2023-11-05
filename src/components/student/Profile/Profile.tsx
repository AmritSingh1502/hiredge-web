import { Box } from "@mui/material";
import Appbar from "../Appbar";
import SettingsIcon from '@mui/icons-material/Settings';
import ProfileCard from "./ProfileCard";


const Profile = () => {


    return (
        <>
       <Appbar />

       <ProfileCard
        USN="2SD20CS014"
        Name="Amrit Kumar Singh"
        Branch="CSE"
        CGPA="8.7"
        SSE="74"
        SE="8.2"
        Mail="mailamritsingh1901@gmail.com"
        Phone="7717720441"
       />

       </>
    )
}


export default Profile;