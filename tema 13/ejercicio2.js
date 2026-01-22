"use strict";
function ejecutarEjercicio2() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 2: Funciones Tipadas ---");
    function calcularMedia(num1, num2) {
        return (num1 + num2) / 2;
    }
    const resultado = calcularMedia(10, 20);
    console.log(`La media de 10 y 20 es: ${resultado}`);
    console.log("Nota: La llamada incorrecta 'calcularMedia(\"10\", 20)' está comentada para evitar errores de compilación.");
}
document.getElementById('btn-ex2')?.addEventListener('click', ejecutarEjercicio2);
//# sourceMappingURL=ejercicio2.js.map