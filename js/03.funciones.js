//funciones sin parametro
function saludo(){
    console.log('Hola mundo!');
}
saludo();

function operacion(numero1 , numero2){
    var resultado = numero1 + numero2;
    console.log("Resultado: ", resultado);
}
operacion(10, 15);

//funciones sin parametros con retorno
function retorno1(){
    var numero = 5;
    return numero;
}
var retorno1 = retorno1();
console.log('Retorno', retorno1)


//funciones con retorno y parametros
function retorno2(numero){
    return numero;
}
console.log(retorno2(10));
