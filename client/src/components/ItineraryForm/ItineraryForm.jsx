import React, { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Box, Paper, Card, CardMedia, CardContent} from '@material-ui/core';
// import FormControlLabel from '@mui/material/FormControlLabel';
import { Rating } from "@material-ui/lab";
import useStyles  from './styles'
import axios from 'axios';
const ItineraryForm = () => {
  const classes = useStyles();
  const [data, setData] = useState({
		placeName: "",
		notes: "",
	});
  const [error, setError] = useState("");
  // const [placeRating, setPlaceRating] = useState(0);
  // const [placeName, setPlaceName]= useState('');
  // const [notes, setNotes]= useState('');
  // const [checked, setChecked]= useState(false);

  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
    if (data.placeName === "" || data.notes === "" ) {
      setError("A place name, notes and rating must be entered.");
    }
    // console.log("handleSubmit", data);
		try {
			const url = "http://localhost:8080/users/Itinerary";
			const res  = await axios.post(url, data);
      console.log("res", res.data)
      if(res.status === 400) {
        return setError(res);
      }
			// navigate("/login");
			console.log(res);
		} catch (error) {
      // console.log(error.response.data.message);
      // setError("An email or password needs to be entered.");
		}
	};
  // useEffect(() => {
  //   setNotes(notes);
  // },[notes])
  // useEffect(() => {
  //   setPlaceName(placeName);
  // },[placeName])
  // useEffect(() => {
  //   setPlaceRating(placeRating);
  // },[placeRating])


  // useEffect(() => {
  //   setChecked(checked)
  // },[checked])
  
  return (
    <>
    <Box component="form" noValidate onSubmit= {e => e.preventDefault()} sx={{ mt: 3 }}>
         <div>{ error }</div>
    
      <Card elevation={4} className={classes.container}>
         <Typography variant="h2" gutterBottom>
           Travel Intinerary
      </Typography>
      <CardMedia className={classes.media}
          style={{ height: 350 }}
          image={'https://source.unsplash.com/random'}
          title="Travel Itenary"
      />
        <CardContent>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="placeName"
            name="placeName"
            label="Place name"
            fullWidth
            variant="standard"
            required
            onChange={handleChange}
            autoFocus

            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="notes"
            name="notes"
            label="Notes"
            fullWidth
            variant="outlined"
            fullWidth multiline rows={4}
            onChange={handleChange}
            required

            />
        
        </Grid>
        <Grid item  xs={12}>
          <Typography variant="subtitle1">
            Rating
          </Typography>
     
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
        </Grid>
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
            </Button >
           
        
              {/* <Button variant="contained">{ done ? 'not visited' : 'visited?'} </Button> */}
              {/* <Button variant="contained">Delete</Button> */}
         
        </Grid>
      </Grid>
      </CardContent>
</Card>
</Box>
</>
    
    
  );
}
export default ItineraryForm;