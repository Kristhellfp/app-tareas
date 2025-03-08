
function marcarTarea() {
    if (!this.classList.contains('hola')) {
        this.classList.add('hola');
        this.querySelector('input').checked = true;
    } else {
        this.classList.remove('hola');
        this.querySelector('input').checked = false;
    }
}


export { marcarTarea };