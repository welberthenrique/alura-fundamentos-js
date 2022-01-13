//tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;


console.log(operacaoMatematica);

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;
console.log(novaOperacao);

//NaN -> Not A Number (Não é um número)

const alura = 10e+3; //-> dessa forma pode ser representado em javascript 10^3 (10 elevado a 3)

console.log(`10³ = ${alura}`);



//Arredondando números 

const salario = 3000;
const horaTrabalhada = 176;

const result = salario / horaTrabalhada;


//Convertendo número 
console.log(Math.round(result)); //arredonda o número
console.log(result.toFixed(2)); //aredonda o numero com casa decimal
//Convertendo número para formato de moeda
console.log(result.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})); //arredondo e já configuro para moeda local que eu definir

//ORDENAÇÃO DE NÚMEROS COM JAVASCRIPT

//função para ordenar números

function ordenaNumros(a,b){
    if(a == b){
        return 0;
    }
    if (a<b){
        return -1;
    }
    if (a>b){
        return 1;
    }
}

//passando a função ordenaNumeros no parametro do sort ele ordena de verdade.
let lista = [10,1,5,9,8,12,15];

console.log(lista.sort(ordenaNumros));

//A função com arrow functions fuca mais limpa e o resultado é o mesmo
//10-1 = 9 == 1 a>b
//1-5 = -4 == -1 a<b

console.log(lista.sort((a,b) => a-b));
//dois parametros a,b retorne a-b




