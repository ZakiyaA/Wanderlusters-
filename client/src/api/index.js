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
        'x-rapidapi-key':  'e6332cb483msh396b983b5c4bdf5p10c851jsn713d94ad6fb7'
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
        'x-rapidapi-key': '94a660c573msh2862e5e185dae58p15bcd2jsne395c3c89eb3'
      }

    })

    return data;
  } catch (error) {
    console.log(error);
  }

}