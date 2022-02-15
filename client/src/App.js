import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import { getPlacesData } from './api';

const App = () => {
  const [ places, setPlaces ] = useState();
  const [childClicked, setChildClicked] = useState(null);
  const [ coordinates, setCoordinates ] = useState({ lat:0, lng: 0});
  const [ bounds, setBounds] = useState({sw: null, ne: null});

  //Set the user's current location when we open the page first.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude}}) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  },[]);

  //Pass the coordinates to the axios call to get the data of it.
  useEffect(() => {
    console.log(coordinates,bounds);
    getPlacesData(bounds.sw, bounds.ne)
    .then((data) => {
      // console.log(data);
      setPlaces(data);
    })
  },[coordinates, bounds]);

  return(
  <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12} md={4} >
        <List 
          places={places}
          childClicked={childClicked}
        />
         </Grid>
         <Grid item xs={12} md={8} >
           <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
            />
         </Grid>
    </Grid>
    </>
      
  );
}

export default App;
