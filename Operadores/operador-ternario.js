//Operador Ternario é basicamente um if, porém com uma 
//maneira especial, em uma unica linha

const idadeMinima = 18;
const idadeCliente = 19;

if(idadeCliente >= idadeMinima){
    console.log("Cerveja");
}else{
    console.log("Suco ou Refrigerante");
}

console.log(idadeCliente >= idadeMinima? "Cerveja": "Refrigerante ou Suco");