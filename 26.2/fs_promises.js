const fs = require('fs');
const { get } = require('http');

function getFile() {
    fs.promises.readFile('./musica.txt', 'utf-8')
        .then(content => {
            console.log(content)
        }).catch(e => {
            console.error(e.message)
        })
    console.log('\n Sabão crá crá -  Asassinas, Mamonas\n')
}

// getFile();

async function getFile2(){
   const content =  await fs.promises.readFile('./musica.txt', 'utf-8');
    console.log(content)

}
getFile2()