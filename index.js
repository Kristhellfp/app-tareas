import {headerTrabajo } from "./componentes/header/header.js";  
import { formulario } from "./componentes/formulario/formulario.js"; 
import { tareas } from "./componentes/tareas/tareas.js";

let DOM = document.querySelector("#root");


DOM.appendChild(headerTrabajo());  
DOM.appendChild(formulario());
DOM.appendChild(tareas());