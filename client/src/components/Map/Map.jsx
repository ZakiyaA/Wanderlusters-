import React from 'react';
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';
import { GoogleMap } from "@react-google-maps/api";
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  // const coordinates = { lat: 0, lng: 0 };

  return(
    <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyBXo5hYL9sAc9JDTermZFANjGcKlhTFXpk'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            // console.log("coordinates & bounds in Map", e);
            setCoordinates({lat: e.center.lat, lng: e.center.lng});
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          }}
          onChildClick={''}
          >
            {places?.map((place, index) => (
              <div className={classes.markerContainer}
              lat={place.latitude}
              lng={place.longitude}
              key={index}
              >
                {
                  !isDesktop ? (
                    <LocationOnOutlined color="primary" fontSize="large"/>
                  ) : 
                  (
                    <Paper elevation={3} className={classes.paper}>
                      <Typography className={classes.typography} variant="subtitle2" gutterbottom> 
                        {place.name}
                      </Typography>
                      
                    </Paper>
                  )
                }
              </div>
            ))}
        </GoogleMapReact>
        
      </div>
  );
}

export default Map;