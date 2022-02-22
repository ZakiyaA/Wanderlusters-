import axios from 'axios'; 

//Passing the bounds to the function.
export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key':  '4a2a8223e0mshe702f42c3ef7c52p178060jsnafe46241720e'
      }
    });
    return data;
  }
  catch (error) {
    console.log(error);

  }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params: { lon: lng, lat: lat, },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'e299c3c8e6msh6ab2c9ae9d7d215p18e8a2jsn62236c7e33e1'
      }

    })

    return data;
  } catch (error) {
    console.log(error);
  }

}