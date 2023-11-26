import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardActions } from '@mui/material';
import { Button } from '@mui/material';

export default function AlumniModuleCards(props: {
  title: string;
  description: string;
  name: string;
  link: string;
}) {
  return (
    <Card  sx={{ maxWidth: 345 , backgroundColor: "lightblue" }}>
      <CardContent>
        <Typography gutterBottom  variant="h5" component="div" sx={{ fontWeight:'bold', fontFamily:'Arial'}}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={props.link}>
        <Button sx={{ color:'black' , fontWeight:'bold', fontFamily:'Arial',backgroundColor: '#1976d2' }}>
            {   props.name }
        </Button>
       </Link> 
      </CardActions>
    </Card>
  );
}