const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
    const { id, firstName, middleName, lastName } = authorData;

    const fullName = [firstName, middleName, lastName]
        .filter((name) => name)
        .join(' ');

    return {
        id,
        firstName,
        middleName,
        lastName,
        name: fullName,
    };
};

// Converte o nome dos campos de snake_case para camelCase

const convertFields = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
});

// Busca todos os autores do banco.

const getAll = async () => {
    return connection()
        .then((db) => db.collection('authors').find().toArray())
            .then((authors) =>
                authors.map(({ _id, firstName, middleName, lastName }) =>
                getNewAuthor({
                    id: _id,
                    firstName,
                    middleName,
                    lastName,
                })
            )
        );
}

const findById = async (id) => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id=?',
        [id]
    );
    if (authorData.length === 0) return null;
    const { firstName, middleName, lastName } = authorData.map(convertFields)[0];
    return getNewAuthor({
        id,
        firstName,
        middleName,
        lastName,
    })
}
module.exports = {
    getAll, 
    findById
};