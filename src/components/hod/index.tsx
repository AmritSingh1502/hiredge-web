import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Appbar from "../student/Appbar";
import HodModuleCards from "./HodModuleCards";


const HODPage = () => {

    const cards = [
        {
            title:"View Data",
            description:"View placement Data",
            name:"View Here",
            link:"/hod/view-placement-data"
        }
      

    ]


    return (
        <Box>
            <Appbar />
            <br/>
            <Grid container spacing={1}>
            {cards.map(card => (
          <Grid item xs={3} key={card.title}>
            <Link to={card.link}></Link>
            <HodModuleCards 
              title={card.title}
              description={card.description}
              name={card.name}
              link={card.link}
            />
          </Grid>
        ))}
      </Grid>


            {/* <Link to={'/student'}> Student</Link> */}
        </Box>
    )
}


export default HODPage;