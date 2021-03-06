// exercicio1
function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor muito baixo');
    }

    resolve(result);
  });
}

doMath(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

// exercicio 2
function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  doMath(...randomNumbers)
    .then(result => console.log(result, 'callDoMath'))
    .catch(err => console.error(err.message))
}

callDoMath()

async function callDoMathAsync() {
  /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  try {
    const result = await doMath(...randomNumbers);
    console.log(result, 'callDoMathAsync');
  } catch (err) {
    console.error(err);
  }
} 
callDoMathAsync()
