const categoriesModel = require('../models/categories');

const getCategories = async (_req, res) => {
  const categories = await categoriesModel.getCategories();
  return res.status(200).render('categories', { categories });
}

const getCategoriesBySubject = async (req, res) => {
  const { category } = req.params;
  const randomJokeByCategory = await categoriesModel.getCategoriesBySubject(category);
  return res.status(200).render('category', { randomJokeByCategory });
}

const getRandomJoke = async (req, res) => {
  const randomJoke = await categoriesModel.getRandomJoke();
  return res.status(200).render('randomJoke', { randomJoke });
}


module.exports = {
  getCategories,
  getCategoriesBySubject,
  getRandomJoke,
}