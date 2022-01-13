const texto1 = "Olá";
const texto2 = 'mundo';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";


const citacao = "O Leo disse 'oi'";

console.log(citacao);

//template string ou template literal

console.log(`${texto1}, ${texto2}!`);



const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//TRABALHANDO COM STRINGS UNIFICANDO 

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); //false

const inputMinusculo = input.toLowerCase();
console.log(cidade === inputMinusculo);


if (input.toLowerCase() === cidade){
    console.log("minusculo");
}else{
    console.log("erro");
}


const senha02 = "minhaSenhaSegura123!";
console.log(senha02.length);