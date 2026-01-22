// 1. Definir la interfaz
interface Alumno {
    id: number;
    nombre: string;
    notas: number[];
}

// 2. Crear la clase que implementa la interfaz
class AlumnoApp implements Alumno {
    id: number;
    nombre: string;
    notas: number[];

    constructor(id: number, nombre: string, notas: number[]) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }

    // Método para calcular nota media
    public calcularMedia(): number {
        if (this.notas.length === 0) return 0;
        const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return suma / this.notas.length;
    }

    // Método que devuelve resumen
    public obtenerResumen(): string {
        const media = this.calcularMedia().toFixed(2);
        return `ID: ${this.id} | Alumno: ${this.nombre} | Media: ${media}`;
    }
}

function ejecutarEjercicio10(): void {
    console.clear();
    console.log("--- Ejecutando Ejercicio 10: Mini Proyecto Gestión Alumnos ---");

    // 3. Programa principal
    // Crear array de alumnos
    const clase: AlumnoApp[] = [];

    // Añadir al menos 3 alumnos
    clase.push(new AlumnoApp(1, "Maria Sanchez", [8, 9, 7]));
    clase.push(new AlumnoApp(2, "Pedro Almodovar", [5, 6, 5]));
    clase.push(new AlumnoApp(3, "Luisa Lane", [9, 10, 10]));

    // Mostrar resumen de cada alumno
    console.log("--- Resumen de Alumnos ---");
    let sumaMediasGlobales = 0;

    clase.forEach(alumno => {
        console.log(alumno.obtenerResumen());
        sumaMediasGlobales += alumno.calcularMedia();
    });

    // Calcular media global
    const mediaGlobal = sumaMediasGlobales / clase.length;

    console.log("--------------------------");
    console.log(`MEDIA GLOBAL DE LA CLASE: ${mediaGlobal.toFixed(2)}`);
}

document.getElementById('btn-ex10')?.addEventListener('click', ejecutarEjercicio10);