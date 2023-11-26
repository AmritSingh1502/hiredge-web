

import useLogout from "../../utils/hooks/useLogout";
import useRefreshToken from "../../utils/refresh";
import Appbar from "./Appbar";
import UpcomingCard from "./UpcomingCard";

import HeadingBar from "../common/HeadingBar";
import PastDriveCard from "./PastDriveCard";
import { Grid } from "@mui/material";


const StudentPage = () => {

  const logout = useLogout();
  const refresh = useRefreshToken();

  const upcoming = [
    {
      title: 'SocGen',
      date: '10-10-2023'
    },
    {
      title: 'Dover',
      date: '10-10-2023'
    },
    {
      title: 'Extreme Networks', 
      date: '10-10-2023'
    },
    {
      title: 'Accenture',
      date: '10-10-2023'
    },
    {
      title: 'DTICI',
      date: '10-10-2023'
    }
  ];

  const past = [
    {
      title: 'SocGen',
      count: '16'
    },
    {
      title: 'Dover',
      count: '26'
    },
    {
      title: 'Extreme Networks', 
      count: '7'
    },
    {
      title: 'Accenture',
      count: '12'
    },
    {
      title: 'DTICI',
      count: '10'
    }
  ];

  



  return (
    <div>
      <Appbar />
      <HeadingBar title="Upcoming Placement Drive" />
      <br />
      <Grid container spacing={1}>
        {upcoming.map(upcoming => (
          <Grid item xs={3} key={upcoming.title}>
            <UpcomingCard 
              title={upcoming.title}
              content={upcoming.date}
            />
          </Grid>
        ))}
      </Grid>
      <br />
      <HeadingBar title="Past Placement Drives" />
      <br />
      <Grid container spacing={1}>
        {past.map(past => (
          <Grid item xs={3} key={past.title}>
            <PastDriveCard 
              title={past.title}
              count={past.count}
            />
          </Grid>
        ))}
      </Grid>
      <br />
      {/* <HeadingBar title="Useful Links" /> */}
      
    </div>
  )
}


export default StudentPage;