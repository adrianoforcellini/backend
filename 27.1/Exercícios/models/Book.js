// Chamamos a conexão com o banco para poder executar nossa query.
const connection = require('../connection');

// Função que retorna todos os livros cadastrados
const getAll = async () => {
    // Realizamos a query e extraúmos o resultado do primeiro item do array retornado pelo `mysql2`.
    const [books] = await connection.execute('SELECT * FROM model_example.books;');

    // Uma vez que obtivemos os resultados, mapeamos os campos do banco (que estão em snake case) para
    // as propriedades da nossa entidade `user`.
    return books.map(({ id, title, author_id }) => ({
        id,
        title,
        authorId: author_id
    }));
};

const getByAuthorId = async (authorId) => {
    // Utilizamos o `id` informado para buscar livros no banco
    const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
    // O caractere `?` na query será substituído pelo `authorId` que informamos no Array.
    const [books] = await connection.execute(query, [authorId]);

    // Após obter os livros, convertemos os nomes dos campos e retornamos o resultado.
    return books.map(({ id, title, author_id }) => ({
        id,
        title,
        authorId: author_id
    }));
}
// Método que será chamado quando precisarmos verificar se um livro é válido
const isValid = async (title, authorId) => {
    // Se o título não existir ou não for uma string, retornamos false
    if (!title || typeof title !== 'string' || title.length < 3) return false;
    // Se o ID do autor não for informado ou não for um número, ou se o autor em questão não existir,
    // retornamos falso
    if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

    // Caso ambos os campos sejam válidos, retornamos true.
    return true;
};

// Método que cria um novo livro no banco
const create = async (title, authorId) => connection.execute(
    // `title` e `author_id` são passados como parâmetros para serem substituídos na query
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, authorId],
);



module.exports = {
    create,
    isValid,
    getAll,
    getByAuthorId
}