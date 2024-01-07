import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <AppBar sx={{ position: 'fixed', top: '56px', height: '56px', justifyContent: 'center' }} >
            <Toolbar sx={{
                columnGap: '10px'
            }}>
                <Link to={''}>Home</Link>
                <Link to={'experience'}>Share Experience</Link>
                <Link to={'profile'}>Profile</Link>
            </Toolbar>
        </AppBar>
    );
}

export default MenuBar;