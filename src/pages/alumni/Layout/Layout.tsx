
import { Box } from '@mui/material';
import Appbar from '../../common/Appbar';
import { Outlet } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';



const Layout = () => {


    return (
        <Box>
            <Appbar role={"Alumni"} />
            <MenuBar />
            <Box sx={{
                position: 'fixed',
                top: '112px',
                width: '100%',
                height: '98vh',
            }}><Outlet /></Box>

        </Box>
    )
}

export default Layout;