import { 
    Box, 
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText  
  } from '@mui/material';
  
  import HomeIcon from '@mui/icons-material/Home';
  import SettingsIcon from '@mui/icons-material/Settings';
  
  function Sidebar() {
  
    return (
      <Drawer variant="permanent">
        
        <Box sx={{p: 2}}> 
          <List>
            
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />  
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />  
                </ListItemIcon>
                <ListItemText primary="View Student" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />  
                </ListItemIcon>
                <ListItemText primary="View Drives" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />  
                </ListItemIcon>
                <ListItemText primary="Add Drives" />
              </ListItemButton>
            </ListItem>
            
          </List>
        </Box>
        
        <Divider />
        
      </Drawer>
    );
  }
  
  export default Sidebar;