import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import SignUp from './components/SingUp/SignUp';
import LogIn from './components/LogIn/LogIn';

import Home from  './components/Home/Home'

// import { getPlacesData, getWeatherData } from './api';

const App = () => {
  // const [ places, setPlaces ] = useState([]);
  // const [filteredPlaces, setFilteredPlaces] = useState([]);
  // const [ weatherData, setWeatherData ] = useState([]);
  // const [childClicked, setChildClicked] = useState(null);
  
  // const [ coordinates, setCoordinates ] = useState({});
  // const [ bounds, setBounds] = useState({sw: null, ne: null});

  // const [ isLoading, setIsLoading ] = useState(false);
  // const [type, setType] = useState('hotels');
  // const [rating, setRating] = useState('3');

  
  // //Set the user's current location when we open the page first.
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude}}) => {
  //     setCoordinates({ lat: latitude, lng: longitude });
  //   })
  // },[]);

  // // To filter places according to the rating
  // useEffect(() => {
  //   console.log("Is this working");
  //   const filtered = places && places.filter((place) => Number(place.rating) > rating);
  //   setFilteredPlaces(filtered);
  // }, [rating]);


  // //Pass the coordinates to the axios call to get the data of it.
  // useEffect(() => {
  //   if(bounds.sw && bounds.ne) {
  //     setIsLoading(true)
  //     getWeatherData(coordinates.lat, coordinates.lng)
  //     .then((data) => setWeatherData(data));

  //     console.log(coordinates,bounds);
  //     getPlacesData(type, bounds.sw, bounds.ne)
  //     .then((data) => {
  //       // console.log(data);
        
  //       setPlaces(data?. filter((place) => place.name && place.num_reviews > 0));
  //       // setFilteredPlaces([]);
  //       setIsLoading(false);
  //     })
  // }
  // }, [type, bounds]);

  return(
  <>
  <Router>
    {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/LogIn">LogIn</Link>
    </nav> */}
    
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/SignUp"  component={SignUp} />
      <Route  path="/LogIn" component={LogIn}/>
    </Switch>

  </Router>
  


   
    
    
    
    </>
      
  );
}

export default App;
