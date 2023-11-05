import { AppBar, Avatar, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import useLogout from "../../utils/hooks/useLogout";

export default function Appbar() {
  const logout = useLogout();

  const handleStundentProfileClick = () => {
    window.open('/StudentProfile', '_blank');
  }

 
  
  return (
    <AppBar position="static" sx={{backgroundColor: 'white'}}>
      <Toolbar variant="dense">
        <Typography variant="h5" sx={{ color:'black' , fontWeight:'500', fontFamily:'Arial' }}> HirEdge </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

        <Tooltip title="Profile" >
         <IconButton>
           <Avatar onClick={ handleStundentProfileClick } alt="Profile" src="https://icon-library.com/images/icon-for-profile/icon-for-profile-8.jpg" />
         </IconButton>
       </Tooltip>

        <IconButton sx={{ color: 'black' }} onClick={logout}>
          <Typography  variant="h5" sx={{ color:'black' , fontWeight:'500', fontFamily:'Arial' }}>Logout</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
