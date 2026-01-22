"use strict";
function ejecutarEjercicio3() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 3: Parámetros Opcionales ---");
    function saludar(nombre) {
        if (nombre) {
            console.log(`Hola, ${nombre}`);
        }
        else {
            console.log("Hola, invitado");
        }
    }
    console.log("Llamada con nombre:");
    saludar("Ana");
    console.log("Llamada sin nombre:");
    saludar();
}
document.getElementById('btn-ex3')?.addEventListener('click', ejecutarEjercicio3);
//# sourceMappingURL=ejercicio3.js.map