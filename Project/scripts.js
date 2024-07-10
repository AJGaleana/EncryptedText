document.addEventListener('DOMContentLoaded', function() {
    const inputTexto = document.getElementById('miCajaDeTexto');

    inputTexto.addEventListener('focus', function() {
        if (this.value === 'Haz clic aquí para escribir') {
            this.value = '';
        }
    });

    inputTexto.addEventListener('blur', function() {
        if (this.value === '') {
            this.value = 'Haz clic aquí para escribir';
        }
    });
});
