import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
// const options = 

//Passing the bounds to the function.
export const getPlacesData = async (sw, ne) => {
  try {
    const { data: {data} } = await axios.get(URL,{
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '82cb3a3279msh4efcefc864d7582p123d89jsn10090ad7aa2f'
      }
    });
    return data;
  }
  catch (error) {
    console.log(error);

  }
}