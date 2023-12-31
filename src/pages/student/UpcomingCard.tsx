/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function UpcomingCard(props:
  { title: string, content: string }) {

    // const handleApplyClick = () => {
    //   window.open('https://docs.google.com/forms/d/e/1FAIpQLSeI8_vYyaJgM7SJM4Y9AWfLq-tglWZh6yt7bEXEOJr_L-hV1A/viewform?formkey=dGx0b1ZrTnoyZDgtYXItMWVBdVlQQWc6MQ','_blank'); 
    // };
    
  const handleTitleClick = () => {
    window.open('/company-details', '_blank');
  }

  const handleApplyClick = () => {
    window.open('/apply', '_blank');
  }

 

  return (
    <>
    <Card sx={{ maxWidth: 345 , marginLeft: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <a href="#" onClick={handleTitleClick}>
            {props.title}  
          </a>
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Last Date:
          {props.content}
        </Typography>
        <Button variant="contained" onClick={handleApplyClick}>Apply Now</Button>
      </CardContent>
    </Card>
  
    </>
  );
}