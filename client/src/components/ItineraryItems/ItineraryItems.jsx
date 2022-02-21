import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Box,
} from "@material-ui/core";
// import FormControlLabel from '@mui/material/FormControlLabel';
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";
import axios from "axios";

const ItineraryItems = ({ items }) => {
  const classes = useStyles();
  console.log("Items", items);
  return (
    <>
      {items.map((item) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random"
              alt="random picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {item.placeName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {item.notes}
              </Typography>
              <Box marginTop={3} display="flex" justifyContent="space-between">
                <Rating
                  size="medium"
                  value={4}
                  precision={0.5}
                  readOnly
                ></Rating>
              </Box>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" color="primary" variant="contained">
              DELETE
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default ItineraryItems;
