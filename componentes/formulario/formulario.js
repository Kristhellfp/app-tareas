export function cargarFormulario() {
    let formulario = document.createElement('div');
    formulario.className = 'formulario';

    let titulo = document.createElement('h2');
    titulo.textContent = 'Lista de Tareas';
    formulario.appendChild(titulo);

  
    let listaTareas = document.createElement('ul');
    listaTareas.className = 'lista-tareas';
    formulario.appendChild(listaTareas);

    
    let formBottom = document.createElement('div');
    formBottom.className = 'form-bottom';

    let inputTarea = document.createElement('input');
    inputTarea.className = 'form-input';
    inputTarea.type = 'text';
    inputTarea.placeholder = 'Escribe una tarea...';

    let botonAgregar = document.createElement('button');
    botonAgregar.className = 'form-button';
    botonAgregar.textContent = 'Agregar';

    formBottom.appendChild(inputTarea);
    formBottom.appendChild(botonAgregar);
    formulario.appendChild(formBottom);

   
    botonAgregar.addEventListener('click', () => {
        let tareaTexto = inputTarea.value.trim();
        if (tareaTexto !== '') {
            let tarea = document.createElement('li');
            tarea.className = 'textos';
            tarea.innerHTML = `
                <input type="checkbox" class="fcheckbox">
                <span class="elementos">${tareaTexto}</span>
            `;
            listaTareas.appendChild(tarea);

         
            tarea.addEventListener('click', (e) => {
                const check = tarea.querySelector('.fcheckbox');
                if (e.target !== check) {  
                    check.checked = !check.checked;  
                }
            });

            inputTarea.value = ''; 
        }
    });

    return formulario;
}
