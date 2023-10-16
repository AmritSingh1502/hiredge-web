import { Box } from "@mui/material";
import { Link } from "react-router-dom";


const TPOPage = () => {


    return (
        <Box>
            This is TPO Landing Page

            <Link to={'/student'}> Student</Link>
        </Box>
    )
}


export default TPOPage;