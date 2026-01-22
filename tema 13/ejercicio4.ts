// Exportamos la interfaz para poder reusarla en el ejercicio 5 si fuera necesario,
// aunque aquí lo haremos autocontenido para simplificar la compilación individual.
interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

function ejecutarEjercicio4(): void {
    console.clear();
    console.log("--- Ejecutando Ejercicio 4: Interfaces como Tipo ---");

    // Variable correcta
    const raton: Producto = {
        id: 1,
        nombre: "Ratón Inalámbrico",
        precio: 15.99
    };
    
    console.log("Objeto Producto válido:", raton);

    // Intenta asignar un objeto incorrecto
    // const teclado: Producto = {
    //     id: 2,
    //     nombre: "Teclado" 
    //     // Falta 'precio', TypeScript marca error: Property 'precio' is missing in type...
    // };
    console.log("Nota: La asignación incorrecta está comentada para validar el tipado estático.");
}

document.getElementById('btn-ex4')?.addEventListener('click', ejecutarEjercicio4);