const usersModel = require('../models/Users');

const listAll = (req, res) => {
    try {
        const data = usersModel.getAll();
        res.status(200).json(data)
        console.log(data)
    }
    catch (error) {
        res.status(500).json({ message: 'Bad Request' })
    }
}

module.exports = {
    listAll
};
