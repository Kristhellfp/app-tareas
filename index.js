import { cargarFormulario } from "./componentes/formulario/formulario.js";
import { headerTrabajo } from "./componentes/header/header.js";
import { consultarTareasBackend } from "./componentes/tareas/tareas.js";


function cargarDOM() {
    const root = document.querySelector("#root");

    
    if (!root) {
        console.error("No se encontró el elemento #root en el DOM.");
        return;
    }

    
    root.innerHTML = "";

   
    root.appendChild(headerTrabajo());

    
    root.appendChild(cargarFormulario());

    
    consultarTareasBackend();
}


document.addEventListener('DOMContentLoaded', () => {
    cargarDOM();
});
