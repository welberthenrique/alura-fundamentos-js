//Terceiro tipo de escrever funções =>

//forma declarativa
function apresentar(nome){
    return `Meu nome é ${nome}`;
}

//arrow function
//nao pode ser nomeada
        //nome da variavel  //parametro   //return
const apresentarArrow = nome => `meu nome é ${nome}`;



const soma = (num1, num2) => num1 + num2;
console.log(soma(2,2)); 
//arrow function com mais de uma linha de instruçao

//Hoisting: arrow function se comporta como função de expressão. não fuciona
const somaNumerosPequenos = (num1, num2) => {
    if(num1 ||num2 > 10){
        return "somente numeros de 1 a 9";
    }else{
        return num1 + num2;
    }
}

