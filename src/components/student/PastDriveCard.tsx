/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PastDriveCard(props:
  { title: string, count: string }) {


 

  return (
    <>
    <Card sx={{ maxWidth: 345 , marginLeft: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.title} 
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Placed:  { props.count }
        </Typography>
      </CardContent>
    </Card>
  
    </>
  );
}