import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const MenuBar = () => {
    return (
        <AppBar sx={{ position: 'static' }}>
            <Toolbar>

                <Link to={'profile'}>Profile</Link>

            </Toolbar>
        </AppBar>
    );
}

export default MenuBar;