const readline = require('readline-sync');

function bhaskara(a,){
console.log('Cálculo de Bháskara')    
a = readline.questionInt('Digite o valor de A: ')
b = readline.questionInt('Digite o valor de B: ')
c = readline.questionInt('Digite o valor de C: ')
console.log('delta: ' + delta(a,b,c));
console.log(x1x2(a,b,delta(a,b,c)));
}

function delta(a,b,c){
    return b**2 - 4*a*c ;
}

function x1x2 (a,b,delta){
    x1 = -b + Math.sqrt(delta)/(2*a).toFixed(2);
    x2 = -b - Math.sqrt(delta)/(2*a).toFixed(2);
    return { x1, x2 }
}

bhaskara()