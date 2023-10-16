import { Box } from "@mui/material"
import { Link } from "react-router-dom";



const StudentPage = () => {


    return (
        <Box >
            This is the Student Page

            <Link to={'/tpo'}> TPO</Link>
        </Box>
    )
}


export default StudentPage;