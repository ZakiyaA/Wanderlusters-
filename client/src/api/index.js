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
        'x-rapidapi-key': '3bbe95f11amshaeedc7d890c9cf1p1f59d8jsn7e055e69c791'
      }
    });
    return data;
  }
  catch (error) {
    console.log(error);

  }
}