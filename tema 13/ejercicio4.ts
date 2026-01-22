interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

function ejecutarEjercicio4(): void {
    console.clear();
    console.log("--- Ejecutando Ejercicio 4: Interfaces como Tipo ---");

    const raton: Producto = {
        id: 1,
        nombre: "Ratón Inalámbrico",
        precio: 15.99
    };
    
    console.log("Objeto Producto válido:", raton);

    console.log("Nota: La asignación incorrecta está comentada para validar el tipado estático.");
}

document.getElementById('btn-ex4')?.addEventListener('click', ejecutarEjercicio4);