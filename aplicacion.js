// DEFINICION DE CLASES Y HERENCIAS

// Clase bombilla

class Bombilla {
constructor(tipo, lumenes, parametro_k){
    this.tipo = tipo;
    this.lumenes = lumenes;
    this.parametro_k = parametro_k;
}
// MÉTODOS

// Método para visualización descripción general

descripcion () {
    console.log(`Bombilla de tipo ${this.tipo} con capacidad lumínica de ${this.lumenes} lumens`);
}

// Método para determinación luz cálida, fría o blanca
tonalidad () {

    switch(true){
        case this.parametro_k < 0:
        case this.parametro_k > 10000:
        case this.parametro_k === "":
        
        alert ("El parametro K es erróneo");
        break;

        case this.parametro_k <= 3300:
            console.log("Luz cálida");
           
        break;

        case this.parametro_k <= 6600:
            console.log("Luz blanca");

        break;
    
        case this.parametro_k <= 10000:  

        console.log("Luz fría");
         
        break;
}
}
}

// Herencia en clases

class Bombilla_w extends Bombilla {

    constructor (tipo, lumenes, parametro_k, potencia, equivalencia_incandescente, marca) {
    super(tipo, lumenes, parametro_k);
    this.potencia = potencia;
    this.equivalencia_incandescente;
    this.marca;
    
}

// Método para determinación de equivalencia watts en incandescente si la luz es del tipo led


    equivalencia_wats() {

        if (this.tipo = "led") {
            switch (true) {

                case this.potencia >= 4 & this.potencia < 9:
                    console.log( "Equivale a una bombilla convencional de 25 watios");

                break;

                case this.potencia >= 9 & this.potencia < 13:
                    console.log( "Equivale a una bombilla convencional de 40 watios");

                break;

                case this.potencia >= 13 & this.potencia < 15:
                    console.log( "Equivale a una bombilla convencional de 60 watios");

                break;

                case this.potencia >= 15 & this.potencia < 25:
                    console.log( "Equivale a una bombilla convencional de 75 watios");

                break;

                case this.potencia >= 25 & this.potencia < 30:
                    console.log( "Equivale a una bombilla convencional de 100 watios");
                    
                break;

                case this.potencia >= 30 & this.potencia < 40:
                    console.log( "Equivale a una bombilla convencional de 125 watios");

                break;

                case this.potencia >= 40 & this.potencia < 45:
                    console.log( "Equivale a una bombilla convencional de 150 watios");

                break;
                
            }

        } 

    }


}

// Instancias

var bombilla_1 = new Bombilla( "Led", 800, 5400);
var bombilla_2 = new Bombilla( "Mercurio", 450, -2000);
var bombilla_3 = new Bombilla_w("Led", 450, 1500, 10, "undefined", "Osram");
var bombilla_4 = new Bombilla_w("Fluorescente", 600, 3700, 150, 90, "Phillips");





