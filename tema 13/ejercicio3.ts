function ejecutarEjercicio3(): void {
    console.clear();
    console.log("--- Ejecutando Ejercicio 3: Parámetros Opcionales ---");

    // Función saludar con parámetro opcional
    function saludar(nombre?: string): void {
        if (nombre) {
            console.log(`Hola, ${nombre}`);
        } else {
            console.log("Hola, invitado");
        }
    }

    // Pruebas
    console.log("Llamada con nombre:");
    saludar("Ana");

    console.log("Llamada sin nombre:");
    saludar();
}

document.getElementById('btn-ex3')?.addEventListener('click', ejecutarEjercicio3);