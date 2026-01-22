"use strict";
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}
function ejecutarEjercicio6() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 6: Clases y Encapsulación ---");
    const persona = new Persona("Carlos", 30);
    // Llamada al método
    persona.presentarse();
    // Intento de acceso a propiedad privada
    // console.log(persona.edad); 
    // Error TS: Property 'edad' is private and only accessible within class 'Persona'.
    console.log("Intento de acceder a 'persona.edad' bloqueado por TypeScript (private).");
}
document.getElementById('btn-ex6')?.addEventListener('click', ejecutarEjercicio6);
//# sourceMappingURL=ejercicio6.js.map