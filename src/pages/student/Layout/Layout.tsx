import { Box } from "@mui/material";
import { Outlet } from 'react-router-dom';
import MenuBar from '../Menubar/Menubar';
import Appbar from "../../common/Appbar";


const StudentDashBoard = () => {



    return (
        <Box
            position={'absolute'}
            sx={{
                width: '100%'
            }}
        >
            <Appbar role="Student" />
            <MenuBar />
            <Box sx={{
                position: 'relative',
                top: '112px',
                width: '100%',
                marginTop:'40px'
            }}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default StudentDashBoard;