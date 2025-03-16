export function cargarFormulario() {
    const formularioDiv = document.createElement('div');
    formularioDiv.className = 'formulario';

    const h2 = document.createElement('h2');
    h2.innerText = 'Lista de Tareas';
    formularioDiv.appendChild(h2);


    const listaTareas = document.createElement('div');
    listaTareas.className = 'lista-tareas';

    formularioDiv.appendChild(listaTareas);


    const botonAgregar = document.createElement('button');
    botonAgregar.innerText = 'Agregar Tarea';
    formularioDiv.appendChild(botonAgregar);

  
    botonAgregar.addEventListener('click', () => {
        agregarTarea(listaTareas);
    });

    return formularioDiv;
}


function agregarTarea(listaTareas) {
    const tareaDiv = document.createElement('div');
    
    const textoTarea = document.createElement('input');
    textoTarea.placeholder = 'Escribe tu tarea aquí...'; 
    tareaDiv.appendChild(textoTarea);

    const botonEliminar = document.createElement('button');
    botonEliminar.innerText = 'Eliminar';
    tareaDiv.appendChild(botonEliminar);

    botonEliminar.addEventListener('click', () => {
        listaTareas.removeChild(tareaDiv);
    });

    listaTareas.appendChild(tareaDiv);
}
