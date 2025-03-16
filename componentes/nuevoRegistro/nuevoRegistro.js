export function cargarRegistro() {
    const divRegistro = document.createElement('div');
    divRegistro.className = 'registro';

    const imagen = document.createElement('img');
    imagen.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-Eog0RQlsZj8%2FXv4RgFjzHfI%2FAAAAAAAAaDM%2FFMk0aLLqGc4RmAUqWbag3mBXS6MQCsDZACLcBGAsYHQ%2Fs640%2F1.png&f=1&nofb=1&ipt=17a58fb262492810aaa45eac17ff4958ef0dc51fa9a7221c3d54da4813809950&ipo=images'
    imagen.alt = 'Imagen de registro';  
    imagen.className = 'registro-imagen';  
    divRegistro.appendChild(imagen);

    const h2 = document.createElement('h2');
    h2.innerText = 'Registro';
    divRegistro.appendChild(h2);

    const form = document.createElement('form');

    const email = document.createElement('input');
    email.type = 'email';
    email.placeholder = 'Correo electrónico';
    email.className = 'form-input';  
    form.appendChild(email);

    const password = document.createElement('input');
    password.type = 'password';
    password.placeholder = 'Contraseña';
    password.className = 'form-input';  
    form.appendChild(password);

    const botonRegistro = document.createElement('button');
    botonRegistro.type = 'submit';
    botonRegistro.innerText = 'Registrarse';
    botonRegistro.className = 'form-button';  
    form.appendChild(botonRegistro);

    divRegistro.appendChild(form);

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
        const emailValue = email.value;
        const passwordValue = password.value;

        console.log('Correo:', emailValue);
        console.log('Contraseña:', passwordValue);

        alert('¡Registro exitoso!');
        
        email.value = '';
        password.value = '';
    });

    return divRegistro;
}
