"use strict";
function ejecutarEjercicio1() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 1: Tipos Básicos ---");
    let nombreAlumno = "Juan Pérez";
    let edad = 20;
    let estaMatriculado = true;
    let notas = [7.5, 8.2, 6.9, 9.0];
    const NOMBRE_CENTRO = "IES Tecnológico Davante";
    console.log("Información del Alumno:");
    console.log(`Centro Educativo: ${NOMBRE_CENTRO}`);
    console.log(`Nombre: ${nombreAlumno}`);
    console.log(`Edad: ${edad} años`);
    console.log(`¿Matriculado?: ${estaMatriculado ? "Sí" : "No"}`);
    console.log("Notas:", notas);
}
const btnEx1 = document.getElementById('btn-ex1');
if (btnEx1) {
    btnEx1.addEventListener('click', ejecutarEjercicio1);
}
else {
    console.error("El botón del Ejercicio 1 no se encontró en el DOM.");
}
//# sourceMappingURL=ejercicio1.js.map