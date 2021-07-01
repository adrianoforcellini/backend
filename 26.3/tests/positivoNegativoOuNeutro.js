const { expect } = require('chai');

const positivoNegativoOuNeutro = require('../funções/positivoNegativoOuNeutro');

describe('Quando o numero for positivo ', () => {
    it('retorna positivo', () => {
        const resposta = positivoNegativoOuNeutro(1);
        expect(resposta).to.be.equals('positivo');
    });
});

describe('Quando o numero for negativo ', () => {
    it('retorna negativo', () => {
        const resposta = positivoNegativoOuNeutro(-1);
        expect(resposta).to.be.equals("negativo");
    });
});

describe('Quando o numero for neutro', () => {
    it('retorna neutro', () => {
        const resposta = positivoNegativoOuNeutro(0);
        expect(resposta).to.be.equals("neutro");
    });
});

describe('Quando o parametro passado não for do tipo number', () => {
    it('retorna não é um número', () => {
        const resposta = positivoNegativoOuNeutro('0');
        expect(resposta).to.be.equals("não é um número");
    });
});