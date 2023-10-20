import { Box } from "@mui/material"
import { Link } from "react-router-dom";
import { Button } from '@mui/material'
import useLogout from "../../utils/hooks/useLogout";
import useRefreshToken from "../../utils/refresh";


const StudentPage = () => {

    const logout = useLogout();
    const refresh = useRefreshToken();

    return (
        <Box >
            This is the Student Page


            <Button onClick={logout}>Logout</Button>
        </Box>
    )
}


export default StudentPage;