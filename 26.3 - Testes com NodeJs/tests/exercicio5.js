const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const writeFile = require('../writeFile/writeFile');

const escrevaArquivo = require('../writeFile/writeFile');

describe('Executa a função escrevaArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', async () => {
      const resposta = await escrevaArquivo('arquivo.txt', '#vqv conteúdo');
      const conteudoDoArquivo = fs.readFileSync('./arquivo.txt', 'utf8');
      expect(conteudoDoArquivo).to.be.a('string');
    });

    it('é igual a "ok"', async () => {
      const resposta = await escrevaArquivo('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.equals('ok');
    });
  });
});