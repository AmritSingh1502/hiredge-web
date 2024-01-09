
import { Card, CardContent, CardActions, Typography, Button, CardHeader, Box } from '@mui/material';


const CompanyCard = ({ title, id }: { title: string; id: string }) => {
    return (
        <Card square sx={{
            width: "200px",
            height: '150px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
            borderRadius: "10px"
        }} >
            <CardContent sx={{
                height: "40%"
            }}>
                <Box>
                    <Typography>{title}</Typography>
                </Box>

            </CardContent>
            <CardActions sx={{
                position: 'relative',
            }}>
                <Button variant='outlined' href={`company?id=${id}`}>View More</Button>
            </CardActions>
        </Card>
    );
}

export default CompanyCard;