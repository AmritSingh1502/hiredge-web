import { Card, CardContent, Typography } from "@mui/material";



const TotalPrevYearOffers = () => {
    return (
        <>
            <Card variant="outlined" sx={{
                // border: '2px solid black',
                gridRow: "1 / 3",
                gridColumn: "1 / 2",
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                borderRadius: 8
            }}>
                <CardContent>
                    <Typography variant="h5" fontFamily={'sans-serif'} sx={{
                        // border: '2px solid black',
                    }}>Previous Year Placement</Typography>
                    <Typography textAlign={'center'} fontSize={40}>600</Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default TotalPrevYearOffers;