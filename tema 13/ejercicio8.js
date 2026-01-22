"use strict";
function ejecutarEjercicio8() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 8: Manejo de Errores ---");
    function doblarPositivo(numero) {
        if (numero < 0) {
            throw new Error("El número no puede ser negativo.");
        }
        return numero * 2;
    }
    try {
        const valor = 5;
        console.log(`Doblar ${valor}: ${doblarPositivo(valor)}`);
    }
    catch (error) {
        console.error("Error capturado:", error);
    }
    console.log("Intentando doblar -10...");
    try {
        const valor = -10;
        console.log(`Doblar ${valor}: ${doblarPositivo(valor)}`);
    }
    catch (error) {
        console.error("¡Se ha producido un error controlado!", error);
    }
}
document.getElementById('btn-ex8')?.addEventListener('click', ejecutarEjercicio8);
//# sourceMappingURL=ejercicio8.js.map