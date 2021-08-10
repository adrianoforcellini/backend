const axios = require('axios');
const readline = require('readline-sync');

function axiosGet(site) {
    axios.get(site)
        .then((response) => {
            // console.log('\n Processado os filmes...\n')
            const movies = response.data;
            movies.forEach(movie => {
                console.log(`(${movie['release_date']} ) ${movie['title']}`)
            })
        })
        .catch(error => {
            const response = { status: "site incorreto" }
            console.error(`\n(${response.status})\n`)
        })
}

// axiosGet("https://ghibliapi.herokuapap.com/films")
// axiosGet("https://ghibliapi.herokuapp.com/films")

function readlinee() {
    const site = readline.question('Digite o Site: ')
    axiosGet(site)
}

readlinee();
