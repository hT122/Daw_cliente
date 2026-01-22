"use strict";
class EmpleadoEmpresa {
    constructor(id, nombre, sueldoMensual) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    calcularSueldoAnual() {
        return this.sueldoMensual * 12;
    }
}
function ejecutarEjercicio7() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 7: Clases con Interfaces ---");
    const empleado = new EmpleadoEmpresa(101, "Laura Gómez", 2000);
    console.log(`Empleado: ${empleado.nombre}`);
    console.log(`Sueldo Mensual: ${empleado.sueldoMensual}€`);
    console.log(`Sueldo Anual: ${empleado.calcularSueldoAnual()}€`);
}
document.getElementById('btn-ex7')?.addEventListener('click', ejecutarEjercicio7);
//# sourceMappingURL=ejercicio7.js.map