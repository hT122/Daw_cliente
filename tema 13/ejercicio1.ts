// Ejercicio 1: Tipos básicos

// 1. Definición de la lógica del ejercicio
function ejecutarEjercicio1(): void {
    console.clear();
    console.log("--- Ejecutando Ejercicio 1: Tipos Básicos ---");

    // Declara variables para representar la información de un alumno [cite: 48]
    
    // Nombre del alumno (texto) [cite: 49]
    let nombreAlumno: string = "Juan Pérez";

    // Edad (número) [cite: 50]
    let edad: number = 20;

    // Si está matriculado o no (boolean) [cite: 51]
    let estaMatriculado: boolean = true;

    // Lista de notas (array de números) [cite: 52]
    // Sintaxis alternativa: let notas: Array<number> = ...
    let notas: number[] = [7.5, 8.2, 6.9, 9.0];

    // Nombre del centro educativo como constante [cite: 53]
    // En TS, const infiere el tipo literal, pero podemos explicitar string
    const NOMBRE_CENTRO: string = "IES Tecnológico Davante";

    // Muestra toda la información por consola [cite: 54]
    console.log("Información del Alumno:");
    console.log(`Centro Educativo: ${NOMBRE_CENTRO}`);
    console.log(`Nombre: ${nombreAlumno}`);
    console.log(`Edad: ${edad} años`);
    console.log(`¿Matriculado?: ${estaMatriculado ? "Sí" : "No"}`);
    console.log("Notas:", notas);
}

// 2. Vinculación con el botón del HTML
// Buscamos el botón por su ID y le añadimos el listener
const btnEx1 = document.getElementById('btn-ex1');

if (btnEx1) {
    btnEx1.addEventListener('click', ejecutarEjercicio1);
} else {
    console.error("El botón del Ejercicio 1 no se encontró en el DOM.");
}