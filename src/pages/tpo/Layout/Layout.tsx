
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import Appbar from '../../common/Appbar';
import MenuBar from '../Menubar/MenuBar';


const Layout = () => {


    return (
        <Box sx={{
            position: 'absolute',

        }}>
            <Appbar role='TPO' />
            <MenuBar />
            <Box sx={{
                position: 'relative',
                top: '122px'
            }}>
            <Outlet />
            </Box>
        </Box>
    )
}

export default Layout;