const axios = require('axios');

const getJoke = async () => {
  const fetchAPI = await axios.get('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single')
    .then(function (response) {
      const { data } = response;
     return data
    })
    return fetchAPI
}

module.exports = {
  getJoke,
}