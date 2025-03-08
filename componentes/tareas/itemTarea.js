import { marcarTarea } from "./funcionesTareas.js";

// Función para crear una tarea
export function tarea(nombreTarea) {
    const divTarea = document.createElement('div');
    divTarea.className = "div-item";

    const check = document.createElement('input');
    check.type = "checkbox";
    divTarea.appendChild(check);

    const p = document.createElement('p');
    p.textContent = nombreTarea;
    divTarea.appendChild(p);

    // Agregar el evento de clic para marcar/desmarcar la tarea
    divTarea.addEventListener('click', marcarTarea);

    return divTarea;
}