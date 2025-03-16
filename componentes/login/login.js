export function cargarLogin() {
    const divLogin = document.createElement('div');
    divLogin.className = 'login';

    const h2 = document.createElement('h2');
    h2.innerText = 'Iniciar sesión';
    divLogin.appendChild(h2);

    const form = document.createElement('form');

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = 'Correo electrónico';
    form.appendChild(email);

    const password = document.createElement('input');
    password.type = 'password';
    password.placeholder = 'Contraseña';
    form.appendChild(password);

    const botonLogin = document.createElement('button');
    botonLogin.type = 'submit';
    botonLogin.innerText = 'Iniciar sesión';
    form.appendChild(botonLogin);

    divLogin.appendChild(form);

    return divLogin;
}
    