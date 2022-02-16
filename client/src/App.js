import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import { getPlacesData, getWeatherData } from './api';

const App = () => {
  const [ places, setPlaces ] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [ weatherData, setWeatherData ] = useState([]);
  const [childClicked, setChildClicked] = useState(null);
  
  const [ coordinates, setCoordinates ] = useState({});
  const [ bounds, setBounds] = useState({sw: null, ne: null});

  const [ isLoading, setIsLoading ] = useState(false);
  const [type, setType] = useState('hotels');
  const [rating, setRating] = useState('3');

  
  //Set the user's current location when we open the page first.
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude}}) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  },[]);

  // To filter places according to the rating

  useEffect(() => {
    console.log("Is this working");
    const filtered = places && places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
  }, [rating]);

 


  //Pass the coordinates to the axios call to get the data of it.
  useEffect(() => {
    if(bounds.sw && bounds.ne) {
      setIsLoading(true)
      getWeatherData(coordinates.lat, coordinates.lng)
      .then((data) => setWeatherData(data));

      console.log(coordinates,bounds);
      getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        // console.log(data);
        
        setPlaces(data?. filter((place) => place.name && place.num_reviews > 0));
        // setFilteredPlaces([]);
        setIsLoading(false);
      })
  }
  }, [type, bounds]);

  return(
  <>
    <CssBaseline />
    <Header setCoordinates={setCoordinates}/>
    <Grid container spacing={3} style={{ width: '100%' }}>
      <Grid item xs={12} md={4} >
        <List 
          places={filteredPlaces.length > 0 ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
         </Grid>
         <Grid item xs={12} md={8} >
           <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length > 0 ? filteredPlaces : places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
            />
         </Grid>
    </Grid>
    </>
      
  );
}

export default App;
