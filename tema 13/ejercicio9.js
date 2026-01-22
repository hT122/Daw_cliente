"use strict";
function ejecutarEjercicio9() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 9: Uso de unknown ---");
    function toUpperSeguro(valor) {
        if (typeof valor === 'string') {
            return valor.toUpperCase();
        }
        else {
            throw new Error("El valor proporcionado no es un texto.");
        }
    }
    try {
        const texto = "hola mundo";
        console.log(`Original: ${texto} | Transformado: ${toUpperSeguro(texto)}`);
    }
    catch (error) {
        console.error(error);
    }
    try {
        console.log("Intentando transformar un número...");
        console.log(toUpperSeguro(12345));
    }
    catch (error) {
        console.error("Error detectado:", error);
    }
}
document.getElementById('btn-ex9')?.addEventListener('click', ejecutarEjercicio9);
//# sourceMappingURL=ejercicio9.js.map