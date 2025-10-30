/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {             
    // TODO: Crear un objeto estudiante con las siguientes propiedades:
    // - nombre: "María"
    // - apellidos: "García López"
    // - edad: 20
    // - curso: "2º DAW"
    // - mostrarInfo: function() que retorne HTML con toda la información



    var estudiante = {
        // TODO: Completar las propiedades del objeto
            nombre: "maría",
            apellidos: "García López",
            edad: 20,
            curso: "2º DAW",

        mostrarInfo: function () {
            // TODO: Retornar HTML con la información del estudiante
            

            // Sugerencia: usar template strings o concatenación
        
           return `<div class='card p-3'><h5>Información del Estudiante:</h5>
           ${this.nombre} ${this.apellidos}<br>Edad: ${this.edad}<br>Curso: ${this.curso}</div>`;
           
           

        }
    };

    // TODO: Mostrar el resultado en el DOM

    // Pista: usar document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
        document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();

}           

// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    // TODO: Obtener el valor del input con id "color-input"

    // TODO: Agregar el color al array usando push()

    // TODO: Limpiar el input
    
    // TODO: Mostrar mensaje de confirmación
    var colorInput = document.getElementById("color-input");
    var nuevoColor = colorInput.value.trim();

    if (nuevoColor === "") {
        alert("Por favor, ingresa un color válido.");
        return;
    }

    colores.push(nuevoColor);
    colorInput.value = "";

    alert("Color '" + nuevoColor + "' agregado correctamente.");    
}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    // TODO: Mostrar mensaje indicando qué color se eliminó
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    if (colores.length === 0) {
        alert("El array de colores está vacío. No hay colores para eliminar.");
        return;
    }

    var colorEliminado = colores.pop();
    alert("Color '" + colorEliminado + "' eliminado correctamente.");

}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista

    var html = "<h5>Lista de Colores:</h5><ul>";
    for (var i = 0; i < colores.length; i++) {
        html += "<li>" + colores[i] + "</li>";
    }   
    // TODO: Completar el bucle para mostrar los colores

    html += "</ul>";


    document.getElementById("resultado-ej2").innerHTML = html;

}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria
    productos = [
        { nombre: "Laptop", precio: 899, categoria: "Electrónicos" },
        { nombre: "Camiseta", precio: 25, categoria: "Ropa" },
        { nombre: "Smartphone", precio: 699, categoria: "Electrónicos" },
        { nombre: "Libro", precio: 15, categoria: "Literatura" },
        { nombre: "Auriculares", precio: 120, categoria: "Electrónicos" }
        // TODO: Completar con objetos producto
        // Ejemplo: { nombre: "Laptop", precio: 899, categoria: "Electrónicos" }
    ];


    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora
    productos.sort(function (a, b) {
        return a.precio - b.precio;
    }

    );
    mostrarProductos(productos);

}

function filtrarProductosCaros() {
    // TODO: Filtrar productos con precio mayor a 50€
    // Pista: usar el método filter()
        filter(function (producto) {
        return producto.precio > 50;
    }); 
    var productosCaros = []; // TODO: Implementar el filtro
    mostrarProductos(productosCaros);
    

    
}


function mostrarProductos(arrayProductos) {
    // TODO: Mostrar los productos en formato HTML
    // Crear tarjetas o lista con nombre, precio y categoría



    var html = " <h5>Catálogo de Productos:</h5><div class='row'>";
    // TODO: Recorrer el array y crear HTML para cada producto
    for (var i = 0; i < arrayProductos.length; i++) {
        html += "<div class='col-md-4'><div class='card mb-3 p-3'>";
        html += "<h6>" + arrayProductos[i].nombre + "</h6>";
        html += "<p>Precio: " + arrayProductos[i].precio + "€</p>";
        html += "<p>Categoría: " + arrayProductos[i].categoria + "</p>";
        html += "</div></div>";
    }

    html += "</div>";
    

    document.getElementById("resultado-ej3").innerHTML = html;
}


// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {
        // TODO: Validar que la nota esté entre 0 y 10
        // TODO: Agregar la nota al array de notas
        // TODO: Mostrar mensaje de confirmación
        if (nota < 0 || nota > 10) {
            alert("La nota debe estar entre 0 y 10.");
            return;
        }

        this.notas.push(nota);
        alert("Nota " + nota + " agregada correctamente.");
    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas

        // TODO: Retornar el promedio redondeado a 2 decimales
        // Pista: usar reduce() o un bucle for
        if (this.notas.length === 0) {
            return 0;
        }

        var suma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }

        var promedio = suma / this.notas.length;
        return promedio.toFixed(2);
    },


    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas
        // TODO: Incluir el promedio si hay notas
        var html = "<h5>Notas del Estudiante:</h5><ul>";
        for (var i = 0; i < this.notas.length; i++) {
            html += "<li>" + this.notas[i] + "</li>";
        }
        html += "</ul>";

        if (this.notas.length > 0) {
            var promedio = this.calcularPromedio();
            html += "<p>Promedio: " + promedio + "</p>";
        } else {
            html += "<p>No hay notas registradas.</p>";
        }

        return html;
    }
};

function agregarNota() {
    // TODO: Obtener el valor del input de nota
    // TODO: Convertir a número
    // TODO: Llamar al método agregarNota del objeto
    // TODO: Limpiar el input
    // TODO: Actualizar la visualización
    var notaInput = document.getElementById("nota-input");
    var nuevaNota = parseFloat(notaInput.value);

    estudianteNotas.agregarNota(nuevaNota);
    notaInput.value = "";

    mostrarNotasEstudiante();
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio
    // TODO: Mostrar el resultado en el DOM
    var promedio = estudianteNotas.calcularPromedio();

    document.getElementById("resultado-ej4").innerHTML =
        "<div class='alert alert-info'>Promedio de Notas: " + promedio + "</div>";

}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    // TODO: Mostrar el resultado en el DOM
    var html = estudianteNotas.mostrarNotas();

    document.getElementById("resultado-ej4").innerHTML = html;
}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // Crear array con al menos 6 objetos empleado
    empleados = [
        { nombre: "Ana Pérez", departamento: "Ventas", salario: 3200, antiguedad: 5 },
        { nombre: "Luis Gómez", departamento: "Marketing", salario: 2800, antiguedad: 3 },
        { nombre: "Marta Sánchez", departamento: "Desarrollo", salario: 4000, antiguedad: 7 },
        { nombre: "Javier Torres", departamento: "Ventas", salario: 3100, antiguedad: 4 },
        { nombre: "Sofía Ramírez", departamento: "Recursos Humanos", salario: 2900, antiguedad: 2 },
        { nombre: "Carlos Fernández", departamento: "Desarrollo", salario: 3500, antiguedad: 6 }
        // Puedes añadir más si quieres
    ];

    // Mostrar todos al cargar
    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // Obtener el departamento del input
    var departamentoInput = document.getElementById("departamento-input");
    var departamentoBuscado = departamentoInput.value.trim().toLowerCase();

    // Si está vacío, muestro todos
    if (departamentoBuscado === "") {
        mostrarEmpleados(empleados);
        return;

    }

    // Filtrar empleados por departamento (ignorando mayúsculas/minúsculas)
    var empleadosDepto = empleados.filter(function (emp) {
        return emp.departamento.toLowerCase() === departamentoBuscado;
    });

    // Mostrar los resultados
    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {
    // Filtrar empleados con salario > 3000€
    var empleadosAltoSalario = empleados.filter(function (emp) {
        return emp.salario > 3000;
    });

    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    var html = "<h5>Lista de Empleados:</h5><div class='row'>";

    if (arrayEmpleados.length === 0) {
        html += "<p>No se encontraron empleados.</p>";
    } else {
        // Crear HTML para cada empleado
        arrayEmpleados.forEach(function (emp) {
            html += `
                <div class="col-12 col-md-6 mb-2">
                    <div class="card p-2">
                        <strong>${emp.nombre}</strong><br>
                        <span>Depto: ${emp.departamento}</span><br>
                        <span>Salario: ${emp.salario} €</span><br>
                        <span>Antigüedad: ${emp.antiguedad} años</span>
                    </div>
                </div>
            `;
        });
    }

    html += "</div>";

    document.getElementById("resultado-ej5").innerHTML = html;
}


// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // Comprobar que el array está creado
    if (ciudades.length === 0) {
        crearArrayCiudades();
    }

    // Usar splice para eliminar elementos del medio
    // Por ejemplo, quitamos las posiciones 2 y 3 (Valencia y Sevilla)
    // splice(posiciónInicial, cantidad)
    var eliminadas = ciudades.splice(2, 2); // quita "Valencia", "Sevilla"

    // Mostrar qué elementos se eliminaron y el array resultante
    var html = "<h5>Eliminar del medio (splice):</h5>";
    html += "<p><strong>Eliminadas:</strong> " + eliminadas.join(", ") + "</p>";
    html += "<p><strong>Array resultante:</strong> " + ciudades.join(", ") + "</p>";

    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // Comprobar que el array está creado
    if (ciudades.length === 0) {
        crearArrayCiudades();
    }

    // Usar slice para extraer una porción SIN modificar el original
    // Por ejemplo, sacamos desde la posición 1 hasta la 4 (sin incluir 4)
    var porcion = ciudades.slice(1, 4);

    var html = "<h5>Extraer con slice():</h5>";
    html += "<p><strong>Porción extraída:</strong> " + porcion.join(", ") + "</p>";
    html += "<p><strong>Array original (sin cambios):</strong> " + ciudades.join(", ") + "</p>";

    document.getElementById("resultado-ej6").innerHTML = html;
}

function buscarMadrid() {
    // Comprobar que el array está creado
    if (ciudades.length === 0) {
        crearArrayCiudades();
    }

    // Usar find() para buscar "Madrid"
    var encontrada = ciudades.find(function (c) {
        return c === "Madrid";
    });

    // Usar indexOf() para encontrar su posición
    var posicion = ciudades.indexOf("Madrid");

    var html = "<h5>Buscar 'Madrid'</h5>";

    if (encontrada) {
        html += "<p><strong>find():</strong> Encontrada ciudad: " + encontrada + "</p>";
        html += "<p><strong>indexOf():</strong> Posición de 'Madrid' = " + posicion + "</p>";
    } else {
        html += "<p>'Madrid' no está en el array.</p>";
    }

    document.getElementById("resultado-ej6").innerHTML = html;
}


// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// 1. Función constructora
function Vehiculo(marca, modelo, año) {
    // Propiedades
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0; // empezamos todos a 0
}

// 2. Métodos compartidos (mejor en el prototipo)
Vehiculo.prototype.acelerar = function() {
    // cada vez que acelero, sumo 10 km/h (puedes cambiarlo)
    this.velocidad += 10;
};

Vehiculo.prototype.mostrarInfo = function() {
    return `${this.marca} ${this.modelo} (${this.año}) - Velocidad: ${this.velocidad} km/h`;
};

// Array global
var vehiculos = [];

function crearVehiculos() {
    // Crear varios objetos usando el constructor
    vehiculos = [
        new Vehiculo("Toyota", "Corolla", 2018),
        new Vehiculo("Kia", "Sportage", 2020),
        new Vehiculo("Seat", "Ibiza", 2019),
        new Vehiculo("Tesla", "Model 3", 2023)
    ];

    // Mostrar en pantalla
    mostrarInfoVehiculos();
}

function acelerarTodos() {
    // Llamar al método acelerar() de todos los vehículos
    vehiculos.forEach(function(v) {
        v.acelerar();
    });

    // Actualizar la visualización
    mostrarInfoVehiculos();
}

function mostrarInfoVehiculos() {
    var html = "<h5>Vehículos:</h5>";

    // Recorrer array y mostrar info de cada vehículo
    vehiculos.forEach(function(v) {
        html += `<p>${v.mostrarInfo()}</p>`;
    });

    document.getElementById("resultado-ej7").innerHTML = html;
}


// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // Crear matriz 3x3 con números aleatorios (1..99)
    matriz = [];

    for (var i = 0; i < 3; i++) {
        var fila = [];
        for (var j = 0; j < 3; j++) {
            var num = Math.floor(Math.random() * 99) + 1;
            fila.push(num);
        }
        matriz.push(fila);
    }

    // Mostrar SOLO un mensaje de confirmación
    document.getElementById("resultado-ej8").innerHTML = "<p>Matriz creada. Pulsa <strong>Mostrar Matriz</strong> para verla.</p>";
}

function mostrarMatriz() {
    var cont = document.getElementById("resultado-ej8");

    // Si no hay matriz, aviso
    if (matriz.length === 0) {
        cont.innerHTML = "<p>Primero crea la matriz.</p>";
        return;
    }

    var html = "<h5>Matriz 3x3:</h5><table class='table table-bordered'>";

    for (var i = 0; i < 3; i++) {
        html += "<tr>";
        for (var j = 0; j < 3; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }
        html += "</tr>";
    }

    html += "</table>";

    cont.innerHTML = html + "<div id='resultado-diagonal'></div>";
}

