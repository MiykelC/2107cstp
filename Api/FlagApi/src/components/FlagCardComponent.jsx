/* eslint-disable react/jsx-key */
import { useEffect, useState} from "react";
import { Card, CardContent, CardMedia, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const FlagCard = () => {

    const [allFlag, setAllFlag] = useState([]); 

    useEffect(() => {
        getAllFlag();
       
    }, []);

    const getAllFlag = async () => {
        const data = await fetch("https://restcountries.com/v3.1/all");
        const convertedJSONdata = await data.json();
        setAllFlag(convertedJSONdata)
        console.log(convertedJSONdata);
        
    };

 return (
    <> 
            <Grid container spacing={3}>
            {allFlag.map((flag) => (
              <Grid item xs={12} sm={6} md={4} key={flag.cca3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={flag.flags.png}
                    alt="Flag"
                  />
                  <CardContent>
                    <h3>{flag.name.common}</h3>
                    <Button
                    
                      component={Link}
                      to={`/Country/${flag.cca3}`}
                      variant="contained"
                      color="primary"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
     </>
 )
}

export default FlagCard;