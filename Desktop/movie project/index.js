const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
  params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
  headers: {
    'X-RapidAPI-Key': '4f05868062msh8d5b131431edda5p14e716jsn4e745ec58bc5',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});