function sumarDiagonal() {
    // Si no hay matriz, la creo y la muestro
    if (matriz.length === 0) {
        crearMatriz();
        mostrarMatriz();
    }

    var suma = 0;
    for (var i = 0; i < 3; i++) {
        suma += matriz[i][i];
    }

    var resDiag = document.getElementById("resultado-diagonal");
    if (resDiag) {
        resDiag.innerHTML = "<p><strong>Suma de la diagonal:</strong> " + suma + "</p>";
    } else {
        document.getElementById("resultado-ej8").innerHTML += "<p><strong>Suma de la diagonal:</strong> " + suma + "</p>";
    }
}





// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // Crear array con números del 1 al 10
    numeros = [];
    for (var i = 1; i <= 10; i++) {
        numeros.push(i);
    }

    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    // Si no hay números creados, los creamos
    if (numeros.length === 0) {
        crearArrayNumeros();
    }

    // Usar map() para duplicar todos los números
    var duplicados = numeros.map(function (n) {
        return n * 2;
    });

    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() {
    // Si no hay números creados, los creamos
    if (numeros.length === 0) {
        crearArrayNumeros();
    }

    // Usar filter() para obtener solo números pares
    var pares = numeros.filter(function (n) {
        return n % 2 === 0;
    });

    mostrarArray("Números pares", pares);
}

function sumarConReduce() {
    // Si no hay números creados, los creamos
    if (numeros.length === 0) {
        crearArrayNumeros();
    }

    // Usar reduce() para sumar todos los números
    var suma = numeros.reduce(function (acum, n) {
        return acum + n;
    }, 0);

    // Mantenemos lo que hubiera y añadimos el resultado
    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success mt-2'>Suma total: " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    // Esto pisa el contenido anterior (como en tus otros ejercicios)
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}


// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

// Opcional: libros de ejemplo
biblioteca = [
    { titulo: "El Quijote", autor: "Cervantes", anio: 1605, genero: "Ciencia" },
    { titulo: "Clean Code", autor: "Robert C. Martin", anio: 2008, genero: "No Ficcion" },
    { titulo: "El nombre del viento", autor: "Patrick Rothfuss", anio: 2007, genero: "Historia" },
    { titulo: "Aprende JavaScript", autor: "MDN", anio: 2021, genero: "Ciencia" }
];

function eliminarLibro(index) {
    console.log('Eliminando libro en índice:', index);
    if (index >= 0 && index < biblioteca.length) {
        var libroEliminado = biblioteca.splice(index, 1)[0];
        console.log('Libro eliminado:', libroEliminado);
        mostrarBiblioteca();
        // Mostrar mensaje de confirmación
        var mensaje = document.createElement('div');
        mensaje.className = 'alert alert-success';
        mensaje.innerHTML = `Libro "${libroEliminado.titulo}" eliminado correctamente`;
        document.getElementById('resultado-ej10').insertBefore(mensaje, document.getElementById('resultado-ej10').firstChild);
        // Eliminar el mensaje después de 3 segundos
        setTimeout(function() {
            mensaje.remove();
        }, 3000);
    }
}

