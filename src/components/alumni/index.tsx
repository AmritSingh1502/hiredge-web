import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Appbar from "../student/Appbar";
import AlumniModuleCards from "./AlumniModuleCards";



const AlumniPage = () => {

    const cards = [
        {
            title:"Queries",
            description:"Answer Queries",
            name:"Answer here",
            link:"/alumni/answer-query"
        },
        {
            title:"Insights",
            description:"Share Insights",
            name:"Share here",
            link:"/alumni/insights"
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
            <AlumniModuleCards 
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


export default AlumniPage;