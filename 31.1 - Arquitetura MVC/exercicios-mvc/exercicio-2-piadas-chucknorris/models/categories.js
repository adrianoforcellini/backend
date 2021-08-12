const axios = require('axios');


const getCategories = async () => {
  const fetchAPI = await axios.get('https://api.chucknorris.io/jokes/categories')
    .then(function (response) {
      const { data } = response;
      return data
    })
  return fetchAPI
}

const getCategoriesBySubject = async (subject) => {
  const fetchAPI = await axios.get(`https://api.chucknorris.io/jokes/random?category=${subject}`)
    .then(function (response) {
      const { data } = response;
      return data
    })
  return fetchAPI
}

const getRandomJoke = async (subject) => {
  const fetchAPI = await axios.get(`https://api.chucknorris.io/jokes/random`)
    .then(function (response) {
      const { data } = response;
      return data
    })
  return fetchAPI
}


module.exports = {
  getCategories,
  getRandomJoke,
  getCategoriesBySubject,
}