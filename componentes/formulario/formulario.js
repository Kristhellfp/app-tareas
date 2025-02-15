import { tareas } from './data.js';

function formulario() {
    let formulario = document.createElement('div');
    formulario.className = 'formulario';

    let titulo = document.createElement('h2');
    titulo.textContent = 'Personal';
    titulo.className = 'personal';
    formulario.appendChild(titulo);

    tareas.forEach(function (tarea) {
        let item = document.createElement('div');
        item.className = 'textos';

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'fcheckbox';
        checkbox.id = `tarea-${tarea}`;

        let label = document.createElement('label');
        label.textContent = tarea;
        label.className = 'elementos';
        label.setAttribute('for', checkbox.id);

        item.addEventListener('click', function () {
            let check = this.querySelector('.fcheckbox'); 
            check.checked = !check.checked;
            this.classList.toggle('seleccionado', check.checked);
        });

        item.appendChild(checkbox);
        item.appendChild(label);
        formulario.appendChild(item);
    });

    let bottom = document.createElement('div');
    bottom.className = 'form-bottom';

    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Write a task...';
    input.className = 'form-input';

    let button = document.createElement('button');
    button.textContent = 'Add';
    button.className = 'form-button';

    bottom.appendChild(input);
    bottom.appendChild(button);
    formulario.appendChild(bottom);

    return formulario;
}

export { formulario };
