"use strict";
function ejecutarEjercicio5() {
    console.clear();
    console.log("--- Ejecutando Ejercicio 5: Arrays de Interfaces ---");
    const carrito = [
        { id: 1, nombre: "Monitor", precio: 150 },
        { id: 2, nombre: "Teclado Mecánico", precio: 80 },
        { id: 3, nombre: "Auriculares", precio: 45.50 }
    ];
    let precioTotal = 0;
    console.log("Listado de productos:");
    carrito.forEach(p => {
        console.log(`- ${p.nombre}: ${p.precio}€`);
        precioTotal += p.precio;
    });
    console.log("---------------------------");
    console.log(`Precio Total: ${precioTotal}€`);
}
document.getElementById('btn-ex5')?.addEventListener('click', ejecutarEjercicio5);
//# sourceMappingURL=ejercicio5.js.map