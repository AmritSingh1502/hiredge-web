
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MenuBar = () => {

    const path = window.location.pathname;

    return (
        <AppBar position="fixed" sx={{
            backgroundColor: '#191919',
            height: '50px',
            justifyContent: 'center',
            marginBottom: '20px',
            padding: '40px',
            top: '56px',
        }}>
            <Toolbar sx={{
                alignItems: 'center',
                columnGap: 5,
                margin: 0,
                padding: 0,
                height: '80px',
                paddingTop:'20px',
                paddingBottom:'20px'
            }}>
                <Typography 
                    borderRadius={'10px'} 
                    textAlign={'center'}
                    fontSize={'24px'} 
                    color="white" 
                    bgcolor={(path === '/student' ? '#29ADB2' : '')}
                    sx={{
                        height: '50px',
                        paddingLeft:'10px',
                        paddingRight:'10px'
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

