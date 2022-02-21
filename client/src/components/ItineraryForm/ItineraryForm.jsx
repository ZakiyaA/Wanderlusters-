import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
// import FormControlLabel from '@mui/material/FormControlLabel';
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";
import axios from "axios";
import ItineraryItems from "../ItineraryItems/ItineraryItems";

const ItineraryForm = () => {
  const classes = useStyles();

  const placeInput = React.useRef(null);
  const notesInput = React.useRef(null);

  const imgs = [
    "https://media.istockphoto.com/photos/getting-around-the-city-picture-id1291341916?s=612x612",
    "https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?s=612x612",
    "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
  ];
  const [data, setData] = useState({
    placename: "",
    notes: "",
  });
  const [error, setError] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    Promise.all([axios.get("/users/itinerary")]).then((res) => {
      console.log("res.[]", res[0].data.itineraryItems);

      setItems(res[0].data.itineraryItems);
    });
  }, []);
  // const [placeRating, setPlaceRating] = useState(0);
  // const [placename, setPlacename]= useState('');
  // const [notes, setNotes]= useState('');
  // const [checked, setChecked]= useState(false);
  const history = useHistory();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  console.log("DATA", data);

  const handleSubmit = async (e) => {
    if (data.placename === "" || data.notes === "") {
      setError("A place name and notes must be entered.");
    }
    setData({});
    console.log("Empty Data", data);
    try {
      const url = "http://localhost:8080/users/Itinerary";
      data.token = localStorage.getItem("token");
      console.log("LocalStorageData", data);
      setItems([data, ...items]);
      const res = await axios.post(url, data);
      if (res.status === 400) {
        return setError(res);
      }
      placeInput.current.value = "";
      notesInput.current.value = "";

      // if (res.data) {
      //   console.log("RES", res);
      //   setData({
      //     placename: "",
      //     notes: "",
      //   });
      // }

      console.log(data);
      console.log(items);
    } catch (error) {}
  };
  console.log("outside handlesubmit", data);
  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={(e) => e.preventDefault()}
        sx={{ mt: 3 }}
      >
        <div>{error}</div>
        <Button variant="contained" color="primary">
          <Link to={"/"}>Home</Link>
        </Button>
        <Card elevation={4} className={classes.container}>
          <Typography variant="h2" gutterBottom>
            Travel Intinerary
          </Typography>
          <CardMedia
            className={classes.media}
            style={{ height: 350 }}
            image={"https://source.unsplash.com/random"}
            title="Travel Itinerary"
          />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="placename"
                  name="placename"
                  label="Place name"
                  fullWidth
                  variant="standard"
                  required
                  onChange={handleChange}
                  autoFocus
                  inputRef={placeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="notes"
                  name="notes"
                  label="Notes"
                  fullWidth
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  onChange={handleChange}
                  required
                  inputRef={notesInput}
                />
              </Grid>
              {/* <Grid item xs={12}> */}
              {/* <Typography variant="subtitle1">Rating</Typography> */}

              {/* <FormControlLabel  
          control={ 
          <Rating 
            name="simple-controlled"
            value="placeRating"
            required
            onChange={handleChange}
            // onChange={(event, newValue) => {
            //   setPlaceRating(newValue);
            // }}            
            />
          }
         >
          </FormControlLabel> */}
              {/* </Grid> */}
              <Grid item xs={12}>
                {/* <FormControlLabel
          control={ 
          <Checkbox 
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="secondary"      
          />
          }
          label="Completed?">
          </FormControlLabel> */}
                <Button
                  className={classes.buttonSubmit}
                  onClick={handleSubmit}
                  type="submit"
                  color="primary"
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  SUBMIT
                </Button>

                {/* <Button variant="contained">{ done ? 'not visited' : 'visited?'} </Button> */}
                {/* <Button variant="contained">Delete</Button> */}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      {/* <Typography variant="h2" gutterBottom>
        My Saved Notes
      </Typography>

      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={6} md={6}> */}
      <ItineraryItems items={items} imgs={imgs} />
      {/* </Grid>
      </Grid> */}
    </>
  );
};
export default ItineraryForm;
