const productsModel = require('../models/Products');

const listAll = (req, res) => {
    try {
        const data = productsModel.getAll();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: 'Bad Request' })
    }
}

module.exports = {
    listAll
};

