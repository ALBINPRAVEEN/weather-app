import React from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from '@material-ui/core';


const Cards = (props) => {
    return (
       
            <Grid item md={3} xs={12} sm={12}>
                <Card >
                    <CardHeader  className="date"
                        subheader={props.date}
                    />
                    <CardContent>

                        < Typography variant="body2" color="textSecondary" component="p" className="detail">
                            <span>Current Temprature: </span>
                            {props.temp}°C
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p" className="min_temp">
                            <span>Minimum Temprature: </span>
                            {props.minTemp}°C
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p" className="max_temp">
                            <span>Maximum Temprature: </span>
                            {props.maxTemp}°C
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p" className="pressure">
                            <span>Pressure: </span>
                            {props.pressure} Pa
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p" className="humidity">
                            <span>Humidity: </span>
                            {props.humidity}%
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p" className="wind_speed">
                            <span>Wind Speed: </span>
                            {props.windSpeed}Knots
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p" className="desc">
                            <span>Day's Description: </span>
                            {props.description}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        

    )
}


export default Cards;