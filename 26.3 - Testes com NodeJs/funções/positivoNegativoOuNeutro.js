const positivoNegativoOuNeutro = (a) => {
    if (a > 0) {
        return 'positivo'
    }
    else if (a < 0) {
        return 'negativo'
    }
    else if (a === 0) {
        return 'neutro'
    }
    else return 'não é um número'
}

module.exports = positivoNegativoOuNeutro;
