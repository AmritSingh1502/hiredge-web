import { Box, Button, Link, Typography } from "@mui/material";

const ProfileCard = (props:
    { USN: string , Name:string, Branch:string, CGPA:string, SSE: string, SE:string ,Mail:string , Phone: string }) => {
  return (
    <Box
      p={3}
      border={1}
      borderColor="#ccc"
      borderRadius={5}
      maxWidth={400}
      margin="auto"
      textAlign="center"
      boxShadow="0 0 10px #ddd"
    >
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Student Profile
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2}
        mb={2}
      >
        <img
          src="Amrit.png"
          alt="profile" 
          width={100}
          height={100}
          style={{ borderRadius: '50%', border: '2px solid #1976d2' }}
        />
      </Box>

      <Typography fontWeight={500} color="black">
        <strong>USN: </strong>{ props.USN }
      </Typography>

      <Typography fontWeight={500} color="#black" mt={1}>
        <strong>Name: </strong>{ props.Name }
      </Typography>

      <Typography fontWeight={500} color="black">
        <strong>Branch: </strong>{ props.Branch }
      </Typography>

      

<Box mt={2}>
<Typography>
  <strong>CGPA: </strong>{ props.CGPA }
</Typography>

<Typography fontWeight={500}>
  <strong>Senior Secondary Education: </strong> { props.SSE }
</Typography>

<Typography fontWeight={500}>
  <strong>Secondary Education: </strong>{ props.SE }
</Typography>


<Typography>
  <strong>Mail: </strong><Link href="mailto:mailamritsingh1901@gmail.com">{ props.Mail }</Link>
</Typography>

<Typography>
  <strong>Phone: </strong> { props.Phone }
</Typography>
</Box>
      <Button 
        variant="contained" 
        color="primary"
        size="small"
        sx={{ mt: 2, px: 5 }}
      >
        Edit Profile
      </Button>
    </Box>
  );
};

export default ProfileCard;
