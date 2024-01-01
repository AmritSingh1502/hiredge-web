import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom';

const MenuBar = () => {


    return (
        <AppBar sx={{
            position: 'fixed',
            top: '56px'
        }}>
            <Toolbar >

                <Link to="./">Home</Link>

                <Link to={'addcompany'}>Add Company</Link>

                <Link to={'adddrive'}>Add Drive</Link>

                <Link to={'addstudent'}>Add Student</Link>

                <Link to={'profile'}>Profile</Link>

            </Toolbar>
        </AppBar>
    )
};
export default MenuBar;