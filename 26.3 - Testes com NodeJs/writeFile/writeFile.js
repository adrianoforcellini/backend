const fs = require('fs');

async function writeFile(nomeDoArquivo, conteudoDoArquivo) {
    await fs.promises.writeFile(`./${nomeDoArquivo}`, conteudoDoArquivo)
    return 'ok'
}

module.exports = writeFile;
