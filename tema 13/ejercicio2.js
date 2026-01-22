"use strict";
function ejecutarEjercicio2() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 2: Funciones Tipadas ---");
    // Crea una función que reciba dos números y devuelva su media
    // La función debe devolver un valor de tipo number
    function calcularMedia(num1, num2) {
        return (num1 + num2) / 2;
    }
    // Realiza una llamada correcta
    const resultado = calcularMedia(10, 20);
    console.log(`La media de 10 y 20 es: ${resultado}`);
    // Realiza una llamada incorrecta (TypeScript marca error aquí)
    // calcularMedia("10", 20); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
    console.log("Nota: La llamada incorrecta 'calcularMedia(\"10\", 20)' está comentada para evitar errores de compilación.");
}
document.getElementById('btn-ex2')?.addEventListener('click', ejecutarEjercicio2);
//# sourceMappingURL=ejercicio2.js.map