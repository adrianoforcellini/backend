const { expect } = require('chai');

const fs = require('fs');

const writeFile = require('../writeFile/writeFile');

describe('Executa a função escrevaArquivo', () => {
  describe('a resposta', () => {
    it('é uma "string"', async () => {
      await writeFile('arquivo.txt', '#vqv conteúdo');
      const conteudoDoArquivo = fs.readFileSync('./arquivo.txt', 'utf8');
      expect(conteudoDoArquivo).to.be.a('string');
    });

    it('é igual a "ok"', async () => {
        const resposta =  await writeFile('arquivo.txt', '#vqv conteúdo');
        expect(resposta).to.be.equals('ok');
      });
    });
  });