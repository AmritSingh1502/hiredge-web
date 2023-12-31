
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuBar = () => {

    const path = window.location.pathname;

    return (
        <AppBar position="fixed" sx={{
            backgroundColor: '#191919',
            height: '50px',
            justifyContent: 'center',
            margin: 0,
            padding: 0,
            top: '56px'
        }}>
            <Toolbar sx={{
                alignItems: 'center',
                columnGap: 5,
                margin: 0,
                padding: 0,
                height: '50px'
            }}>
                <Typography fontSize={'24px'} color="white" bgcolor={(path === '/student' ? '#29ADB2' : '')}
                    sx={{
                        height: '50px'
                    }}
                ><Link to='' style={{
                    textDecoration: 'none',
                    color: 'white'
                }}>Home</Link></Typography>
                <Link to='upcoming' style={{
                    textDecoration: 'none'
                }}><Typography fontSize={'24px'} color="white"> Drives</Typography></Link>
                <Link to='companies' style={{
                    textDecoration: 'none'
                }}><Typography fontSize={'24px'} color="white">Companies</Typography></Link>
                <Link to='profile' style={{
                    textDecoration: 'none'
                }}><Typography fontSize={'24px'} color="white"  >Profile</Typography></Link>
            </Toolbar>
        </AppBar>
    )
}

export default MenuBar;

