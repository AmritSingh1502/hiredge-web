
import { Box } from '@mui/material';
import Appbar from '../../common/Appbar';
import { Outlet } from 'react-router-dom';
import MenuBar from '../MenuBar/MenuBar';



const Layout = () => {


    return (
        <>
            <Appbar role={"Alumni"} />
            <MenuBar />
            <Outlet />

        </>
    )
}

export default Layout;