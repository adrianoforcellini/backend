const jokeModel = require('../model/jokeModel.js')

const getJoke = async (_req, res) => {
  const data = await jokeModel.getJoke();
  const { joke } = data; 
  return res.status(200).render('jokes', { joke });
}

module.exports = {
  getJoke,
}