function agregarLibro() {
    // Obtener valores de los inputs
    var titulo = document.getElementById("libro-titulo").value.trim();
    var autor = document.getElementById("libro-autor").value.trim();
    var anioStr = document.getElementById("libro-year").value.trim();
    var genero = document.getElementById("libro-genero").value;

    console.log('Valores obtenidos:', { titulo, autor, anioStr, genero });

    // Validar que todos los campos estén completos
    if (!titulo || !autor || !anioStr || !genero) {
        alert("Por favor, rellena todos los campos");
        return;
    }

    var anio = Number(anioStr);

    // Validar que el año sea número válido
    if (isNaN(anio) || anio < 1000 || anio > 2100) {
        alert("Por favor, introduce un año válido (entre 1000 y 2100)");
        return;
    }

    // Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        titulo: titulo,
        autor: autor,
        año: anio,
        genero: genero
    };

    console.log('Agregando libro:', libro);
    biblioteca.push(libro);

    // Limpiar los inputs
    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";
    // puedes dejar el género como está

    // Mostrar mensaje de confirmación
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-success'>Libro agregado correctamente ✅</div>";

    // Actualizar visualización
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // Ordenar libros por título alfabéticamente (copia para no mutar si no quieres)
    var librosOrdenados = [...biblioteca].sort(function (a, b) {
        return a.titulo.localeCompare(b.titulo, "es", { sensitivity: "base" });
    });

    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    console.log('Función filtrarPorGenero llamada');
    
    // Obtener género seleccionado
    var generoSelect = document.getElementById("libro-genero");
    if (!generoSelect) {
        console.error('No se encontró el elemento select de género');
        return;
    }
    
    var generoSel = generoSelect.value;
    console.log('Género seleccionado:', generoSel);

    // Si el selector está vacío o se selecciona la opción por defecto, mostramos todo
    if (!generoSel || generoSel === "") {
        console.log('No hay género seleccionado, mostrando todos los libros');
        mostrarBiblioteca();
        return;
    }

    console.log('Biblioteca actual:', biblioteca);
    // Filtrar libros por género
    var librosFiltrados = biblioteca.filter(function (libro) {
        console.log('Comparando libro:', libro.genero, 'con género seleccionado:', generoSel);
        return libro.genero === generoSel;
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // Filtrar libros publicados después del 2020
    var recientes = biblioteca.filter(function (libro) {
        return libro.anio > 2020;
    });

    mostrarLibros(recientes);
}

function mostrarLibros(arrayLibros) {
    console.log('Mostrando libros:', arrayLibros);
    var html = "<h5>Biblioteca de Libros</h5>";

    if (!arrayLibros || arrayLibros.length === 0) {
        html += "<div class='alert alert-warning'>No hay libros que mostrar para el filtro seleccionado</div>";
    } else {
        arrayLibros.forEach(function (libro, index) {
            // Encontrar el índice real en la biblioteca principal si estamos mostrando un array filtrado
            var biblioIndex = biblioteca.findIndex(l => 
                l.titulo === libro.titulo && 
                l.autor === libro.autor && 
                (l.año || l.anio) === (libro.año || libro.anio)
            );
            
            html += `
            <div class="producto-item mb-3 position-relative">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <h5 class="mb-2">${libro.titulo}</h5>
                        <p class="mb-1"><strong>Autor:</strong> ${libro.autor}</p>
                        <p class="mb-1"><strong>Año:</strong> ${libro.año || libro.anio}</p>
                        <p class="mb-1"><strong>Género:</strong> ${libro.genero}</p>
                    </div>
                    <button onclick="eliminarLibro(${biblioIndex})" class="btn btn-danger btn-sm" 
                            style="width: 32px; height: 32px; padding: 0; line-height: 32px;">
                        ×
                    </button>
                </div>
                    <p><span class="badge bg-info text-dark">${libro.genero}</span></p>
                </div>
            </div>
            `;
        });
        html += "</div>";
    }

    document.getElementById("resultado-ej10").innerHTML = html;
}

// ==============================
// EVENT LISTENERS
// ==============================
document.addEventListener("DOMContentLoaded", function () {
    // Mostrar al principio la biblioteca con los de ejemplo
    mostrarBiblioteca();

    var btnAgregar = document.getElementById("btn-agregar-libro");
    var btnMostrar = document.getElementById("btn-mostrar-biblioteca");
    var btnOrdenar = document.getElementById("btn-ordenar-titulo");
    var btnFiltrar = document.getElementById("btn-filtrar-genero");
    var btnRecientes = document.getElementById("btn-libros-recientes");

    console.log('Botones encontrados:', {
        agregar: btnAgregar,
        mostrar: btnMostrar,
        ordenar: btnOrdenar,
        filtrar: btnFiltrar,
        recientes: btnRecientes
    });

    if (btnAgregar) {
        btnAgregar.addEventListener("click", agregarLibro);
        console.log('Event listener agregado a btnAgregar');
    }
    if (btnMostrar) {
        btnMostrar.addEventListener("click", mostrarBiblioteca);
        console.log('Event listener agregado a btnMostrar');
    }
    if (btnOrdenar) {
        btnOrdenar.addEventListener("click", ordenarPorTitulo);
        console.log('Event listener agregado a btnOrdenar');
    }
    if (btnFiltrar) {
        btnFiltrar.addEventListener("click", filtrarPorGenero);
        console.log('Event listener agregado a btnFiltrar');
    }
    if (btnRecientes) {
        btnRecientes.addEventListener("click", librosRecientes);
        console.log('Event listener agregado a btnRecientes');
    }
});

// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10

});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/