export function headerTrabajo() {
    console.log("Creando el header...");

    let header = document.createElement('header');
    header.classList.add('headerTrabajo'); 

    let logo = document.createElement('img');
    logo.src = "https://images.vexels.com/media/users/3/158483/isolated/preview/68984377806c969d9504f0faaaede75f-silueta-de-computadora.png";
    logo.alt = "Logo";
    header.appendChild(logo);

    let h1 = document.createElement('h1');
    h1.innerText = "Fer";
    header.appendChild(h1);

    console.log(header); 

    return header;
}
