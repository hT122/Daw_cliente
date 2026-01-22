function ejecutarEjercicio1(): void {
    console.clear();
    console.log("--- Ejecutando Ejercicio 1: Tipos Básicos ---");

    let nombreAlumno: string = "Juan Pérez";
    let edad: number = 20;
    let estaMatriculado: boolean = true;
    let notas: number[] = [7.5, 8.2, 6.9, 9.0];
    const NOMBRE_CENTRO: string = "IES Tecnológico Davante";

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
} else {
    console.error("El botón del Ejercicio 1 no se encontró en el DOM.");
}