import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Appbar from "../student/Appbar";
import Sidebar from "../common/Sidebar";


const TPOPage = () => {


    return (
        <Box>
            <Sidebar />
            <Appbar />

            {/* <Link to={'/student'}> Student</Link> */}
        </Box>
    )
}


export default TPOPage;