const { expect } = require('chai');

const calculadora = require('../funções/calculadora');

describe('Quando a conta for uma soma de 1 e 1', () => {
    it('retorna 2', () => {
      const resposta = calculadora(1,1,'soma');
      expect(resposta).to.be.equals(2);
    });
  });

  describe('Quando a conta for uma multiplicação de 1 e 1', () => {
    it('retorna 1', () => {
      const resposta = calculadora(1,1,'multiplicacao');
      expect(resposta).to.be.equals(1);
    });
  });

  describe('Quando a conta for uma subtração de 1 e 1', () => {
    it('retorna 0', () => {
      const resposta = calculadora(1,1,'subtracao');
      expect(resposta).to.be.equals(0);
    });
  });

  describe('Quando a conta for uma divisao de 3 e 1', () => {
    it('retorna 3', () => {
      const resposta = calculadora(3,1,'divisao');
      expect(resposta).to.be.equals(3);
    });
  });
  