"use strict";
class AlumnoApp {
    constructor(id, nombre, notas) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }
    calcularMedia() {
        if (this.notas.length === 0)
            return 0;
        const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return suma / this.notas.length;
    }
    obtenerResumen() {
        const media = this.calcularMedia().toFixed(2);
        return `ID: ${this.id} | Alumno: ${this.nombre} | Media: ${media}`;
    }
}
function ejecutarEjercicio10() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 10: Mini Proyecto Gestión Alumnos ---");
    const clase = [];
    clase.push(new AlumnoApp(1, "Maria Sanchez", [8, 9, 7]));
    clase.push(new AlumnoApp(2, "Pedro Almodovar", [5, 6, 5]));
    clase.push(new AlumnoApp(3, "Luisa Lane", [9, 10, 10]));
    console.log("--- Resumen de Alumnos ---");
    let sumaMediasGlobales = 0;
    clase.forEach(alumno => {
        console.log(alumno.obtenerResumen());
        sumaMediasGlobales += alumno.calcularMedia();
    });
    const mediaGlobal = sumaMediasGlobales / clase.length;
    console.log("--------------------------");
    console.log(`MEDIA GLOBAL DE LA CLASE: ${mediaGlobal.toFixed(2)}`);
}
document.getElementById('btn-ex10')?.addEventListener('click', ejecutarEjercicio10);
//# sourceMappingURL=ejercicio10.js.map