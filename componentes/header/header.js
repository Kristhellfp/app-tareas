export function headerTrabajo() {
    const header = document.createElement('header');
    header.classList.add('headerTrabajo');  

    const logo = document.createElement('img');
    logo.src = "https://images.vexels.com/media/users/3/158483/isolated/preview/68984377806c969d9504f0faaaede75f-silueta-de-computadora.png";
    logo.alt = "Logo";
    header.appendChild(logo);

    const h1 = document.createElement('h1');
    h1.innerText = "Fer";
    header.appendChild(h1);

    return header;
}
