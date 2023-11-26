import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Appbar from "../student/Appbar";
import ModuleCards from "./ModuleCards";


const TPOPage = () => {

    const cards = [
        {
            title:"Add Company",
            description:"Adding a new Company",
            name:"Add Here",
            link:"/tpo/add-company"
        },
        {
            title:"Add Student",
            description:"Adding a new Student",
            name:"Add Here",
            link:"/tpo/add-student"
        },
        {
            title:"Verify"  ,
            description:"Verify Stundent Data",
            name:"Verify Here",
            link:"/tpo/verify-student"
        },
        {
            title:"Notify",
            description:"Send Notifications",
            name:"Send Here",
            link:"/tpo/send-notification"
        },
        {
            title:"Queries",
            description:"Answer Queries",
            name:"Answer Here",
            link:"/tpo/answer-queries"
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
            <ModuleCards 
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


export default TPOPage;