//condiciones
var a = 5;
var b = 10;
if( a > b ){
    console.log("A es mayor que B");
}else if( a == b ){
    console.log("A y B son iguales");
}else{
    console.log("B es mayor que A");
}
//switch
var dia = "Lunes";
switch (dia) {
    case "Sabado":
        console.log("Voy a estudiar Php");
        break;
    case "Domingo":
        console.log("Voy a tomar un helado");
        break;
    case "Lunes":
        console.log("Voy a estudiar javaScript");
        break;
    case "Martes":
        console.log("Voy a estudiar Css");
        break;
    default:
        console.log("Voy a estudiar Python");
        break;
}