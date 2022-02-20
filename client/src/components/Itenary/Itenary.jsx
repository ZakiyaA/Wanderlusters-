import React, { useEffect, useState } from 'react';
import { Grid, Typography, TextField, Checkbox, FormControlLabel} from '@material-ui/core';
import { Rating } from "@material-ui/lab";
export default function Itenary() {
  const [notes, setNotes]= useState('');
  const [checked, setChecked]= useState(false);
  const [placeRating, setPlaceRating]=useState('');
  useEffect(() => {
    setNotes(notes)
  },[notes])
  useEffect(() => {
    setChecked(checked)
  },[checked])
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Travel Itinerary
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="placeName"
            name="placeName"
            label="Place name"
            fullWidth
            variant="standard"
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
            onChange={(e) => setNotes(e.target.value)}
          />
        </Grid>
        <Grid item  xs={12}>
          <Typography variant="subtitle1">
            Rating
          </Typography>
        <FormControlLabel
          control={
          <Rating
            name="simple-controlled"
            value={placeRating}
            onChange={(event, newValue) => {
              setPlaceRating(newValue);
            }}
            />
          }
         >
          </FormControlLabel>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
          control={
          <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="secondary"
          />
          }
          label="Completed?">
          </FormControlLabel>
        </Grid>
      </Grid>
    </>
  );
}