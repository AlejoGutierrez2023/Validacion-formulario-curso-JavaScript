
const submitFunction = (event) => {
    
    if(!validarFormulario()){
        event.preventDefault(); //previene el envío del formulario si no es válido
    }else{
        event.preventDefault();

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de estudios: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}


document.getElementById("formulario").addEventListener('submit', submitFunction); //escucha el evento submit del formulario

function validarFormulario(){

    //validar campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); //error + id con la primera mayuscula + el resto del id
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'El campo no puede estar vacío');
            validacionCorrecta = false;
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, 'El campo debe tener al menos 3 caracteres');
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo);
        }
    })

    //validar email
    const email = document.getElementById('email'); 
    let errorEmail = document.getElementById('errorEmail');
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ //expresión regular para validar email
        ocultarError(errorEmail);
    }else{
        mostrarError(errorEmail, 'El email no es válido');
        validacionCorrecta = false;
    }

    //validar edad
    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');

    if(edad.value < 18){
        mostrarError(errorEdad, 'Debes ser mayor de 18 años');
        validacionCorrecta = false;
    }else{
        ocultarError(errorEdad);
    }

    //validar actividad
    const actividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad');

    if(actividad.value == ''){
        mostrarError(errorActividad, 'Debes seleccionar una actividad');
        validacionCorrecta = false;
    }else{
        ocultarError(errorActividad);
    }

    //validar nivel de estudios
    const nivelEstudio = document.getElementById('nivelEstudio');
    let errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Debes seleccionar un nivel de estudios');
        validacionCorrecta = false;
    }else{
        ocultarError(errorNivelEstudio);
    }

    //validar acepto términos
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debes aceptar los términos y condiciones');
        validacionCorrecta = false;
    }else{
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta; //retorna true si el form es valido, false si no

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = 'block';
}