import React, { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button, Checkbox, FormControlLabel, Paper, Card, CardMedia, CardContent,CardActionArea, CardActions, Box} from '@material-ui/core';
// import FormControlLabel from '@mui/material/FormControlLabel';
import { Rating } from "@material-ui/lab";
import useStyles  from '../Form/styles'


const ItineraryItems = (placeName, notes, placeRating ) => {
  const classes = useStyles();
  return ( 
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
            Montreal
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Box marginTop={3} display="flex" justifyContent="space-between">
        <Rating size="medium" value={4} precision={0.5} readOnly ></Rating>
        </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" variant="contained">
          DELETE
        </Button>
      </CardActions>
    </Card>
  
  );
}
//   return (
     
//       <Card elevation={5} className={classes.container}>
//       <CardMedia className={classes.media}
//           style={{ height: 350 }}
//           image={'https://source.unsplash.com/random'}
//           title="Travel Itenary"
//       />
//         <CardContent>
//       <Grid container spacing={4}>
//         <Grid item xs={12} sm={12}>
//           <TextField
//             id="placeName"
//             name="placeName"
//             label="Place name"
//             fullWidth
//             variant="standard"
//             onChange={(e) => setPlaceName(e.target.value)}

//             />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             id="notes"
//             name="notes"
//             label="Notes"
//             fullWidth
//             variant="outlined"
//             fullWidth multiline rows={4}
//             onChange={(e) => setNotes(e.target.value)}
//             />
        
//         </Grid>
//         <Grid item  xs={12}>
//           <Typography variant="subtitle1">
//             Rating
//           </Typography>
     
//         <FormControlLabel  
//           control={ 
//           <Rating 
//             name="simple-controlled"
//             value={placeRating}
//             onChange={(event, newValue) => {
//               setPlaceRating(newValue);
//             }}            
//             />
//           }
//          >
//           </FormControlLabel>
//         </Grid>
//         <Grid item xs={12}>
//           {/* <FormControlLabel
//           control={ 
//           <Checkbox 
//           checked={checked}
//           onChange={(e) => setChecked(e.target.checked)}
//           color="secondary"      
//           />
//           }
//           label="Completed?">
//           </FormControlLabel> */}
//            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        
//               {/* <Button variant="contained">{ done ? 'not visited' : 'visited?'} </Button> */}
//               {/* <Button variant="contained">Delete</Button> */}
         
//         </Grid>
//       </Grid>
//       </CardContent>
// </Card>
    
    
//   );
// }
export default ItineraryItems;