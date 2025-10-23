/* =========================================================================
   Tema 5 – Práctica DOM - Archivo del Alumno (robusto)
   ========================================================================= */

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    /* -------------------------- Utilidades comunes --------------------------- */
    const contenedor = document.getElementById('contenido');
    if (!contenedor) {
      console.error('No se encontró el contenedor #contenido en el documento.');
      return;
    }

    /* ================= Ejercicio 1 – Selectores y modificación =============== */
    const btnEj1 = document.getElementById('btn-ej1');
    if (btnEj1) {
      btnEj1.addEventListener('click', () => {
        // 1) Cambiar texto del primer párrafo
        const p1 = contenedor.querySelector('p');
        if (p1) p1.textContent = 'Texto modificado por JavaScript';

        // 2) Aplicar clase 'resaltado' al segundo párrafo
        const p2 = contenedor.querySelectorAll('p')[1];
        if (p2) p2.classList.add('resaltado');

        // 3) Cambiar color del tercer párrafo a rojo
        const p3 = contenedor.querySelectorAll('p')[2];
        if (p3) p3.style.color = 'red';
      });
    } else {
      console.warn('No se encontró el botón #btn-ej1.');
    }

    /* ============== Ejercicio 3 – Eventos de ratón (hover) =================== */
    function onEnter(e) {
      e.currentTarget.style.backgroundColor = '#e9ecef'; // gris claro
    }
    function onLeave(e) {
      e.currentTarget.style.backgroundColor = '';
    }
    function aplicarHover(parrafo) {
      parrafo.addEventListener('mouseenter', onEnter);
      parrafo.addEventListener('mouseleave', onLeave);
    }
    // Aplicar hover a párrafos iniciales
    contenedor.querySelectorAll('p').forEach(aplicarHover);

    /* =========== Ejercicio 2 – Crear y eliminar elementos del DOM ============ */
    const btnAdd = document.getElementById('btn-add');
    const btnRemove = document.getElementById('btn-remove');

    function anadirParrafo() {
      const p = document.createElement('p');
      p.textContent = 'Nuevo párrafo añadido';
      p.classList.add('mb-2');
      contenedor.appendChild(p);
      aplicarHover(p); // que también cumplan el Ejercicio 3
      console.info('Párrafo añadido');
    }

    function eliminarParrafo() {
      const parrafos = contenedor.getElementsByTagName('p');
      if (parrafos.length > 0) {
        contenedor.removeChild(parrafos[parrafos.length - 1]);
        console.info('Último párrafo eliminado');
      } else {
        console.info('No hay párrafos para eliminar');
      }
    }

    if (btnAdd) {
      btnAdd.addEventListener('click', anadirParrafo);
    } else {
      console.warn('No se encontró el botón #btn-add.');
    }
    if (btnRemove) {
      btnRemove.addEventListener('click', eliminarParrafo);
    } else {
      console.warn('No se encontró el botón #btn-remove.');
    }

    /* ============== Ejercicio 4 – Inputs y validación básica ================= */
    const inputNuevoTexto = document.getElementById('nuevoTexto');
    const btnCambiar = document.getElementById('btn-cambiar');
    const msgError = document.getElementById('msg-ej4');

    if (btnCambiar && inputNuevoTexto && msgError) {
      btnCambiar.addEventListener('click', () => {
        const valor = inputNuevoTexto.value.trim();
        if (!valor) {
          msgError.classList.remove('d-none');
          inputNuevoTexto.focus();
          return;
        }
        msgError.classList.add('d-none');
        const primerParrafo = contenedor.querySelector('p');
        if (primerParrafo) primerParrafo.textContent = valor;
      });
    } else {
      console.warn('Faltan elementos del Ejercicio 4 (#btn-cambiar, #nuevoTexto o #msg-ej4).');
    }

    /* ================== Ejercicio 5 – Lista de tareas ======================== */
    const tareaInput = document.getElementById('tareaInput');
    const btnTarea = document.getElementById('btn-tarea');
    const btnBorrarCompletadas = document.getElementById('btn-borrar-completadas');
    const listaTareas = document.getElementById('listaTareas');

    if (btnTarea && tareaInput && listaTareas) {
      btnTarea.addEventListener('click', () => {
        const texto = tareaInput.value.trim();
        if (!texto) return;
        const li = document.createElement('li');
        li.textContent = texto;
        li.addEventListener('click', () => li.classList.toggle('completada'));
        listaTareas.appendChild(li);
        tareaInput.value = '';
        tareaInput.focus();
      });
    } else {
      console.warn('Faltan elementos del Ejercicio 5 (#btn-tarea, #tareaInput o #listaTareas).');
    }

    if (btnBorrarCompletadas && listaTareas) {
      btnBorrarCompletadas.addEventListener('click', () => {
        const completadas = listaTareas.querySelectorAll('li.completada');
        completadas.forEach(li => li.remove());
      });
    }
  });
})();