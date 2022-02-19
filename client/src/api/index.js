import axios from 'axios';

// const options = 

//Passing the bounds to the function.
export const getPlacesData = async (type, sw, ne) => {
  try {
    console.log('typeinindex', type)
    const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key':  '41322ea5a5msh8e612987e687a1ep147403jsnb20317e9814b'
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
        'x-rapidapi-key': '5492b0c5b2msh63fc9aaee96393dp130a6ejsn5d0d65ede619'
      }

    })

    return data;
  } catch (error) {
    console.log(error);
  }

}