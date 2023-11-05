import { AppBar, Avatar, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";

export default function HeadingBar(props:
    { title: string}) {

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>

          <Typography variant="h6" color="inherit" component="div">
            {props.title}  
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}