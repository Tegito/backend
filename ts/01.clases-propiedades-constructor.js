// CLASE: Una clase es un modelo que se utiliza para crear objetos que comparten un mismo comportimiento, estado e identidad
var Propiedades = (function () {
    //EL CONSTRUCTOR: Se utiliza para asignar valor a las propiedades globales
    function Propiedades() {
        this.texto = "Palabra";
        console.log("texto", this.texto);
        this.numero = 5;
        console.log("numero", this.numero);
        this.boleana = true;
        console.log("boleana", this.boleana);
        this.arreglo = ["texto1", "texto2", 0, true];
        console.log("arreglo", this.arreglo);
        this.cualquiera = { "propiedad1": "valor1",
            "propiedad2": "valor2",
            "propiedad3": "valor3" };
        console.log("cualquiera", this.cualquiera);
    }
    return Propiedades;
}());
var objeto = new Propiedades();
