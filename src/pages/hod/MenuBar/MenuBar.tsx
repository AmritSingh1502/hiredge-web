import { AppBar, Toolbar } from "@mui/material";

import { Link } from 'react-router-dom';


const MenuBar = () => {
    return (<AppBar>
        <Toolbar>
            <Link to={''}>Home</Link>
            <Link to={'profile'}>Profile</Link>
        </Toolbar>
    </AppBar>);
}

export default MenuBar;