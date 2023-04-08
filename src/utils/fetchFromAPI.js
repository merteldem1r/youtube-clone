import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
   url: BASE_URL,
   params: { maxResults: '50' },
   headers: {
      'X-RapidAPI-Key': 'b5468c0e90msh7838b7064692fffp141689jsn53442df986a3',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
   },
};

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${BASE_URL}/${url}`, options)

   return data;
}
