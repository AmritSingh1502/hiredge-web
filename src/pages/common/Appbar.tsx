import { AppBar, Avatar, Box, IconButton, Toolbar, Tooltip, Typography, Button } from "@mui/material";
import useLogout from "../../utils/hooks/useLogout";

export default function Appbar({ role }: { role: string }) {
  const logout = useLogout();

  const handleStundentProfileClick = () => {
    window.open('/StudentProfile', '_blank');
  }


  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
      <Toolbar variant="dense">
        <Typography variant="h5" sx={{ color: 'black', fontWeight: '500', fontFamily: 'Arial' }}> HirEdge - {role}</Typography>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

        <Tooltip title="Profile" >
          <IconButton onClick={handleStundentProfileClick}>
            <Avatar alt="Profile" src="https://icon-library.com/images/icon-for-profile/icon-for-profile-8.jpg" />
          </IconButton>
        </Tooltip>

        <Button sx={{ color: 'black' }} onClick={logout}>
          <Typography variant="h5" sx={{ color: 'black', fontWeight: '500', fontFamily: 'Arial' }}>Logout</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
