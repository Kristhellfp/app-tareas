// tareas.js
function tarea(nombreTarea) {
    const divTarea = document.createElement('div');
    divTarea.className = "div-item";

    const check = document.createElement('input');
    check.type = "checkbox";
    check.className = "checkbox-tarea";  
    divTarea.appendChild(check);

    const p = document.createElement('p');
    p.textContent = nombreTarea;
    divTarea.appendChild(p);

    divTarea.addEventListener('click', (e) => {
        if (e.target !== check) { 
            check.checked = !check.checked;  
        }
    });

    return divTarea;
}

function consultarTareasBackend() {
    fetch('http://localhost:3000/tareas')
        .then(response => response.json())
        .then(data => cargarTareasDOM(data))
        .catch(error => console.error('Error al consultar tareas:', error));
}

function cargarTareasDOM(data) {
    const listaTareas = document.querySelector('.lista-tareas');

    if (!listaTareas) {
        console.error("No se encontró el contenedor de la lista de tareas.");
        return;
    }

    listaTareas.innerHTML = ""; 

    data.forEach((tareaData) => {
        if (tareaData.nombre_tarea) {
            listaTareas.appendChild(tarea(tareaData.nombre_tarea));
        }
    });
}

export { consultarTareasBackend, cargarTareasDOM };
