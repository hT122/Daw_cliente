// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// ================== EJERCICIO 1 - raizCuadrada ==================
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');

  // Función declarada: devuelve la raíz cuadrada de un número válido (>= 0)
  function raizCuadrada(numero) {
    if (typeof numero !== 'number' || Number.isNaN(numero) || numero < 0) return null;
    return Math.sqrt(numero);
  }

  const val = raizCuadrada(v);
  const res = (val === null)
    ? 'Error: introduce un número válido (≥ 0).'
    : val;

  out.textContent = `Resultado: ${res}`;
});

// ================== EJERCICIO 2 - alerta ==================
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';

  // Procedimiento: muestra un alert sin devolver valor
  function alerta(mensaje) {
    alert(mensaje);
  }

  alerta(msg);
  document.getElementById('out-e2').textContent = 'Alert mostrado correctamente.';
});

// ================== EJERCICIO 3 - new Function ==================
document.getElementById('run-e3').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e3a').value);
  const b = parseFloat(document.getElementById('a-e3b').value);
  const out = document.getElementById('out-e3');

  if (Number.isNaN(a) || Number.isNaN(b)) {
    out.textContent = 'Introduce dos números válidos.';
    return;
  }

  // Construye dinámicamente una función suma(a,b) => number
  const suma = new Function('a', 'b', 'return a + b;');
  const res = suma(a, b);

  out.textContent = `Resultado: ${res}`;
});

// ================== EJERCICIO 4 - Hoisting con var ==================
document.getElementById('run-e4').addEventListener('click', function () {
  const out = document.getElementById('out-e4');

  function demoHoisting() {
    // Debido al hoisting, 'x' existe aquí pero vale undefined
    console.log('Antes de asignar, x =', x);
    var x = 5; // declaración hoisted, asignación aquí
    console.log('Después de asignar, x =', x);
  }

  demoHoisting();
  out.textContent = 'Consulta la consola: primero verás undefined y luego 5. (var se eleva/hoistea)';
});

// ================== EJERCICIO 5 - IIFE ==================
document.getElementById('run-e5').addEventListener('click', function () {
  const out = document.getElementById('out-e5');

  // IIFE que hace console.log y devuelve un valor
  const resultado = (function () {
    console.log('Dentro de la IIFE: ejecutándose inmediatamente...');
    return 'Valor devuelto por la IIFE';
  })();

  out.textContent = `Resultado: ${resultado}`;
});

// ================== EJERCICIO 6 - Función anónima dividir ==================
document.getElementById('run-e6').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);
  const out = document.getElementById('out-e6');

  const dividir = function (x, y) {
    if (Number.isNaN(x) || Number.isNaN(y)) return 'Entrada no válida';
    if (y === 0) return 'División por cero';
    return x / y;
  };

  const res = dividir(a, b);
  out.textContent = `Resultado: ${res}`;
});

// ================== EJERCICIO 7 - Función flecha multiplicar ==================
document.getElementById('run-e7').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);
  const out = document.getElementById('out-e7');

  const multiplicar = (x, y) => x * y;

  if (Number.isNaN(a) || Number.isNaN(b)) {
    out.textContent = 'Introduce dos números válidos.';
    return;
  }

  out.textContent = `Resultado: ${multiplicar(a, b)}`;
});

// ================== EJERCICIO 8 - Parámetros por defecto ==================
document.getElementById('run-e8').addEventListener('click', function () {
  const nombreInput = document.getElementById('a-e8').value;
  const out = document.getElementById('out-e8');

  function saludar(nombre = 'Invitado') {
    return `Hola, ${nombre}`;
  }

  const res = nombreInput ? saludar(nombreInput) : saludar();
  out.textContent = res;
});

// ================== EJERCICIO 9 - Funciones anidadas (closure) ==================
document.getElementById('run-e9').addEventListener('click', function () {
  const out = document.getElementById('out-e9');

  function externa() {
    let contador = 0;
    contador++; // incrementamos en el ámbito externo

    function interna() {
      // "interna" recuerda el entorno donde fue creada (closure)
      return contador;
    }

    return interna(); // devolvemos el valor actual de contador
  }

  const res = externa();
  out.textContent = `Resultado: ${res} — La función interna puede leer 'contador' gracias al closure.`;
});

// ================== EJERCICIO 10 - Métodos nativos ==================
document.getElementById('run-e10').addEventListener('click', function () {
  const txt = String(document.getElementById('a-e10').value || '');
  const out = document.getElementById('out-e10');

  const len = txt.length;
  const upper = txt.toUpperCase();
  const trimmed = txt.trim();
  const idx = txt.indexOf('Mundo'); // -1 si no existe
  const rnd = Math.random().toFixed(4);
  const now = Date.now();

  out.innerHTML = [
    `length: ${len}`,
    `toUpperCase: '${upper}'`,
    `trim: '${trimmed}'`,
    `indexOf 'Mundo': ${idx}`,
    `Math.random(): ${rnd}`,
    `Date.now(): ${now}`
  ].join('<br>');
});

