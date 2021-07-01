const fs = require('fs');
const simpsons = require('./simpsons.json');

// console.log(simpsons)

function setFile(index, newName) {
    simpsons[index].name = newName;
    fs.promises.writeFile('./simpsons.json', JSON.stringify(simpsons))
    .then(()=> console.log(simpsons))
    .catch((error) => console.error(error.message))
}

setFile(2, "Bartholomeu Simpson")