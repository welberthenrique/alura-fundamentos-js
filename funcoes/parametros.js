//Parametros de função


function soma(a, b){
    return a + b;
}

console.log(soma(2,2));


// parametros x argumentos


//ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("welbert", 27));


function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}
                            //9       //6  
console.log(multiplica(soma(4,5)));



function comParametro(param) {
    console.log(param)
}
comParametro()