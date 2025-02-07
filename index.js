import {headerTrabajo } from "./componentes/header/header.js";  
import { formulario } from "./componentes/formulario/formulario.js"; 
import { tareas } from "./componentes/tareas/tareas.js";

let DOM = document.querySelector("#root");


let forms =   document.createElement('div');
forms.className = "contenido";




DOM.appendChild(headerTrabajo());  
DOM.appendChild(formulario());
DOM.appendChild(tareas());
DOM.appendChild(forms());
