import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";
import axios from "axios";
import ItineraryItems from "../ItineraryItems/ItineraryItems";

const ItineraryForm = () => {
  const classes = useStyles();
  // using useRef to clear the form
  const placeInput = React.useRef(null);
  const notesInput = React.useRef(null);
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
  const history = useHistory();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  console.log("DATA", data);

  const handleSubmit = async (e) => {
    if (data.placename === "" || data.notes === "") {
      setError("A place name and notes must be entered.");
    }
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
    } catch (error) {}
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={(e) => e.preventDefault()}
        sx={{ mt: 3 }}
      >
        <div>{error}</div>
        
        <Link to="/" className={classes.toolbarlink} > 
        <Box m={1} p={2}>
          <Button 
            variant="contained" 
            color="primary"
            onClick=""
            type="submit"
          >Home 
          </Button>
          </Box>
        </Link>
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
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <ItineraryItems items={items} />
    </>
  );
};
export default ItineraryForm;
