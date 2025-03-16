import { cargarRegistro } from './componentes/nuevoRegistro/nuevoRegistro.js';
import { cargarLogin } from './componentes/login/login.js';
import { cargarFormulario } from './componentes/formulario/formulario.js';
import { headerTrabajo } from './componentes/header/header.js';
import { consultarTareasBackend } from './componentes/tareas/tareas.js';

function cargarDOM() {
    const root = document.querySelector("#root");

    if (!root) {
        console.error("No se encontró el elemento #root en el DOM.");
        return;
    }

    root.innerHTML = "";  

    root.appendChild(headerTrabajo());

    const registroDiv = cargarRegistro();
    const loginDiv = cargarLogin();
    const formularioDiv = cargarFormulario(); 

    function mostrarRegistro() {
        root.innerHTML = "";
        root.appendChild(headerTrabajo()); 
        root.appendChild(registroDiv);
    }

 
    function mostrarLogin() {
        root.innerHTML = "";
        root.appendChild(headerTrabajo()); 
        root.appendChild(loginDiv); 
    }

    function mostrarTareas() {
        root.innerHTML = "";
        root.appendChild(headerTrabajo());
        root.appendChild(formularioDiv); 
        consultarTareasBackend(); 
    }

    mostrarRegistro();

    const botonRegistro = registroDiv.querySelector('button'); 
    botonRegistro.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarLogin(); 
    });

    const botonLogin = loginDiv.querySelector('button'); 
    botonLogin.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarTareas();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarDOM();
});
