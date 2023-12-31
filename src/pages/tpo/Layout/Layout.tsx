
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import Appbar from '../../common/Appbar';
import MenuBar from '../Menubar/MenuBar';


const Layout = () => {


    return (
        <Box>
            <Appbar role='TPO' />
            <MenuBar />
            <Outlet />
        </Box>
    )
}

export default Layout;