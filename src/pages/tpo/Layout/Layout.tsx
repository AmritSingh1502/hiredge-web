
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import Appbar from '../../common/Appbar';
import MenuBar from '../Menubar/MenuBar';


const Layout = () => {


    return (
        <Box sx={{
            position: 'absolute',
            width: '100%',
            height: '100vh'
        }}>
            <Appbar role='TPO' />
            <MenuBar />
            <Box sx={{
                position: 'relative',
                top: '122px',
                width: '100%',
                height: 'auto'
            }}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout;